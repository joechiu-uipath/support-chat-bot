import 'dotenv/config';
import { streamText, stepCountIs } from 'ai';
import type { ModelMessage } from 'ai';
import { getModel } from './models.js';
import { allTools } from './tools.js';
import { getDb } from '../db/connection.js';
import type { Order, OrderItem } from '../types.js';

const LANGUAGE_NAMES: Record<string, string> = {
  'zh-TW': 'Traditional Chinese (繁體中文)',
  en: 'English',
  ja: 'Japanese (日本語)',
  ko: 'Korean (한국어)',
  fr: 'French (Français)',
  de: 'German (Deutsch)',
  nl: 'Dutch (Nederlands)',
};

const SYSTEM_PROMPT = `You are the Yens (元家企業) customer support assistant for a premium frozen seafood company based in Taiwan.

## Your Role
- Help customers with product information, recommendations, and support
- Be warm, knowledgeable about seafood, and proactively suggest products
- When a customer shows interest in a product, use the highlight_product tool to showcase it on the main display

## What You Can Do
- **Product Search**: Search our catalog of premium frozen seafood products
- **Inventory Check**: Check if products are in stock across our warehouses
- **Order Lookup**: Check order status, tracking info, and delivery estimates
- **Customer Lookup**: Find customer profiles by email or name
- **Product Recommendations**: Suggest products based on occasion, preference, or dietary needs
- **Product Highlighting**: Showcase products on the main display when recommending them

## Our Brands
- **元家 (Yens)**: Our flagship brand — premium imported seafood (shrimp, fish, shellfish)
- **顏師傅 (Chef Yen)**: Ready-to-serve soup products
- **品元堂 (Pin Yuan Tang)**: Traditional Chinese luxury food items

## Key Products to Highlight
- 藍鑽蝦 (Blue Diamond Shrimp) — Our signature product, from Saudi Arabia royal farms
- 寶寶雪鰈菲力 (Baby Halibut Fillet) — Boneless, perfect for families
- 北海道生食級干貝 (Hokkaido Sashimi-Grade Scallops) — Premium Japanese import
- 帝王蟹腳 (King Crab Legs) — Luxury item, great for gifting
- 品元堂佛跳牆 (Buddha Jumps Over the Wall) — Traditional festive dish

## Product Links
When mentioning or recommending a product, include a clickable link using the format: [Product Name](/product/{id})
For example: [藍鑽蝦 Blue Diamond Shrimp](/product/1)
These links let customers navigate directly to the product in the catalog. Always include the link when you know the product ID.

## Guidelines
- Always be helpful and conversational
- When recommending products, briefly explain why they're a good fit and include a product link
- For order issues, be empathetic and provide clear status updates
- Proactively use the highlight_product tool when discussing specific products
- If you don't know something, say so honestly
- Keep responses concise but informative`;

interface UserContext {
  id: number;
  name: string;
  email?: string;
  phone?: string;
  city?: string;
  customerType?: string;
  persona?: string;
}

const PERSONA_PROFILES: Record<string, string> = {
  'premium-gourmet': `**Premium Home Gourmet** — This customer values quality above all else. They buy high-end items like king crab, sashimi-grade scallops, and premium imported seafood for home entertaining and special occasions.
- Communication style: Sophisticated, knowledgeable. Use refined language and food terminology.
- Focus on: Origin stories, tasting notes, pairing suggestions, exclusivity, seasonal specialties.
- Upsell: Premium and featured products, luxury gift sets, new arrivals.
- Avoid: Emphasizing value/savings. Instead emphasize quality, rarity, and culinary experience.`,

  'family-shopper': `**Everyday Family Shopper** — This customer buys regularly for family meals. They care about practicality, nutrition, and value for money.
- Communication style: Warm, practical, approachable. Like a helpful neighbor.
- Focus on: Cooking tips, serving sizes, ease of preparation, kid-friendliness, nutritional value.
- Suggest: Family-sized portions, versatile products (shrimp, fish fillets), easy-cook items.
- Proactively mention: Storage tips, simple recipes, bundle value.`,

  'restaurant-operator': `**Restaurant Operator** — This is a B2B customer running a restaurant. They need reliable bulk supply with consistent quality for their menu.
- Communication style: Professional, efficient, numbers-focused. Respect their time.
- Focus on: Volume availability, delivery schedules, product specs (yield, pack size), quality consistency.
- Be prepared to: Check inventory across warehouses, discuss bulk pricing, provide reorder info.
- Proactively mention: Stock levels, estimated delivery, new products suitable for commercial menus.`,

  'wholesale-distributor': `**Wholesale Distributor** — This is a high-volume B2B buyer who resells to other businesses. Highest spend tier.
- Communication style: Direct, business-oriented, data-driven. No fluff.
- Focus on: Pricing tiers, supply capacity, minimum order quantities, logistics, lead times.
- Be prepared to: Provide detailed inventory across all warehouses, discuss supply chain, volume commitments.
- Key concern: Reliable supply at competitive pricing. Respond with specifics and numbers.`,

  'gift-festival': `**Gift & Festival Buyer** — This customer buys premium items during holidays and special occasions for gifting. They care about presentation and impressiveness.
- Communication style: Enthusiastic, helpful with gift advice. Like a personal shopper.
- Focus on: Gift packaging, occasion suitability, recipient matching, festive traditions.
- Suggest: 佛跳牆 (Buddha Jumps Over the Wall) for Lunar New Year, king crab for celebrations, premium gift sets.
- Proactively mention: Gift wrapping options, seasonal specials, popular gift combinations.`,
};

