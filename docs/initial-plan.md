# Yens Next-Gen Support Portal - Implementation Plan

## Context

Yens (元家企業 - YEN & BROTHERS ENTERPRISE CO., LTD.) is a premium frozen seafood company in Taiwan. They need a prototype customer support portal featuring an LLM-powered chatbot that can inform, upsell, and support customers. The site uses a novel two-pane layout where the chat bot can dynamically influence the product content displayed on the left pane based on conversation context.

This is a greenfield project — only the requirements doc (`Agents.md`) exists today.

---

## 1. Project Structure (pnpm Monorepo)

```
support-chat-bot/
├── pnpm-workspace.yaml
├── package.json                  # Root: scripts for dev/build
├── .gitignore
├── .env.example
├── .env                          # LLM keys (gitignored)
├── docs/
│   └── initial-plan.md
├── Agents.md
├── packages/
│   ├── backend/
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   ├── src/
│   │   │   ├── index.ts          # Hono server entry point
│   │   │   ├── routes/
│   │   │   │   ├── chat.ts       # POST /api/chat - AI streaming endpoint
│   │   │   │   ├── products.ts   # GET /api/products, /api/products/:id
│   │   │   │   ├── orders.ts     # GET /api/orders/:id
│   │   │   │   └── customers.ts  # GET /api/customers/:id
│   │   │   ├── ai/
│   │   │   │   ├── agent.ts      # AI agent config, system prompt, streamText
│   │   │   │   └── tools.ts      # Tool definitions (inventory, orders, etc.)
│   │   │   ├── db/
│   │   │   │   ├── connection.ts  # SQLite connection singleton
│   │   │   │   ├── schema.sql     # Table definitions + FTS setup
│   │   │   │   ├── seed.sql       # Mock data inserts
│   │   │   │   └── init.ts        # Run schema + seed on startup
│   │   │   └── types.ts           # Shared TypeScript types
│   │   └── data/
│   │       └── yens.db            # SQLite database file (gitignored)
│   └── frontend/
│       ├── package.json
│       ├── tsconfig.json
│       ├── vite.config.ts
│       ├── index.html
│       ├── public/
│       │   └── logo.svg           # Yens logo
│       └── src/
│           ├── main.tsx           # React entry
│           ├── App.tsx            # Two-pane layout shell
│           ├── index.css          # Global styles + CSS variables
│           ├── components/
│           │   ├── ContentPane.tsx     # Left 70% - product gallery/info
│           │   ├── ChatPane.tsx        # Right 30% - chat interface
│           │   ├── ChatMessage.tsx     # Individual chat message bubble
│           │   ├── ProductGallery.tsx  # Product grid/carousel
│           │   ├── ProductCard.tsx     # Single product card
│           │   ├── ProductDetail.tsx   # Expanded product view
│           │   ├── OrderStatus.tsx     # Order status display component
│           │   └── Header.tsx          # Site header with logo
│           ├── hooks/
│           │   └── useContentSync.ts   # Syncs chat context → left pane
│           └── lib/
│               └── api.ts             # API client helpers
```

---

## 2. Database Schema Design

### Tables

