import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getDb } from './connection.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SEED_FILES = [
  '01-products.sql',
  'products-batch-a.sql',
  'products-batch-b.sql',
  'products-batch-c.sql',
  'products-batch-d.sql',
  '02-inventory.sql',
  '03-customers.sql',
  '04-orders.sql',
  '05-order-items.sql',
  '06-product-translations.sql',
  '07-product-images.sql',
  '08-curate-featured.sql',
];

/**
 * Drop all tables and re-create the database from scratch.
 * Intended to run as a build step (`pnpm db:seed`), not at server start.
 */
export function seedDatabase() {
  const db = getDb();

  console.log('Dropping existing tables...');
  // Drop in reverse dependency order
  const tables = db
    .prepare("SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'")
    .all() as { name: string }[];
  db.pragma('foreign_keys = OFF');
  for (const { name } of tables) {
    db.exec(`DROP TABLE IF EXISTS "${name}"`);
  }
  db.pragma('foreign_keys = ON');

  console.log('Creating schema...');
  const schema = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf-8');
  db.exec(schema);

  // Create extra tables that aren't in the base schema
  db.exec(`
    CREATE TABLE IF NOT EXISTS product_translations (
      product_id INTEGER NOT NULL REFERENCES products(id),
      locale TEXT NOT NULL,
      name TEXT NOT NULL,
      description TEXT NOT NULL,
      PRIMARY KEY (product_id, locale)
    );
    CREATE TABLE IF NOT EXISTS product_images (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      product_id INTEGER NOT NULL REFERENCES products(id),
      image_url TEXT NOT NULL,
      sort_order INTEGER NOT NULL DEFAULT 0
    );
    CREATE TABLE IF NOT EXISTS product_chunks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      product_id INTEGER NOT NULL REFERENCES products(id),
      chunk_type TEXT NOT NULL,
      chunk_text TEXT NOT NULL,
      embedding TEXT,
      embedding_model TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
    CREATE TABLE IF NOT EXISTS embedding_metadata (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      key TEXT NOT NULL UNIQUE,
      value TEXT NOT NULL
    );
  `);

  console.log('Seeding data...');
  db.pragma('foreign_keys = OFF');
  const seedAll = db.transaction(() => {
    for (const file of SEED_FILES) {
      console.log(`  Loading ${file}...`);
      const sql = fs.readFileSync(path.join(__dirname, 'seeds', file), 'utf-8');
      db.exec(sql);
    }
  });
  seedAll();
  db.pragma('foreign_keys = ON');

  const count = db.prepare('SELECT COUNT(*) as c FROM products').get() as { c: number };
  const featured = db.prepare('SELECT COUNT(*) as c FROM products WHERE is_featured = 1').get() as { c: number };
  console.log(`Database seeded: ${count.c} products (${featured.c} featured).`);
}

// Run directly via `tsx src/db/init.ts` or `pnpm db:seed`
seedDatabase();
