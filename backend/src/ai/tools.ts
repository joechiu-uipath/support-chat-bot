import { tool, generateObject } from 'ai';
import { z } from 'zod';
import { getDb } from '../db/connection.js';
import { getModel } from './models.js';
import { isIngestionComplete } from '../rag/ingest.js';
import { multiQueryVectorSearch } from '../rag/search.js';
import type { Product, InventoryItem, Order, OrderItem, Customer } from '../types.js';

// Helper: parse features JSON safely
function parseFeatures(features: string | null): unknown[] {
  if (!features) return [];
  try {
    return JSON.parse(features);
  } catch {
    return [];
  }
}

// Helper: get additional_info snippet for AI context
function getInfoSnippet(info: string | null, maxLen = 500): string | undefined {
  if (!info) return undefined;
  return info.length > maxLen ? info.slice(0, maxLen) + '...' : info;
}

// Query expansion: ask LLM to generate FTS keywords + semantic queries
async function expandQuery(
  query: string
): Promise<{ ftsTerms: string[]; semanticQueries: string[] }> {
  try {
    const { object } = await generateObject({
      model: getModel(),
      schema: z.object({
        ftsTerms: z
          .array(z.string())
          .describe('3 keyword search terms for FTS5 full-text search (mix of zh-TW and English)'),
        semanticQueries: z
          .array(z.string())
          .describe('3 natural language queries for semantic/vector search (mix of zh-TW and English)'),
      }),
      prompt: `You are a search query expander for a Taiwanese frozen seafood e-commerce catalog (Yens 元家企業).
Given the user query, generate search terms to find relevant products.

Products include: shrimp (藍鑽蝦, 草蝦), fish (鮭魚, 鱈魚, 雪鰈), shellfish (干貝, 蛤蜊, 帝王蟹, 龍蝦, 小卷), prepared foods (佛跳牆, 海鮮濃湯).

User query: "${query}"

Generate exactly 3 FTS keyword terms (short, for SQLite FTS5 MATCH) and 3 semantic queries (natural language, for vector similarity search). Use a mix of Traditional Chinese and English.`,
    });
    return {
      ftsTerms: object.ftsTerms.slice(0, 3),
      semanticQueries: object.semanticQueries.slice(0, 3),
    };
  } catch (err) {
    console.warn('Query expansion failed, using original query:', err);
    return {
      ftsTerms: [query],
      semanticQueries: [query],
    };
  }
}

