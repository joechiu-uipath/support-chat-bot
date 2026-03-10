import { getDb } from './connection.js';
import type { Product } from '../types.js';

export interface LocalizedProduct {
  id: number;
  name: string;
  name_secondary: string;
  brand: string;
  category: string;
  description: string;
  price: number;
  unit: string;
  image_url: string | null;
  images: string[];
  features: string[];
  is_featured: boolean;
}

interface Translation {
  name: string;
  description: string;
}

const CJK_LOCALES = new Set(['ja', 'ko']);
const WESTERN_LOCALES = new Set(['fr', 'de', 'nl']);

export function loadProductImages(
  productIds: number[],
): Map<number, string[]> {
  if (productIds.length === 0) return new Map();

  const db = getDb();
  const placeholders = productIds.map(() => '?').join(',');
  const rows = db
    .prepare(
      `SELECT product_id, image_url FROM product_images WHERE product_id IN (${placeholders}) ORDER BY product_id, sort_order`,
    )
    .all(...productIds) as Array<{ product_id: number; image_url: string }>;

  const map = new Map<number, string[]>();
  for (const row of rows) {
    const list = map.get(row.product_id) || [];
    list.push(row.image_url);
    map.set(row.product_id, list);
  }
  return map;
}

export function resolveProduct(
  product: Product,
  locale: string,
  translation?: Translation,
  images?: string[],
): LocalizedProduct {
  let name: string;
  let name_secondary: string;
  let description: string;

  if (locale === 'zh-TW') {
    name = product.name_zh;
    name_secondary = product.name_en;
    description = product.description_zh;
  } else if (locale === 'en') {
    name = product.name_en;
    name_secondary = product.name_zh;
    description = product.description_en || product.description_zh;
  } else if (CJK_LOCALES.has(locale)) {
    name = translation?.name ?? product.name_zh;
    name_secondary = product.name_en;
    description = translation?.description ?? product.description_zh;
  } else {
    // fr, de, nl and any other locale
    name = translation?.name ?? product.name_en;
    name_secondary = product.name_zh;
    description = translation?.description ?? product.description_en;
  }

  const resolvedImages = images && images.length > 0 ? images : (product.image_url ? [product.image_url] : []);

  return {
    id: product.id,
    name,
    name_secondary,
    brand: product.brand,
    category: product.category,
    description,
    price: product.price,
    unit: product.unit,
    image_url: resolvedImages[0] || null,
    images: resolvedImages,
    features: product.features ? JSON.parse(product.features) : [],
    is_featured: !!product.is_featured,
  };
}

export function loadTranslations(
  locale: string,
  productIds: number[],
): Map<number, Translation> {
  if (productIds.length === 0) return new Map();

  const db = getDb();
  const placeholders = productIds.map(() => '?').join(',');
  const rows = db
    .prepare(
      `SELECT product_id, name, description FROM product_translations WHERE locale = ? AND product_id IN (${placeholders})`,
    )
    .all(locale, ...productIds) as Array<{
    product_id: number;
    name: string;
    description: string;
  }>;

  const map = new Map<number, Translation>();
  for (const row of rows) {
    map.set(row.product_id, { name: row.name, description: row.description });
  }
  return map;
}
