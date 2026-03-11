import 'dotenv/config';
import { serve } from '@hono/node-server';
import { serveStatic } from '@hono/node-server/serve-static';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { ingestProductEmbeddings } from './rag/ingest.js';
import { chatRouter } from './routes/chat.js';
import { productsRouter } from './routes/products.js';
import { ordersRouter } from './routes/orders.js';
import { customersRouter } from './routes/customers.js';

const app = new Hono();

// Middleware
app.use('/*', cors());

// Static CDN for product images
app.use('/cdn/*', serveStatic({
  root: './data/',
  rewriteRequestPath: (path) => path.replace(/^\/cdn/, ''),
}));

// Routes
app.route('/api/chat', chatRouter);
app.route('/api/products', productsRouter);
app.route('/api/orders', ordersRouter);
app.route('/api/customers', customersRouter);

// Health check
app.get('/api/health', (c) => c.json({ status: 'ok' }));

// Catch any unhandled rejections/exceptions so tsx watch shows them instead of silently dying
process.on('uncaughtException', (err) => console.error('[CRASH] uncaughtException:', err));
process.on('unhandledRejection', (err) => console.error('[CRASH] unhandledRejection:', err));

// Non-blocking background embedding ingestion
ingestProductEmbeddings().catch((err) =>
  console.error('Background embedding ingestion failed:', err)
);

const port = parseInt(process.env.PORT || '3001');
serve({ fetch: app.fetch, port }, () => {
  console.log(`Server running on http://localhost:${port}`);
});
