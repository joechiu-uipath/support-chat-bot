import { Hono } from 'hono';
import { convertToModelMessages } from 'ai';
import { chat } from '../ai/agent.js';

const chatRouter = new Hono();

chatRouter.post('/', async (c) => {
  console.log('[chat] POST /api/chat received');
  try {
    const body = await c.req.json();
    const { messages, language, userId, userName, userEmail, userPhone, userCity, userType, userPersona } = body;

    if (!messages || !Array.isArray(messages)) {
      console.error('[chat] Invalid request: messages array missing');
      return c.json({ error: 'messages array is required' }, 400);
    }

    console.log(`[chat] messages=${messages.length}, language=${language || 'zh-TW'}, user=${userName || 'anonymous'}`);

    const modelMessages = await convertToModelMessages(messages);
    const user = userId
      ? { id: userId, name: userName, email: userEmail, phone: userPhone, city: userCity, customerType: userType, persona: userPersona }
      : undefined;
    const result = await chat(modelMessages, language, user);
    return result.toUIMessageStreamResponse();
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('[chat] Route error:', message);
    return c.json({ error: message }, 500);
  }
});

export { chatRouter };
