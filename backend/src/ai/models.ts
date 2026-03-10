import { createOpenAI } from '@ai-sdk/openai';
import { createAnthropic } from '@ai-sdk/anthropic';
import { createAzure } from '@ai-sdk/azure';

export function getModel() {
  const provider = process.env.AI_PROVIDER || 'openai';
  const modelId = process.env.AI_MODEL || 'gpt-4o';

  if (provider === 'anthropic') {
    const anthropic = createAnthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });
    return anthropic(modelId);
  }

  if (provider === 'azure') {
    // Azure AI Foundry Anthropic models (Claude) use the native Anthropic API
    // endpoint: https://{resource}.openai.azure.com/anthropic/v1/messages
    if (modelId.startsWith('claude')) {
      const resourceName = process.env.AZURE_RESOURCE_NAME;
      const anthropic = createAnthropic({
        baseURL: `https://${resourceName}.openai.azure.com/anthropic/v1`,
        apiKey: process.env.AZURE_API_KEY,
      });
      return anthropic(modelId);
    }

    const azure = createAzure({
      resourceName: process.env.AZURE_RESOURCE_NAME,
      apiKey: process.env.AZURE_API_KEY,
    });
    return azure.chat(modelId);
  }

  const openai = createOpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  return openai(modelId);
}