/**
 * Fetch recent orders for a customer and format as a compact summary for the system prompt.
 * Includes order status, items, tracking, and delivery info.
 */
function getRecentOrdersSummary(customerId: number): string {
  const db = getDb();

  const orders = db.prepare(`
    SELECT id, order_date, status, fulfillment_mode, total_amount,
           tracking_number, estimated_delivery, notes
    FROM orders
    WHERE customer_id = ?
    ORDER BY order_date DESC
    LIMIT 5
  `).all(customerId) as Order[];

  if (orders.length === 0) {
    return 'This customer has no order history yet.';
  }

  const lines: string[] = [];

  for (const order of orders) {
    // Fetch items for this order
    const items = db.prepare(`
      SELECT oi.quantity, oi.unit_price, p.name_zh, p.name_en
      FROM order_items oi
      JOIN products p ON oi.product_id = p.id
      WHERE oi.order_id = ?
    `).all(order.id) as (Pick<OrderItem, 'quantity' | 'unit_price'> & { name_zh: string; name_en: string })[];

    const itemList = items
      .map(i => `${i.name_zh}(${i.name_en}) x${i.quantity} @NT$${i.unit_price}`)
      .join(', ');

    let line = `- **Order #${order.id}** [${order.order_date}] — Status: ${order.status} | NT$${order.total_amount.toLocaleString()}`;
    if (order.tracking_number) line += ` | Tracking: ${order.tracking_number}`;
    if (order.estimated_delivery) line += ` | ETA: ${order.estimated_delivery}`;
    if (order.fulfillment_mode) line += ` | ${order.fulfillment_mode}`;
    line += `\n  Items: ${itemList}`;
    if (order.notes) line += `\n  Notes: ${order.notes}`;

    lines.push(line);
  }

  return lines.join('\n');
}

export async function chat(messages: ModelMessage[], language?: string, user?: UserContext) {
  const provider = process.env.AI_PROVIDER || 'openai';
  const modelId = process.env.AI_MODEL || 'gpt-4o';
  console.log(`[agent] provider=${provider} model=${modelId} language=${language || 'zh-TW'} user=${user?.name || 'anonymous'}`);

  const model = getModel();

  // Build language instruction
  let systemPrompt = SYSTEM_PROMPT;
  const langName = LANGUAGE_NAMES[language || 'zh-TW'] || LANGUAGE_NAMES['zh-TW'];
  systemPrompt += `\n\n## Language
You MUST respond in ${langName}. This is the user's selected interface language. Always use this language for all responses, regardless of what language the user writes in. Translate product names and descriptions naturally when responding.`;

  if (user) {
    systemPrompt += `\n\n## Current Customer
The customer you are speaking with is already identified. Here is their profile:
- **Name**: ${user.name}
- **Customer ID**: ${user.id}
- **Email**: ${user.email || 'N/A'}
- **Phone**: ${user.phone || 'N/A'}
- **City**: ${user.city || 'N/A'}
- **Account Type**: ${user.customerType || 'N/A'}

You already know who they are — do NOT ask them for their email, name, or ID. Be proactive and personalized.`;

    // Inject recent order history
    const orderSummary = getRecentOrdersSummary(user.id);
    systemPrompt += `\n\n## Recent Order History
You already have access to this customer's recent orders. When they ask about orders, refer to this data directly — no need to call lookup_customer or lookup_order unless they ask about an order not listed here or need more details.

${orderSummary}

Use this order history to:
- Proactively reference their recent purchases when relevant (e.g., "I see you recently ordered 藍鑽蝦...")
- Provide immediate answers about order status, tracking, and delivery without tool calls
- Suggest reorders or complementary products based on their purchase patterns
- For restaurant/wholesale customers, note ordering frequency and typical order size`;

    if (user.persona && PERSONA_PROFILES[user.persona]) {
      systemPrompt += `\n\n## Customer Persona
${PERSONA_PROFILES[user.persona]}

**IMPORTANT**: You MUST tailor your tone, recommendations, and level of detail to match this persona. This is critical for the customer experience. Every response should feel specifically crafted for this type of customer.`;
    }
  }

  const result = streamText({
    model,
    system: systemPrompt,
    messages,
    tools: allTools,
    stopWhen: stepCountIs(5),
    onError: ({ error }) => {
      console.error('[agent] AI stream error:', error instanceof Error ? error.message : String(error));
      if (error instanceof Error && error.cause) {
        console.error('[agent] Cause:', error.cause);
      }
    },
  });

  return result;
}
