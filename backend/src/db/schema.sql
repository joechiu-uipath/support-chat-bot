-- Products table
CREATE TABLE IF NOT EXISTS products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name_zh TEXT NOT NULL,
  name_en TEXT NOT NULL,
  brand TEXT NOT NULL,
  category TEXT NOT NULL,
  description_zh TEXT NOT NULL,
  description_en TEXT NOT NULL,
  price REAL NOT NULL,
  unit TEXT NOT NULL,
  image_url TEXT,
  features TEXT,
  is_featured INTEGER DEFAULT 0,
  additional_info TEXT
);

-- Full-text search on products
CREATE VIRTUAL TABLE IF NOT EXISTS products_fts USING fts5(
  name_zh, name_en, description_zh, description_en, brand, category, additional_info,
  content='products', content_rowid='id'
);

-- FTS sync triggers
CREATE TRIGGER IF NOT EXISTS products_ai AFTER INSERT ON products BEGIN
  INSERT INTO products_fts(rowid, name_zh, name_en, description_zh, description_en, brand, category, additional_info)
  VALUES (new.id, new.name_zh, new.name_en, new.description_zh, new.description_en, new.brand, new.category, new.additional_info);
END;

CREATE TRIGGER IF NOT EXISTS products_au AFTER UPDATE ON products BEGIN
  INSERT INTO products_fts(products_fts, rowid, name_zh, name_en, description_zh, description_en, brand, category, additional_info)
  VALUES ('delete', old.id, old.name_zh, old.name_en, old.description_zh, old.description_en, old.brand, old.category, old.additional_info);
  INSERT INTO products_fts(rowid, name_zh, name_en, description_zh, description_en, brand, category, additional_info)
  VALUES (new.id, new.name_zh, new.name_en, new.description_zh, new.description_en, new.brand, new.category, new.additional_info);
END;

CREATE TRIGGER IF NOT EXISTS products_ad AFTER DELETE ON products BEGIN
  INSERT INTO products_fts(products_fts, rowid, name_zh, name_en, description_zh, description_en, brand, category, additional_info)
  VALUES ('delete', old.id, old.name_zh, old.name_en, old.description_zh, old.description_en, old.brand, old.category, old.additional_info);
END;

-- RAG: product chunks with embeddings
CREATE TABLE IF NOT EXISTS product_chunks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  product_id INTEGER NOT NULL REFERENCES products(id),
  chunk_type TEXT NOT NULL,
  chunk_text TEXT NOT NULL,
  embedding TEXT,
  embedding_model TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- RAG: embedding metadata (staleness tracking)
CREATE TABLE IF NOT EXISTS embedding_metadata (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  key TEXT NOT NULL UNIQUE,
  value TEXT NOT NULL
);

-- Product images (multiple images per product for cross-fade)
CREATE TABLE IF NOT EXISTS product_images (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  product_id INTEGER NOT NULL REFERENCES products(id),
  image_url TEXT NOT NULL,
  sort_order INTEGER NOT NULL DEFAULT 0
);

-- Product translations for additional locales (ja, ko, fr, de, nl)
CREATE TABLE IF NOT EXISTS product_translations (
  product_id INTEGER NOT NULL REFERENCES products(id),
  locale TEXT NOT NULL,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  PRIMARY KEY (product_id, locale)
);

-- Inventory table
CREATE TABLE IF NOT EXISTS inventory (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  product_id INTEGER NOT NULL REFERENCES products(id),
  warehouse_location TEXT NOT NULL,
  quantity INTEGER NOT NULL,
  last_updated TEXT NOT NULL
);

-- Customers table
CREATE TABLE IF NOT EXISTS customers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT,
  city TEXT NOT NULL,
  district TEXT,
  address TEXT,
  customer_type TEXT NOT NULL,
  persona TEXT NOT NULL DEFAULT '',
  registration_date TEXT NOT NULL,
  preferred_language TEXT DEFAULT 'zh-TW'
);

-- Orders table
CREATE TABLE IF NOT EXISTS orders (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  customer_id INTEGER NOT NULL REFERENCES customers(id),
  order_date TEXT NOT NULL,
  status TEXT NOT NULL,
  fulfillment_mode TEXT NOT NULL,
  shipping_address TEXT,
  total_amount REAL NOT NULL,
  tracking_number TEXT,
  estimated_delivery TEXT,
  notes TEXT
);

-- Order items
CREATE TABLE IF NOT EXISTS order_items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  order_id INTEGER NOT NULL REFERENCES orders(id),
  product_id INTEGER NOT NULL REFERENCES products(id),
  quantity INTEGER NOT NULL,
  unit_price REAL NOT NULL
);
