import { createOpenAI } from '@ai-sdk/openai';
import { createAzure } from '@ai-sdk/azure';

export function getEmbeddingModel() {
  const provider =
    process.env.EMBEDDING_PROVIDER || process.env.AI_PROVIDER || 'openai';
  const modelId = process.env.EMBEDDING_MODEL || 'text-embedding-3-small';

  if (provider === 'azure') {
    const azure = createAzure({
      resourceName: process.env.AZURE_RESOURCE_NAME,
      apiKey: process.env.AZURE_API_KEY,
    });
    return azure.embedding(modelId);
  }

  // Default to OpenAI (also used as fallback for anthropic since it has no embedding API)
  const openai = createOpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  return openai.embedding(modelId);
}
