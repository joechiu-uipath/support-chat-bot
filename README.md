# Enterprise AI Customer Service Bot

[English](#english) | [繁體中文](#繁體中文)

---

# English

## About This Project

**Customer Support Chat Bot** is a next-generation AI-powered customer service portal prototype for a premium food company. The application combines a rich product showcase with an intelligent conversational AI assistant that can inform, support, and upsell customers in real time.

> **Warning — Demo Only / No Authentication or Authorization**
> This project is a demonstration prototype with no built-in security. There is no user sign-in, session management, or API authorization. For example, any user can access order records and customer data belonging to any account. A production system must implement proper authentication, role-based access control, and authorization checks to protect customer data.

### Design Philosophy

The portal uses a **two-pane layout**:

- **Left pane (~70%)** — A product gallery and informational site showcasing a product catalog with category filtering, image carousels, and detailed product cards.
- **Right pane (~30%)** — An AI-powered chat interface where customers interact with a streaming LLM agent that understands the full product catalog, customer history, and order data.

The novel feature of this prototype is that **the content pane dynamically responds to the conversation** — when the AI agent recommends or highlights a product, it is surfaced in the gallery in real time. This creates a seamless experience where conversation drives product discovery.

### Key Features

- **Streaming AI Chat** — Real-time streaming responses powered by Vercel AI SDK with multi-turn conversation support.
- **Multi-Provider LLM Support** — Works with OpenAI, Anthropic (Claude), and Azure OpenAI / Azure AI Foundry.
- **Agentic Tool Use** — The AI agent has 6 built-in tools:
  - `search_products` — Hybrid keyword (FTS5) + vector (RAG) product search with LLM-powered query expansion.
  - `check_inventory` — Real-time stock availability by warehouse.
  - `lookup_order` — Order status, tracking info, and line items.
  - `lookup_customer` — Find customer profiles by email or name.
  - `highlight_product` — Push a product to the content pane for visual display.
  - `get_recommendations` — Occasion/preference-based product suggestions.
- **RAG (Retrieval-Augmented Generation)** — Products are chunked, embedded, and stored as vectors for semantic search. Embedding ingestion runs as a background job on server startup.
- **Customer Personas** — 5 distinct persona types (premium gourmet, family shopper, restaurant operator, wholesale distributor, gift/festival buyer) with tailored marketing messages and product recommendations.
- **Internationalization (i18n)** — Full UI translation support for 7 locales: zh-TW, en, ja, ko, fr, de, nl. Product translations stored in the database.
- **Dynamic Content Sync** — Chat agent actions (product highlights, category filters) are reflected in the content pane via React context.
- **Client-Side Routing** — SPA navigation with `/product/:id` deep links and browser history support.
- **Theme Support** — Light/dark theme toggle with CSS custom properties.

### Tech Stack

| Layer | Technology |
|---|---|
| **Backend** | [Hono](https://hono.dev/) 4.7, Node.js, TypeScript 5.7 |
| **Database** | SQLite via [better-sqlite3](https://github.com/WiseLibs/better-sqlite3), FTS5 full-text search |
| **AI / LLM** | [Vercel AI SDK](https://sdk.vercel.ai/) with OpenAI, Anthropic, and Azure providers |
| **RAG** | Vector embeddings (cosine similarity), multi-query search, content-hash deduplication |
| **Frontend** | React 19, Vite 6.1, TypeScript 5.7 |
| **Styling** | CSS with theme variables (data attributes) |
| **i18n** | Custom React context with 7-locale translation strings |
| **Package Manager** | pnpm with monorepo workspaces |

### Project Structure

```
support-chat-bot/
├── backend/
│   ├── src/
│   │   ├── index.ts              # Hono server entry point (port 3001)
│   │   ├── ai/
│   │   │   ├── agent.ts          # Chat agent orchestration & streaming
│   │   │   ├── models.ts         # LLM provider initialization
│   │   │   ├── tools.ts          # 6 agentic tools
│   │   │   └── embeddings.ts     # Embedding model config
│   │   ├── db/
│   │   │   ├── connection.ts     # SQLite connection (WAL mode)
│   │   │   ├── schema.sql        # Database schema + FTS triggers
│   │   │   ├── init.ts           # DB seed script
│   │   │   └── seeds/            # SQL seed files (01–08)
│   │   ├── rag/
│   │   │   ├── ingest.ts         # Background embedding ingestion
│   │   │   └── search.ts         # Hybrid FTS + vector search
│   │   └── routes/
│   │       ├── chat.ts           # POST /api/chat (streaming)
│   │       ├── products.ts       # Product CRUD endpoints
│   │       ├── customers.ts      # Customer endpoints
│   │       └── orders.ts         # Order endpoints
│   ├── data/
│   │   └── yens.db               # SQLite database file
│   ├── .env                      # Environment config (not committed)
│   ├── .env.example              # Environment template
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── main.tsx              # React entry point
│   │   ├── App.tsx               # Root component (routing, theme, locale)
│   │   ├── components/           # UI components (Header, ChatPane, ContentPane, etc.)
│   │   ├── hooks/                # Custom hooks (useContentSync, useScrollReveal)
│   │   ├── i18n/                 # Translations & i18n context
│   │   └── lib/                  # API client helpers
│   ├── index.html                # HTML template with locale-specific fonts
│   ├── vite.config.ts            # Vite config with API proxy
│   └── package.json
├── pnpm-workspace.yaml           # Monorepo workspace config
└── Agents.md                     # Agent design documentation
```

---

## Getting Started

### Prerequisites

- **Node.js** 18+ (recommended: 20+)
- **pnpm** 8+ ([install guide](https://pnpm.io/installation))
- An API key from one of the supported LLM providers:
  - [OpenAI](https://platform.openai.com/api-keys)
  - [Anthropic](https://console.anthropic.com/)
  - [Azure OpenAI](https://portal.azure.com/)

### 1. Clone the Repository

```bash
git clone https://github.com/joechiu-uipath/support-chat-bot.git
cd support-chat-bot
```

### 2. Install Dependencies

```bash
pnpm install
```

This installs dependencies for both `backend/` and `frontend/` workspaces automatically.

### 3. Configure Environment Variables

```bash
cp backend/.env.example backend/.env
```

Edit `backend/.env` with your LLM provider credentials:

**Option A: OpenAI (default)**
```env
AI_PROVIDER=openai
OPENAI_API_KEY=sk-your-key-here
AI_MODEL=gpt-4o
PORT=3001
```

**Option B: Anthropic (Claude)**
```env
AI_PROVIDER=anthropic
ANTHROPIC_API_KEY=sk-ant-your-key-here
AI_MODEL=claude-sonnet-4-5-20250514
PORT=3001
```

**Option C: Azure OpenAI**
```env
AI_PROVIDER=azure
AZURE_RESOURCE_NAME=your-resource-name
AZURE_API_KEY=your-azure-api-key
AI_MODEL=your-deployment-name
PORT=3001
```

### 4. Initialize the Database

Seed the SQLite database with products, customers, orders, inventory, translations, and images:

```bash
pnpm --filter backend db:seed
```

This runs `backend/src/db/init.ts`, which:
1. Drops all existing tables (safe to re-run).
2. Creates the schema from `schema.sql` (including FTS5 virtual tables and triggers).
3. Creates additional tables for translations, images, RAG chunks, and embedding metadata.
4. Executes all seed SQL files in order (`seeds/01-products.sql` through `seeds/08-curate-featured.sql`).

The database file is created at `backend/data/yens.db`.

### 5. Run the Application

Open **two terminal windows** (or use split terminals):

**Terminal 1 — Backend (port 3001):**
```bash
pnpm --filter backend dev
```

**Terminal 2 — Frontend (port 5173):**
```bash
pnpm --filter frontend dev
```

Then open your browser to **http://localhost:5173**.

The frontend dev server automatically proxies `/api/*` and `/cdn/*` requests to the backend at `http://localhost:3001`.

> **Note:** On first startup, the backend will automatically run RAG embedding ingestion in the background. This may take a minute depending on the number of products and your embedding provider. The chat agent will use full-text search as a fallback until embeddings are ready.

### API Endpoints

| Method | Path | Description |
|---|---|---|
| `POST` | `/api/chat` | Streaming chat with AI agent |
| `GET` | `/api/products` | List / search products (supports `?q=` and `?locale=`) |
| `GET` | `/api/products/:id` | Product details |
| `GET` | `/api/products/:id/inventory` | Stock availability |
| `GET` | `/api/customers` | List all customers |
| `GET` | `/api/customers/:id` | Customer profile with order history |
| `GET` | `/api/orders/:id` | Order details with line items |
| `GET` | `/api/health` | Health check |

---

# 繁體中文

## 關於此專案

**智慧客服機器人**是新一代 AI 客服入口網站原型。本應用程式結合了豐富的產品展示與智慧對話式 AI 助理，能即時為顧客提供資訊、支援與推薦。

> **警告 — 僅供示範 / 無身份驗證或授權機制**
> 本專案為示範原型，未內建任何安全機制。沒有使用者登入、session 管理或 API 授權驗證。例如，任何使用者皆可存取其他帳戶的訂單記錄與顧客資料。正式環境系統必須實作適當的身份驗證、角色權限控制及授權檢查，以保護顧客資料。

### 設計理念

入口網站採用**雙面板佈局**：

- **左側面板（約 70%）** — 產品展示區，包含分類篩選、圖片輪播和詳細的產品卡片。
- **右側面板（約 30%）** — AI 聊天介面，顧客可與串流 LLM 代理進行對話，該代理完整了解產品目錄、顧客歷史記錄和訂單資料。

本原型的創新特色在於**內容面板會根據對話內容動態回應** — 當 AI 代理推薦或突顯某產品時，該產品會即時在展示區中呈現。這創造了一種無縫體驗，讓對話驅動產品探索。

### 主要功能

- **串流 AI 聊天** — 基於 Vercel AI SDK 的即時串流回應，支援多輪對話。
- **多供應商 LLM 支援** — 支援 OpenAI、Anthropic（Claude）和 Azure OpenAI / Azure AI Foundry。
- **代理工具使用** — AI 代理內建 6 種工具：
  - `search_products` — 混合關鍵字（FTS5）+ 向量（RAG）產品搜尋，配合 LLM 驅動的查詢擴展。
  - `check_inventory` — 依倉庫查詢即時庫存。
  - `lookup_order` — 訂單狀態、物流追蹤與明細。
  - `lookup_customer` — 依電子郵件或姓名查找顧客資料。
  - `highlight_product` — 將產品推送至內容面板進行視覺展示。
  - `get_recommendations` — 基於場合/偏好的產品推薦。
- **RAG（檢索增強生成）** — 產品被分塊、嵌入並以向量形式儲存，支援語意搜尋。嵌入建立作為伺服器啟動時的背景任務執行。
- **顧客人物誌** — 5 種不同的人物誌類型（高端美食家、家庭購物者、餐廳經營者、批發經銷商、禮品/節慶購買者），提供量身定制的行銷訊息與產品推薦。
- **國際化（i18n）** — 完整 UI 翻譯支援 7 種語系：zh-TW、en、ja、ko、fr、de、nl。產品翻譯儲存於資料庫中。
- **動態內容同步** — 聊天代理的操作（產品突顯、分類篩選）透過 React context 即時反映在內容面板。
- **客戶端路由** — SPA 導航，支援 `/product/:id` 深層連結與瀏覽器歷史記錄。
- **主題支援** — 明暗主題切換，使用 CSS 自訂屬性。

### 技術架構

| 層級 | 技術 |
|---|---|
| **後端** | [Hono](https://hono.dev/) 4.7、Node.js、TypeScript 5.7 |
| **資料庫** | SQLite（[better-sqlite3](https://github.com/WiseLibs/better-sqlite3)）、FTS5 全文搜尋 |
| **AI / LLM** | [Vercel AI SDK](https://sdk.vercel.ai/)，支援 OpenAI、Anthropic、Azure 供應商 |
| **RAG** | 向量嵌入（餘弦相似度）、多查詢搜尋、內容雜湊去重 |
| **前端** | React 19、Vite 6.1、TypeScript 5.7 |
| **樣式** | CSS 搭配主題變數（data 屬性） |
| **國際化** | 自訂 React context，7 種語系翻譯字串 |
| **套件管理** | pnpm monorepo 工作區 |

### 專案結構

```
support-chat-bot/
├── backend/
│   ├── src/
│   │   ├── index.ts              # Hono 伺服器入口（port 3001）
│   │   ├── ai/
│   │   │   ├── agent.ts          # 聊天代理編排與串流
│   │   │   ├── models.ts         # LLM 供應商初始化
│   │   │   ├── tools.ts          # 6 種代理工具
│   │   │   └── embeddings.ts     # 嵌入模型設定
│   │   ├── db/
│   │   │   ├── connection.ts     # SQLite 連線（WAL 模式）
│   │   │   ├── schema.sql        # 資料庫結構 + FTS 觸發器
│   │   │   ├── init.ts           # 資料庫初始化腳本
│   │   │   └── seeds/            # SQL 種子檔案（01–08）
│   │   ├── rag/
│   │   │   ├── ingest.ts         # 背景嵌入建立
│   │   │   └── search.ts         # 混合 FTS + 向量搜尋
│   │   └── routes/
│   │       ├── chat.ts           # POST /api/chat（串流）
│   │       ├── products.ts       # 產品 CRUD 端點
│   │       ├── customers.ts      # 顧客端點
│   │       └── orders.ts         # 訂單端點
│   ├── data/
│   │   └── yens.db               # SQLite 資料庫檔案
│   ├── .env                      # 環境設定（不納入版控）
│   ├── .env.example              # 環境設定範本
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── main.tsx              # React 入口
│   │   ├── App.tsx               # 根元件（路由、主題、語系）
│   │   ├── components/           # UI 元件（Header、ChatPane、ContentPane 等）
│   │   ├── hooks/                # 自訂 hooks（useContentSync、useScrollReveal）
│   │   ├── i18n/                 # 翻譯與國際化 context
│   │   └── lib/                  # API 客戶端工具
│   ├── index.html                # HTML 範本（含語系專用字型）
│   ├── vite.config.ts            # Vite 設定與 API 代理
│   └── package.json
├── pnpm-workspace.yaml           # Monorepo 工作區設定
└── Agents.md                     # 代理設計文件
```

---

## 開始使用

### 前置需求

- **Node.js** 18+（建議 20+）
- **pnpm** 8+（[安裝指南](https://pnpm.io/installation)）
- 以下任一 LLM 供應商的 API 金鑰：
  - [OpenAI](https://platform.openai.com/api-keys)
  - [Anthropic](https://console.anthropic.com/)
  - [Azure OpenAI](https://portal.azure.com/)

### 1. 複製儲存庫

```bash
git clone https://github.com/joechiu-uipath/support-chat-bot.git
cd support-chat-bot
```

### 2. 安裝依賴套件

```bash
pnpm install
```

此指令會自動為 `backend/` 和 `frontend/` 工作區安裝所有依賴套件。

### 3. 設定環境變數

```bash
cp backend/.env.example backend/.env
```

編輯 `backend/.env`，填入您的 LLM 供應商憑證：

**選項 A：OpenAI（預設）**
```env
AI_PROVIDER=openai
OPENAI_API_KEY=sk-your-key-here
AI_MODEL=gpt-4o
PORT=3001
```

**選項 B：Anthropic（Claude）**
```env
AI_PROVIDER=anthropic
ANTHROPIC_API_KEY=sk-ant-your-key-here
AI_MODEL=claude-sonnet-4-5-20250514
PORT=3001
```

**選項 C：Azure OpenAI**
```env
AI_PROVIDER=azure
AZURE_RESOURCE_NAME=your-resource-name
AZURE_API_KEY=your-azure-api-key
AI_MODEL=your-deployment-name
PORT=3001
```

### 4. 初始化資料庫

將產品、顧客、訂單、庫存、翻譯和圖片等種子資料匯入 SQLite 資料庫：

```bash
pnpm --filter backend db:seed
```

此指令執行 `backend/src/db/init.ts`，步驟如下：
1. 刪除所有現有資料表（可安全重複執行）。
2. 從 `schema.sql` 建立資料庫結構（包含 FTS5 虛擬表和觸發器）。
3. 建立額外資料表：翻譯、圖片、RAG 分塊和嵌入中繼資料。
4. 依序執行所有種子 SQL 檔案（`seeds/01-products.sql` 至 `seeds/08-curate-featured.sql`）。

資料庫檔案建立於 `backend/data/yens.db`。

### 5. 啟動應用程式

開啟**兩個終端視窗**（或使用分割終端）：

**終端 1 — 後端（port 3001）：**
```bash
pnpm --filter backend dev
```

**終端 2 — 前端（port 5173）：**
```bash
pnpm --filter frontend dev
```

然後在瀏覽器開啟 **http://localhost:5173**。

前端開發伺服器會自動將 `/api/*` 和 `/cdn/*` 請求代理至後端 `http://localhost:3001`。

> **注意：** 首次啟動時，後端會自動在背景執行 RAG 嵌入建立。根據產品數量和嵌入供應商，這可能需要幾分鐘。在嵌入完成前，聊天代理會使用全文搜尋作為備用方案。

### API 端點

| 方法 | 路徑 | 說明 |
|---|---|---|
| `POST` | `/api/chat` | 與 AI 代理串流聊天 |
| `GET` | `/api/products` | 列出/搜尋產品（支援 `?q=` 和 `?locale=`） |
| `GET` | `/api/products/:id` | 產品詳細資料 |
| `GET` | `/api/products/:id/inventory` | 庫存可用量 |
| `GET` | `/api/customers` | 列出所有顧客 |
| `GET` | `/api/customers/:id` | 顧客資料與訂單歷史 |
| `GET` | `/api/orders/:id` | 訂單詳情與明細 |
| `GET` | `/api/health` | 健康檢查 |
