import { Hono } from 'hono';
import { getDb } from '../db/connection.js';
import type { Product, InventoryItem } from '../types.js';
import { resolveProduct, loadTranslations, loadProductImages } from '../db/locale-resolver.js';

const productsRouter = new Hono();

productsRouter.get('/', (c) => {
  const db = getDb();
  const { category, featured, search } = c.req.query();
  const locale = c.req.query('locale') || 'zh-TW';

  let sql = 'SELECT * FROM products WHERE 1=1';
  const params: unknown[] = [];

  if (category) {
    sql += ' AND category = ?';
    params.push(category);
  }

  if (featured === 'true') {
    sql += ' AND is_featured = 1';
  }

  if (search) {
    sql += ' AND (name_zh LIKE ? OR name_en LIKE ? OR description_en LIKE ?)';
    params.push(`%${search}%`, `%${search}%`, `%${search}%`);
  }

  sql += ' ORDER BY is_featured DESC, id ASC';

  const products = db.prepare(sql).all(...params) as Product[];

  const productIds = products.map((p) => p.id);

  const translations =
    locale !== 'zh-TW' && locale !== 'en'
      ? loadTranslations(locale, productIds)
      : new Map();

  const imagesMap = loadProductImages(productIds);

  return c.json(
    products.map((p) => resolveProduct(p, locale, translations.get(p.id), imagesMap.get(p.id))),
  );
});

productsRouter.get('/:id', (c) => {
  const db = getDb();
  const id = parseInt(c.req.param('id'));
  const locale = c.req.query('locale') || 'zh-TW';
  const product = db.prepare('SELECT * FROM products WHERE id = ?').get(id) as Product | undefined;

  if (!product) {
    return c.json({ error: 'Product not found' }, 404);
  }

  const translations =
    locale !== 'zh-TW' && locale !== 'en'
      ? loadTranslations(locale, [id])
      : new Map();

  const imagesMap = loadProductImages([id]);

  return c.json(resolveProduct(product, locale, translations.get(id), imagesMap.get(id)));
});

productsRouter.get('/:id/inventory', (c) => {
  const db = getDb();
  const id = parseInt(c.req.param('id'));
  const inventory = db
    .prepare('SELECT * FROM inventory WHERE product_id = ?')
    .all(id) as InventoryItem[];

  return c.json({
    product_id: id,
    total_stock: inventory.reduce((sum, i) => sum + i.quantity, 0),
    warehouses: inventory,
  });
});

export { productsRouter };
