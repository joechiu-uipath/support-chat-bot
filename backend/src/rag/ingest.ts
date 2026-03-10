import crypto from 'crypto';
import { embedMany } from 'ai';
import { getEmbeddingModel } from '../ai/embeddings.js';
import { getDb } from '../db/connection.js';
import { chunkAllProducts } from './chunker.js';
import type { Product } from '../types.js';

let ingestionComplete = false;

export function isIngestionComplete(): boolean {
  return ingestionComplete;
}

function computeContentHash(products: Product[], modelId: string): string {
  const content = products
    .map(
      (p) =>
        `${p.id}:${p.name_zh}:${p.name_en}:${p.description_zh}:${p.description_en}:${p.features}:${p.additional_info}`
    )
    .join('|');
  return crypto.createHash('sha256').update(`${modelId}::${content}`).digest('hex');
}

export async function ingestProductEmbeddings(): Promise<void> {
  const db = getDb();
  const modelId = process.env.EMBEDDING_MODEL || 'text-embedding-3-small';

  const products = db.prepare('SELECT * FROM products').all() as Product[];
  if (products.length === 0) {
    console.log('No products found, skipping embedding ingestion.');
    ingestionComplete = true;
    return;
  }

  const currentHash = computeContentHash(products, modelId);

  // Check staleness
  const stored = db
    .prepare("SELECT value FROM embedding_metadata WHERE key = 'content_hash'")
    .get() as { value: string } | undefined;

  if (stored && stored.value === currentHash) {
    const chunkCount = db
      .prepare('SELECT COUNT(*) as c FROM product_chunks WHERE embedding IS NOT NULL')
      .get() as { c: number };
    if (chunkCount.c > 0) {
      console.log('Embeddings are up-to-date, skipping ingestion.');
      ingestionComplete = true;
      return;
    }
  }

  console.log('Generating product embeddings...');

  const chunks = chunkAllProducts(products);
  const model = getEmbeddingModel();

  // Embed in batches of 50
  const BATCH_SIZE = 50;
  const allEmbeddings: number[][] = [];

  for (let i = 0; i < chunks.length; i += BATCH_SIZE) {
    const batch = chunks.slice(i, i + BATCH_SIZE);
    const { embeddings } = await embedMany({
      model,
      values: batch.map((c) => c.chunkText),
    });
    allEmbeddings.push(...embeddings);
  }

  // Store transactionally
  const insertChunk = db.prepare(`
    INSERT INTO product_chunks (product_id, chunk_type, chunk_text, embedding, embedding_model)
    VALUES (?, ?, ?, ?, ?)
  `);

  const upsertMeta = db.prepare(`
    INSERT INTO embedding_metadata (key, value) VALUES (?, ?)
    ON CONFLICT(key) DO UPDATE SET value = excluded.value
  `);

  const transaction = db.transaction(() => {
    // Clear old chunks
    db.prepare('DELETE FROM product_chunks').run();

    for (let i = 0; i < chunks.length; i++) {
      insertChunk.run(
        chunks[i].productId,
        chunks[i].chunkType,
        chunks[i].chunkText,
        JSON.stringify(allEmbeddings[i]),
        modelId
      );
    }

    upsertMeta.run('content_hash', currentHash);
  });

  transaction();
  ingestionComplete = true;
  console.log(`Embedded ${chunks.length} chunks for ${products.length} products.`);
}