// FTS search with rank scoring
function ftsSearch(
  terms: string[],
  category?: string,
  limit = 10
): { product: Product; ftsScore: number }[] {
  const db = getDb();
  const resultMap = new Map<number, { product: Product; ftsScore: number }>();

  for (let i = 0; i < terms.length; i++) {
    const ftsQuery = terms[i].replace(/['"]/g, '');
    if (!ftsQuery.trim()) continue;

    let sql = `
      SELECT p.* FROM products p
      JOIN products_fts fts ON p.id = fts.rowid
      WHERE products_fts MATCH ?`;
    const params: unknown[] = [ftsQuery];

    if (category) {
      sql += ' AND p.category = ?';
      params.push(category);
    }
    sql += ' LIMIT ?';
    params.push(limit);

    try {
      const rows = db.prepare(sql).all(...params) as Product[];
      for (let rank = 0; rank < rows.length; rank++) {
        const p = rows[rank];
        // Score: higher rank (lower index) = higher score, earlier terms weighted more
        const score = (1.0 - rank / limit) * (1.0 - i * 0.2);
        const existing = resultMap.get(p.id);
        if (!existing || score > existing.ftsScore) {
          resultMap.set(p.id, { product: p, ftsScore: score });
        }
      }
    } catch {
      // FTS MATCH can fail on certain query strings — skip
    }
  }

  return Array.from(resultMap.values());
}

// LIKE fallback search
function likeSearch(query: string, category?: string): Product[] {
  const db = getDb();
  let sql = `
    SELECT * FROM products
    WHERE (name_zh LIKE ? OR name_en LIKE ? OR description_zh LIKE ? OR description_en LIKE ? OR additional_info LIKE ?)`;
  const params: unknown[] = Array(5).fill(`%${query}%`);
  if (category) {
    sql += ' AND category = ?';
    params.push(category);
  }
  sql += ' LIMIT 10';
  return db.prepare(sql).all(...params) as Product[];
}

export const searchProducts = tool({
  description:
    'Search the product catalog by keyword, category, or brand. Use this when a customer asks about products, wants recommendations, or is looking for something specific. Supports semantic queries like "something for a dinner party" or "healthy fish for kids".',
  inputSchema: z.object({
    query: z.string().describe('Search keyword or natural language query (product name, description, feature, or intent)'),
    category: z
      .enum(['shrimp', 'fish', 'shellfish', 'prepared'])
      .optional()
      .describe('Filter by product category'),
  }),
  execute: async ({ query, category }) => {
    const db = getDb();

    // No query — return by category or all
    if (!query) {
      let products: Product[];
      if (category) {
        products = db
          .prepare('SELECT * FROM products WHERE category = ? LIMIT 10')
          .all(category) as Product[];
      } else {
        products = db.prepare('SELECT * FROM products LIMIT 10').all() as Product[];
      }
      return {
        products: products.map((p) => ({
          id: p.id,
          name_zh: p.name_zh,
          name_en: p.name_en,
          brand: p.brand,
          category: p.category,
          description_zh: p.description_zh,
          description_en: p.description_en,
          price: p.price,
          unit: p.unit,
          image_url: p.image_url,
          features: parseFeatures(p.features),
          is_featured: !!p.is_featured,
          additional_info_snippet: getInfoSnippet(p.additional_info),
        })),
        count: products.length,
      };
    }

    // Expand query into FTS terms + semantic queries
    const { ftsTerms, semanticQueries } = await expandQuery(query);

    // Run FTS search
    const ftsResults = ftsSearch(ftsTerms, category);

    // Run vector search if embeddings are ready
    let vectorResults: { productId: number; score: number }[] = [];
    if (isIngestionComplete()) {
      try {
        const vResults = await multiQueryVectorSearch(semanticQueries, 10);
        vectorResults = vResults.map((r) => ({
          productId: r.productId,
          score: r.score,
        }));
      } catch (err) {
        console.warn('Vector search failed, using FTS only:', err);
      }
    }

    // Merge & re-rank
    const scoreMap = new Map<
      number,
      { product: Product | null; ftsScore: number; vectorScore: number }
    >();

    for (const { product, ftsScore } of ftsResults) {
      scoreMap.set(product.id, { product, ftsScore, vectorScore: 0 });
    }

    for (const { productId, score } of vectorResults) {
      const existing = scoreMap.get(productId);
      if (existing) {
        existing.vectorScore = score;
      } else {
        scoreMap.set(productId, { product: null, ftsScore: 0, vectorScore: score });
      }
    }

    // Load products for vector-only results
    for (const [id, entry] of scoreMap) {
      if (!entry.product) {
        const p = db.prepare('SELECT * FROM products WHERE id = ?').get(id) as Product | undefined;
        if (p) {
          // Apply category filter for vector results
          if (category && p.category !== category) {
            scoreMap.delete(id);
            continue;
          }
          entry.product = p;
        } else {
          scoreMap.delete(id);
        }
      }
    }

    // Combined score: 0.6 * FTS + 0.4 * Vector (favor full-text matches)
    const hasVector = vectorResults.length > 0;
    const ranked = Array.from(scoreMap.values())
      .map((entry) => {
        const combined = hasVector
          ? 0.6 * entry.ftsScore + 0.4 * entry.vectorScore
          : entry.ftsScore;
        return { product: entry.product!, combined };
      })
      .filter((r) => r.product && r.combined >= 0.2)
      .sort((a, b) => b.combined - a.combined)
      .slice(0, 10);

    // Fallback to LIKE if nothing found
    if (ranked.length === 0) {
      const likeResults = likeSearch(query, category);
      return {
        products: likeResults.map((p) => ({
          id: p.id,
          name_zh: p.name_zh,
          name_en: p.name_en,
          brand: p.brand,
          category: p.category,
          description_zh: p.description_zh,
          description_en: p.description_en,
          price: p.price,
          unit: p.unit,
          image_url: p.image_url,
          features: parseFeatures(p.features),
          is_featured: !!p.is_featured,
          additional_info_snippet: getInfoSnippet(p.additional_info),
        })),
        count: likeResults.length,
      };
    }

    return {
      products: ranked.map(({ product: p }) => ({
        id: p.id,
        name_zh: p.name_zh,
        name_en: p.name_en,
        brand: p.brand,
        category: p.category,
        description_zh: p.description_zh,
        description_en: p.description_en,
        price: p.price,
        unit: p.unit,
        image_url: p.image_url,
        features: parseFeatures(p.features),
        is_featured: !!p.is_featured,
        additional_info_snippet: getInfoSnippet(p.additional_info),
      })),
      count: ranked.length,
    };
  },
});

export const checkInventory = tool({
  description:
    'Check stock availability for a specific product across all warehouses. Use this when a customer asks if a product is in stock or available.',
  inputSchema: z.object({
    product_id: z.number().describe('The product ID to check inventory for'),
  }),
  execute: async ({ product_id }) => {
    const db = getDb();
    const product = db.prepare('SELECT * FROM products WHERE id = ?').get(product_id) as
      | Product
      | undefined;
    const inventory = db
      .prepare('SELECT * FROM inventory WHERE product_id = ?')
      .all(product_id) as InventoryItem[];

    if (!product) {
      return { error: 'Product not found' };
    }

    const totalStock = inventory.reduce((sum, i) => sum + i.quantity, 0);

    return {
      product_name: product.name_zh,
      product_name_en: product.name_en,
      total_stock: totalStock,
      in_stock: totalStock > 0,
      warehouses: inventory.map((i) => ({
        location: i.warehouse_location,
        quantity: i.quantity,
        last_updated: i.last_updated,
      })),
    };
  },
});

export const lookupOrder = tool({
  description:
    'Look up order details by order ID. Use this when a customer wants to check order status, tracking info, or order contents.',
  inputSchema: z.object({
    order_id: z.number().describe('The order ID to look up'),
  }),
  execute: async ({ order_id }) => {
    const db = getDb();
    const order = db.prepare('SELECT * FROM orders WHERE id = ?').get(order_id) as
      | Order
      | undefined;

    if (!order) {
      return { error: 'Order not found' };
    }

    const items = db
      .prepare(
        `SELECT oi.*, p.name_zh, p.name_en
         FROM order_items oi
         JOIN products p ON oi.product_id = p.id
         WHERE oi.order_id = ?`
      )
      .all(order_id) as (OrderItem & { name_zh: string; name_en: string })[];

    const customer = db
      .prepare('SELECT name, email FROM customers WHERE id = ?')
      .get(order.customer_id) as { name: string; email: string } | undefined;

    return {
      order_id: order.id,
      customer_name: customer?.name,
      order_date: order.order_date,
      status: order.status,
      fulfillment_mode: order.fulfillment_mode,
      shipping_address: order.shipping_address,
      total_amount: order.total_amount,
      tracking_number: order.tracking_number,
      estimated_delivery: order.estimated_delivery,
      notes: order.notes,
      items: items.map((item) => ({
        product_name: item.name_zh,
        product_name_en: item.name_en,
        quantity: item.quantity,
        unit_price: item.unit_price,
        subtotal: item.quantity * item.unit_price,
      })),
    };
  },
});

export const lookupCustomer = tool({
  description:
    'Look up a customer by email or name. Use this when needing to identify a customer or check their profile.',
  inputSchema: z.object({
    email: z.string().optional().describe('Customer email address'),
    name: z.string().optional().describe('Customer name (partial match)'),
  }),
  execute: async ({ email, name }) => {
    const db = getDb();
    let customer: Customer | undefined;

    if (email) {
      customer = db
        .prepare('SELECT * FROM customers WHERE email = ?')
        .get(email) as Customer | undefined;
    } else if (name) {
      customer = db
        .prepare('SELECT * FROM customers WHERE name LIKE ?')
        .get(`%${name}%`) as Customer | undefined;
    }

    if (!customer) {
      return { error: 'Customer not found' };
    }

    const recentOrders = db
      .prepare(
        'SELECT id, order_date, status, total_amount FROM orders WHERE customer_id = ? ORDER BY order_date DESC LIMIT 5'
      )
      .all(customer.id) as Pick<Order, 'id' | 'order_date' | 'status' | 'total_amount'>[];

    return {
      id: customer.id,
      name: customer.name,
      email: customer.email,
      phone: customer.phone,
      city: customer.city,
      district: customer.district,
      customer_type: customer.customer_type,
      recent_orders: recentOrders,
    };
  },
});

export const highlightProduct = tool({
  description:
    'Highlight a specific product on the main display panel for the customer. Use this when recommending a product or when the customer shows interest in something — it will showcase the product prominently on the left side of the screen.',
  inputSchema: z.object({
    product_id: z.number().describe('The product ID to highlight'),
    reason: z.string().describe('Brief reason for the recommendation'),
  }),
  execute: async ({ product_id, reason }) => {
    const db = getDb();
    const product = db.prepare('SELECT * FROM products WHERE id = ?').get(product_id) as
      | Product
      | undefined;

    if (!product) {
      return { error: 'Product not found' };
    }

    return {
      action: 'highlight_product',
      product: {
        id: product.id,
        name_zh: product.name_zh,
        name_en: product.name_en,
        brand: product.brand,
        category: product.category,
        description_zh: product.description_zh,
        description_en: product.description_en,
        price: product.price,
        unit: product.unit,
        image_url: product.image_url,
        features: parseFeatures(product.features),
      },
      reason,
    };
  },
});

export const getRecommendations = tool({
  description:
    'Get product recommendations based on a preference or occasion. Use this when customers describe what they need (e.g., "family dinner", "restaurant bulk order", "gift for someone").',
  inputSchema: z.object({
    preference: z
      .string()
      .describe(
        'The preference or occasion (e.g., "family dinner", "restaurant bulk", "gift", "healthy", "premium")'
      ),
  }),
  execute: async ({ preference }) => {
    const db = getDb();
    const pref = preference.toLowerCase();

    let products: Product[];

    if (pref.includes('gift') || pref.includes('送禮') || pref.includes('禮')) {
      products = db
        .prepare("SELECT * FROM products WHERE price >= 799 OR features LIKE '%送禮%' OR features LIKE '%Gifting%' LIMIT 5")
        .all() as Product[];
    } else if (
      pref.includes('family') ||
      pref.includes('家') ||
      pref.includes('dinner') ||
      pref.includes('晚餐')
    ) {
      products = db
        .prepare("SELECT * FROM products WHERE price <= 699 AND category != 'prepared' LIMIT 5")
        .all() as Product[];
    } else if (
      pref.includes('bulk') ||
      pref.includes('restaurant') ||
      pref.includes('餐廳') ||
      pref.includes('批發')
    ) {
      products = db
        .prepare(
          "SELECT * FROM products WHERE category IN ('shrimp', 'fish', 'shellfish') ORDER BY price ASC LIMIT 6"
        )
        .all() as Product[];
    } else if (
      pref.includes('healthy') ||
      pref.includes('健康') ||
      pref.includes('低脂')
    ) {
      products = db
        .prepare(
          "SELECT * FROM products WHERE features LIKE '%Omega%' OR features LIKE '%低脂%' OR features LIKE '%健康%' OR features LIKE '%Low Fat%' LIMIT 5"
        )
        .all() as Product[];
    } else if (
      pref.includes('premium') ||
      pref.includes('高級') ||
      pref.includes('頂級')
    ) {
      products = db
        .prepare('SELECT * FROM products WHERE is_featured = 1 ORDER BY price DESC LIMIT 5')
        .all() as Product[];
    } else {
      // Default: return featured products
      products = db
        .prepare('SELECT * FROM products WHERE is_featured = 1 LIMIT 5')
        .all() as Product[];
    }

    return {
      preference,
      recommendations: products.map((p) => ({
        id: p.id,
        name_zh: p.name_zh,
        name_en: p.name_en,
        brand: p.brand,
        price: p.price,
        unit: p.unit,
        description_zh: p.description_zh,
        image_url: p.image_url,
      })),
    };
  },
});

export const allTools = {
  search_products: searchProducts,
  check_inventory: checkInventory,
  lookup_order: lookupOrder,
  lookup_customer: lookupCustomer,
  highlight_product: highlightProduct,
  get_recommendations: getRecommendations,
};