```sql
-- Products table
CREATE TABLE products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name_zh TEXT NOT NULL,           -- Chinese product name
  name_en TEXT NOT NULL,           -- English product name
  brand TEXT NOT NULL,             -- 元家 / 顏師傅 / 品元堂
  category TEXT NOT NULL,          -- shrimp, fish, shellfish, meat, prepared
  description_zh TEXT NOT NULL,    -- Chinese description
  description_en TEXT NOT NULL,    -- English description
  price REAL NOT NULL,             -- TWD price
  unit TEXT NOT NULL,              -- e.g., "600g/pack", "1kg/pack"
  image_url TEXT,                  -- Product image URL
  features TEXT,                   -- JSON array of feature highlights
  is_featured INTEGER DEFAULT 0   -- Featured in gallery
);

-- Full-text search on products
CREATE VIRTUAL TABLE products_fts USING fts5(
  name_zh, name_en, description_zh, description_en, brand, category,
  content='products', content_rowid='id'
);

-- Inventory table
CREATE TABLE inventory (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  product_id INTEGER NOT NULL REFERENCES products(id),
  warehouse_location TEXT NOT NULL,  -- e.g., "Taipei Main", "Kaohsiung"
  quantity INTEGER NOT NULL,
  last_updated TEXT NOT NULL         -- ISO date
);

-- Customers table
CREATE TABLE customers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT,
  city TEXT NOT NULL,
  district TEXT,
  address TEXT,
  customer_type TEXT NOT NULL,       -- retail / wholesale / restaurant
  registration_date TEXT NOT NULL,
  preferred_language TEXT DEFAULT 'zh-TW'
);

-- Orders table
CREATE TABLE orders (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  customer_id INTEGER NOT NULL REFERENCES customers(id),
  order_date TEXT NOT NULL,
  status TEXT NOT NULL,              -- pending, processing, shipped, delivered, completed, cancelled
  fulfillment_mode TEXT NOT NULL,    -- delivery / pickup / frozen-logistics
  shipping_address TEXT,
  total_amount REAL NOT NULL,
  tracking_number TEXT,
  estimated_delivery TEXT,
  notes TEXT
);

-- Order items (junction table)
CREATE TABLE order_items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  order_id INTEGER NOT NULL REFERENCES orders(id),
  product_id INTEGER NOT NULL REFERENCES products(id),
  quantity INTEGER NOT NULL,
  unit_price REAL NOT NULL
);
```

### FTS Triggers (keep FTS in sync)
```sql
CREATE TRIGGER products_ai AFTER INSERT ON products BEGIN
  INSERT INTO products_fts(rowid, name_zh, name_en, description_zh, description_en, brand, category)
  VALUES (new.id, new.name_zh, new.name_en, new.description_zh, new.description_en, new.brand, new.category);
END;
-- (similar triggers for UPDATE and DELETE)
```

---

## 3. Mock Data Strategy

### Products (~15-20 items)
Based on real Yens products:
| Product | Brand | Category | Price (TWD) |
|---------|-------|----------|-------------|
| 藍鑽蝦 (Blue Diamond Shrimp, whole) | 元家 | shrimp | 399 |
| 藍鑽蝦仁 (Blue Diamond Shrimp, peeled) | 元家 | shrimp | 459 |
| 寶寶雪鰈菲力 (Baby Halibut Fillet) | 元家 | fish | 349 |
| 冰釣雪鰈 (Ice-caught Halibut Steak) | 元家 | fish | 529 |
| 北海道干貝 (Hokkaido Scallops) | 元家 | shellfish | 899 |
| 鮮凍蛤蜊 (Frozen Clams) | 元家 | shellfish | 199 |
| 帝王蟹腳 (King Crab Legs) | 元家 | shellfish | 1,299 |
| 顏師傅海鮮湯 (Seafood Soup) | 顏師傅 | prepared | 259 |
| 品元堂佛跳牆 (Buddha Jumps Over Wall) | 品元堂 | prepared | 799 |
| ... and more (~15-20 total) |

Use image URLs from yens.com.tw where possible, or placeholder images.

### Customers (50 records)
- Diverse cities across Taiwan (Taipei, Kaohsiung, Taichung, Tainan, Hsinchu, etc.)
- Mix of customer types: ~25 retail, ~15 restaurant, ~10 wholesale
- Varied registration dates (2022-2025)

### Orders (200 records)
- 150 completed (status: completed/delivered)
- 50 active (status: pending/processing/shipped)
- Each order has 1-5 order_items
- Fulfillment modes: delivery (60%), frozen-logistics (30%), pickup (10%)
- Date range: last 12 months

All mock data written as `seed.sql` with INSERT statements.

---

## 4. API Routes

### Chat Endpoint
```
POST /api/chat
Body: { messages: Message[] }
Response: Streaming text response (Vercel AI SDK format)
```

### Data Endpoints (for frontend gallery + chat tool results)
```
GET  /api/products              # List all products (supports ?category, ?featured, ?search)
GET  /api/products/:id          # Single product detail
GET  /api/products/:id/inventory  # Stock levels for a product
GET  /api/orders/:id            # Order details with items
GET  /api/customers/:id         # Customer profile
```

### Static Assets
- Frontend served via Vite dev server (dev) or Hono static middleware (prod)
- Backend proxied from frontend via Vite proxy config

---

