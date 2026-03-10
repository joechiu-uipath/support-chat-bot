# Enriched Product Data + Local RAG System

## Architecture

### Hybrid Search Pipeline

```
User query
    |
    v
+-------------------------+
|  Query Expansion (LLM)  |  generateObject() -> 3 FTS terms + 3 semantic queries
+---------+---------------+
          |
     +----+----+
     v         v
+--------+ +----------+
| FTS5   | | Vector   |  3 FTS MATCH queries    3 embedding similarity searches
| Search | | Search   |  against products_fts   against product_chunks
+---+----+ +----+-----+
    |           |
    v           v
+-------------------------+
|   Merge & Re-rank       |  Deduplicate by product_id
|                         |  Combined score = 0.4*FTS + 0.6*Vector
|                         |  Discard if combined < 0.2 threshold
+---------+---------------+
          |
          v
    Top 10 results
    (with additional_info snippet for AI context)
```

### Vector Storage: SQLite (No Extra DB)

For 18 products chunked into ~100-150 vectors, a dedicated vector DB adds complexity without value:
- Embeddings stored as JSON `number[]` in `product_chunks` table
- `cosineSimilarity()` from AI SDK for in-memory scoring
- Scanning 150 vectors takes <1ms
- Zero new dependencies

### Chunking Strategy

| Chunk Type | Content |
|---|---|
| `identity` | Name (zh+en), brand, category, price/unit |
| `description` | Full zh + en description |
| `features` | Feature tags as text |
| `additional_info_N` | Additional info split by paragraph (~500 char segments) |

Each chunk prefixed with product name for embedding context. ~4-8 chunks per product, ~100-150 total.

### Background Ingestion

- Runs at server startup (non-blocking)
- SHA-256 hash of all product content for staleness detection
- If stale or model changed: chunks -> embedMany() in batches -> store transactionally
- Graceful degradation: vector search returns empty during ingestion, falls back to FTS-only

## Files

```
packages/backend/src/
  ai/
    models.ts         - Shared getModel() factory
    embeddings.ts     - getEmbeddingModel() for embedding provider
    agent.ts          - Imports getModel from models.ts
    tools.ts          - Hybrid search pipeline in searchProducts
  db/
    schema.sql        - additional_info col, product_chunks + embedding_metadata tables
    init.ts           - Migration check for additional_info column
    seeds/
      01-products.sql - All 18 products with additional_info content
  rag/
    chunker.ts        - chunkProduct() splits product into semantic chunks
    ingest.ts         - Background embedding ingestion with staleness detection
    search.ts         - vectorSearch() and multiQueryVectorSearch()
  routes/
    products.ts       - Excludes additional_info from API responses
  types.ts            - additional_info field on Product interface
  index.ts            - Starts background ingestion
```

## Environment Variables

- `EMBEDDING_PROVIDER` - Override embedding provider (default: inherits AI_PROVIDER)
- `EMBEDDING_MODEL` - Embedding model ID (default: `text-embedding-3-small`)

## Verification

1. Server starts, logs "Generating product embeddings..." then "Embedded N chunks for 18 products"
2. Restart -> logs "Embeddings are up-to-date, skipping ingestion"
3. FTS: "有什麼蝦類商品" -> returns shrimp products
4. Semantic: "something good for a dinner party" -> returns premium items
5. Graceful degradation: no embedding API -> FTS-only fallback
