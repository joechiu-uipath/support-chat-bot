import { embed, embedMany, cosineSimilarity } from 'ai';
import { getEmbeddingModel } from '../ai/embeddings.js';
import { getDb } from '../db/connection.js';

interface ChunkRow {
  id: number;
  product_id: number;
  chunk_type: string;
  chunk_text: string;
  embedding: string;
}

export interface VectorSearchResult {
  productId: number;
  chunkType: string;
  chunkText: string;
  score: number;
}

function loadChunks(): ChunkRow[] {
  const db = getDb();
  return db
    .prepare('SELECT id, product_id, chunk_type, chunk_text, embedding FROM product_chunks WHERE embedding IS NOT NULL')
    .all() as ChunkRow[];
}

export async function vectorSearch(
  query: string,
  topK: number = 10
): Promise<VectorSearchResult[]> {
  const model = getEmbeddingModel();
  const { embedding: queryEmbedding } = await embed({ model, value: query });

  const chunks = loadChunks();
  if (chunks.length === 0) return [];

  const scored = chunks.map((chunk) => {
    const chunkEmbedding = JSON.parse(chunk.embedding) as number[];
    const score = cosineSimilarity(queryEmbedding, chunkEmbedding);
    return {
      productId: chunk.product_id,
      chunkType: chunk.chunk_type,
      chunkText: chunk.chunk_text,
      score,
    };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, topK);
}

export async function multiQueryVectorSearch(
  queries: string[],
  topK: number = 10
): Promise<VectorSearchResult[]> {
  if (queries.length === 0) return [];

  const model = getEmbeddingModel();
  const { embeddings: queryEmbeddings } = await embedMany({ model, values: queries });

  const chunks = loadChunks();
  if (chunks.length === 0) return [];

  // For each chunk, score against the best-matching query
  const scored = chunks.map((chunk) => {
    const chunkEmbedding = JSON.parse(chunk.embedding) as number[];
    let bestScore = -1;
    for (const qEmb of queryEmbeddings) {
      const score = cosineSimilarity(qEmb, chunkEmbedding);
      if (score > bestScore) bestScore = score;
    }
    return {
      productId: chunk.product_id,
      chunkType: chunk.chunk_type,
      chunkText: chunk.chunk_text,
      score: bestScore,
    };
  });

  scored.sort((a, b) => b.score - a.score);

  // Deduplicate by product_id — keep highest score per product
  const seen = new Set<number>();
  const results: VectorSearchResult[] = [];
  for (const item of scored) {
    if (!seen.has(item.productId)) {
      seen.add(item.productId);
      results.push(item);
      if (results.length >= topK) break;
    }
  }

  return results;
}