## 5. AI Agent Design

### System Prompt
```
You are the Yens (元家企業) customer support assistant. You help customers with:
- Product information and recommendations for premium frozen seafood
- Checking product inventory/availability
- Looking up order status and details
- General support questions

You should be friendly, knowledgeable about seafood, and proactively suggest products.
Respond in the same language the customer uses (Traditional Chinese or English).
When a customer shows interest in a product, use the highlight_product tool to
showcase it on the main display.
```

### Tools

1. **search_products** - Search product catalog by keyword, category, or feature
   - Input: `{ query: string, category?: string }`
   - Queries `products_fts` table
   - Returns matching products with details

2. **check_inventory** - Check stock availability for a product
   - Input: `{ product_id: number }`
   - Queries `inventory` table
   - Returns stock levels by warehouse

3. **lookup_order** - Look up order status by order ID
   - Input: `{ order_id: number }`
   - Queries `orders` + `order_items` joined with `products`
   - Returns order details, items, status, tracking

4. **lookup_customer** - Look up customer by email or name
   - Input: `{ email?: string, name?: string }`
   - Queries `customers` table
   - Returns customer profile

5. **highlight_product** - Signal the frontend to highlight a specific product
   - Input: `{ product_id: number, reason: string }`
   - This is a UI-action tool: returns product data that the frontend renders as a special card
   - Triggers the left pane to scroll to / feature this product

6. **get_recommendations** - Get product recommendations based on preferences
   - Input: `{ preference: string }` (e.g., "family dinner", "restaurant bulk", "gift")
   - Returns curated product list based on preference matching

---

## 6. Dynamic Content Feature (Chat → Left Pane)

This is the novel feature: the chat bot influences what the left pane shows.

### Mechanism
1. The `useChat` hook on the frontend processes tool call results from the stream
2. When the AI calls `highlight_product` or `search_products`, the tool result includes product data
3. A shared React state/context (`useContentSync` hook) captures these tool results
4. The `ContentPane` component reacts to state changes:
   - **highlight_product** → Scrolls to and expands the product card, adds a "Recommended for you" badge
   - **search_products** → Filters the gallery to show matching products
   - **get_recommendations** → Reorders the gallery to prioritize recommended items
5. User can click products in the gallery, which sends a message to the chat: "Tell me more about [product]"

### State Flow
```
Chat AI Response (stream)
  → Tool call detected (onToolCall in useChat)
  → Extract product IDs / action type
  → Update ContentSync context state
  → ContentPane re-renders with new highlights/filters
```

---

## 7. Frontend Component Hierarchy

```
App.tsx
├── Header (logo, site name, customer greeting)
├── main (flex container)
│   ├── ContentPane (70%)
│   │   ├── ProductGallery
│   │   │   └── ProductCard[] (clickable → sends chat message)
│   │   └── ProductDetail (expanded view when selected)
│   └── ChatPane (30%)
│       ├── message list
│       │   └── ChatMessage[] (supports markdown, product cards inline)
│       ├── typing indicator
│       └── input form (text input + send button)
```

