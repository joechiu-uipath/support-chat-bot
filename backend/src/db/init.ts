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
];

function runMigrations() {
  const db = getDb();

  // Migration: add additional_info column if missing
  const cols = db.prepare("PRAGMA table_info('products')").all() as { name: string }[];
  const hasAdditionalInfo = cols.some((c) => c.name === 'additional_info');
  if (!hasAdditionalInfo) {
    console.log('Migration: adding additional_info column to products...');
    db.exec('ALTER TABLE products ADD COLUMN additional_info TEXT');

    // Rebuild FTS and triggers to include additional_info
    db.exec('DROP TRIGGER IF EXISTS products_ai');
    db.exec('DROP TRIGGER IF EXISTS products_au');
    db.exec('DROP TRIGGER IF EXISTS products_ad');
    db.exec('DROP TABLE IF EXISTS products_fts');

    const schema = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf-8');
    // Extract and run only the FTS table + trigger statements
    const ftsMatch = schema.match(
      /-- Full-text search on products[\s\S]*?END;[\s\S]*?END;[\s\S]*?END;/
    );
    if (ftsMatch) {
      db.exec(ftsMatch[0]);
    }

    // Re-populate FTS index from existing data
    db.exec(`
      INSERT INTO products_fts(rowid, name_zh, name_en, description_zh, description_en, brand, category, additional_info)
      SELECT id, name_zh, name_en, description_zh, description_en, brand, category, additional_info FROM products
    `);
    console.log('Migration: FTS index rebuilt with additional_info.');
  }

  // Ensure product_translations table exists
  const translationsExists = db
    .prepare("SELECT name FROM sqlite_master WHERE type='table' AND name='product_translations'")
    .get();
  if (!translationsExists) {
    console.log('Migration: creating product_translations table...');
    db.exec(`
      CREATE TABLE IF NOT EXISTS product_translations (
        product_id INTEGER NOT NULL REFERENCES products(id),
        locale TEXT NOT NULL,
        name TEXT NOT NULL,
        description TEXT NOT NULL,
        PRIMARY KEY (product_id, locale)
      );
    `);
    // Seed translations if the file exists
    const seedPath = path.join(__dirname, 'seeds', '06-product-translations.sql');
    if (fs.existsSync(seedPath)) {
      console.log('  Loading 06-product-translations.sql...');
      const sql = fs.readFileSync(seedPath, 'utf-8');
      db.exec(sql);
    }
  }

  // Ensure product_images table exists
  const imagesExists = db
    .prepare("SELECT name FROM sqlite_master WHERE type='table' AND name='product_images'")
    .get();
  if (!imagesExists) {
    console.log('Migration: creating product_images table...');
    db.exec(`
      CREATE TABLE IF NOT EXISTS product_images (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        product_id INTEGER NOT NULL REFERENCES products(id),
        image_url TEXT NOT NULL,
        sort_order INTEGER NOT NULL DEFAULT 0
      );
    `);
    const seedPath = path.join(__dirname, 'seeds', '07-product-images.sql');
    if (fs.existsSync(seedPath)) {
      console.log('  Loading 07-product-images.sql...');
      const sql = fs.readFileSync(seedPath, 'utf-8');
      db.exec(sql);
    }
  }

  // Ensure RAG tables exist
  const chunksExists = db
    .prepare("SELECT name FROM sqlite_master WHERE type='table' AND name='product_chunks'")
    .get();
  if (!chunksExists) {
    console.log('Migration: creating product_chunks and embedding_metadata tables...');
    db.exec(`
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
  }
}

export function initDatabase() {
  const db = getDb();

  // Check if already seeded
  const tableExists = db
    .prepare("SELECT name FROM sqlite_master WHERE type='table' AND name='products'")
    .get();

  if (tableExists) {
    const count = db.prepare('SELECT COUNT(*) as c FROM products').get() as { c: number };
    if (count.c > 0) {
      console.log('Database already initialized with data.');
      runMigrations();
      return;
    }
  }

  console.log('Initializing database schema...');
  const schema = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf-8');
  db.exec(schema);

  console.log('Seeding mock data...');
  // Disable FK checks during seeding to allow inserting in any order
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

  console.log('Database initialized successfully.');
}

// Run directly
if (process.argv[1] && process.argv[1].includes('init')) {
  initDatabase();
}
