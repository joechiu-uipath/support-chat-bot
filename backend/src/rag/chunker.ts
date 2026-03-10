import type { Product } from '../types.js';

export interface ProductChunk {
  productId: number;
  chunkType: string;
  chunkText: string;
}

export function chunkProduct(product: Product): ProductChunk[] {
  const chunks: ProductChunk[] = [];
  const prefix = `${product.name_zh} (${product.name_en}) — ${product.brand}`;

  // Identity chunk: name, brand, category, price/unit
  chunks.push({
    productId: product.id,
    chunkType: 'identity',
    chunkText: `${prefix}\nCategory: ${product.category}\nPrice: NT$${product.price} / ${product.unit}`,
  });

  // Description chunk: zh + en
  chunks.push({
    productId: product.id,
    chunkType: 'description',
    chunkText: `${prefix}\n${product.description_zh}\n${product.description_en}`,
  });

  // Features chunk
  if (product.features) {
    try {
      const tags = JSON.parse(product.features) as string[];
      if (tags.length > 0) {
        chunks.push({
          productId: product.id,
          chunkType: 'features',
          chunkText: `${prefix}\nFeatures: ${tags.join(', ')}`,
        });
      }
    } catch {
      // skip malformed features
    }
  }

  // Additional info chunks — split by double newline into ~500 char segments
  if (product.additional_info) {
    const paragraphs = product.additional_info.split(/\n\n+/);
    let buffer = '';
    let chunkIndex = 0;

    for (const para of paragraphs) {
      const trimmed = para.trim();
      if (!trimmed) continue;

      if (buffer.length + trimmed.length > 500 && buffer.length > 0) {
        chunks.push({
          productId: product.id,
          chunkType: `additional_info_${chunkIndex}`,
          chunkText: `${prefix}\n${buffer.trim()}`,
        });
        chunkIndex++;
        buffer = '';
      }
      buffer += (buffer ? '\n\n' : '') + trimmed;
    }

    // Flush remaining
    if (buffer.trim()) {
      chunks.push({
        productId: product.id,
        chunkType: `additional_info_${chunkIndex}`,
        chunkText: `${prefix}\n${buffer.trim()}`,
      });
    }
  }

  return chunks;
}

export function chunkAllProducts(products: Product[]): ProductChunk[] {
  return products.flatMap(chunkProduct);
}