### Visual Design
- **Colors**: Gold (#f1d600) accent, dark navy/black (#1a1a2e) backgrounds, white text
- **Style**: Premium, modern, energetic — large product images, bold typography
- **Chat pane**: Dark background, light text, gold accent for bot messages
- **Gallery**: Grid of product cards with hover effects, high-quality images
- **Responsive**: Chat pane collapses to a floating button on mobile

---

## 8. Build & Dev Configuration

### Root `package.json`
```json
{
  "name": "yens-support-portal",
  "private": true,
  "scripts": {
    "dev": "pnpm --filter backend dev & pnpm --filter frontend dev",
    "build": "pnpm --filter backend build && pnpm --filter frontend build",
    "db:init": "pnpm --filter backend db:init"
  }
}
```

### `pnpm-workspace.yaml`
```yaml
packages:
  - 'packages/*'
```

### Backend Dev
- `tsx watch src/index.ts` for hot-reload development
- Listens on port 3001
- Initializes SQLite DB on first run

### Frontend Dev
- Vite dev server on port 5173
- Proxy `/api/*` to `http://localhost:3001`

### `.env.example`
```env
# LLM Provider (choose one)
AI_PROVIDER=openai          # openai | anthropic
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...

# Model configuration
AI_MODEL=gpt-4o             # or claude-sonnet-4-20250514

# Server
PORT=3001
```

---

## 9. Implementation Order

### Step 1: Project Scaffolding
- Create root `package.json`, `pnpm-workspace.yaml`, `.gitignore`, `.env.example`
- Create `packages/backend/` and `packages/frontend/` package.json + tsconfig
- Run `pnpm install`

### Step 2: Backend Foundation
- `src/index.ts` — Hono server with CORS, static files
- `src/db/connection.ts` — SQLite connection
- `src/db/schema.sql` — All table definitions + FTS
- `src/db/init.ts` — Schema initialization

### Step 3: Mock Data
- `src/db/seed.sql` — All INSERT statements for products, inventory, customers, orders, order_items
- Wire up init to run seed on empty DB

### Step 4: Data API Routes
- `src/routes/products.ts` — Product list/detail/search endpoints
- `src/routes/orders.ts` — Order lookup endpoint
- `src/routes/customers.ts` — Customer lookup endpoint
- Test endpoints with curl

### Step 5: AI Agent
- `src/ai/tools.ts` — Define all 6 tools with zod schemas
- `src/ai/agent.ts` — System prompt, model config, streamText setup
- `src/routes/chat.ts` — POST /api/chat streaming endpoint
- Test with curl / Postman

### Step 6: Frontend Shell
- Vite + React setup with `index.html`, `main.tsx`
- `App.tsx` — Two-pane layout
- `Header.tsx` — Logo and branding
- `index.css` — Design tokens, global styles (gold/dark theme)

### Step 7: Product Gallery
- `ProductGallery.tsx` — Fetch and display products grid
- `ProductCard.tsx` — Individual card with image, name, price
- `ProductDetail.tsx` — Expanded view
- `api.ts` — API client helpers

### Step 8: Chat Interface
- `ChatPane.tsx` — Chat container with useChat hook
- `ChatMessage.tsx` — Message rendering (markdown, tool results)
- Wire up streaming, show typing indicator

### Step 9: Dynamic Content Sync
- `useContentSync.ts` — Shared state between chat and content pane
- Handle `highlight_product` tool results → scroll/highlight in gallery
- Handle `search_products` results → filter gallery
- Click-to-chat on product cards

### Step 10: Polish
- Loading states, error handling
- Responsive layout adjustments
- Chat welcome message
- Product image fallbacks

---

## 10. Verification Plan

1. **`pnpm install`** from root — all deps install correctly
2. **`pnpm dev`** — both backend (3001) and frontend (5173) start
3. **Database** — SQLite file created with all tables and mock data
4. **API** — `curl http://localhost:3001/api/products` returns product list
5. **Chat** — Send a message in the chat pane, receive streaming response
6. **Tools** — Ask "What shrimp products do you have?" → agent uses search_products tool
7. **Order lookup** — Ask "What's the status of order #42?" → agent uses lookup_order tool
8. **Dynamic content** — When bot recommends a product, left pane highlights it
9. **Multi-turn** — Have a 5+ turn conversation maintaining context
10. **Visual** — Site looks modern with gold/dark theme and Yens branding

---

## Critical Files to Modify/Create

| Priority | File | Purpose |
|----------|------|---------|
| 1 | `package.json` (root) | Monorepo scripts |
| 1 | `pnpm-workspace.yaml` | Workspace config |
| 1 | `.env.example` | Environment template |
| 2 | `packages/backend/src/db/schema.sql` | All table definitions |
| 2 | `packages/backend/src/db/seed.sql` | Mock data (~500 lines) |
| 3 | `packages/backend/src/ai/tools.ts` | 6 agent tools |
| 3 | `packages/backend/src/ai/agent.ts` | System prompt + config |
| 3 | `packages/backend/src/routes/chat.ts` | Streaming chat endpoint |
| 4 | `packages/frontend/src/App.tsx` | Two-pane layout |
| 4 | `packages/frontend/src/components/ChatPane.tsx` | Chat interface |
| 4 | `packages/frontend/src/components/ProductGallery.tsx` | Product display |
| 5 | `packages/frontend/src/hooks/useContentSync.ts` | Chat→content bridge |
