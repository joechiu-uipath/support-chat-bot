import { Hono } from 'hono';
import { getDb } from '../db/connection.js';
import type { Order, OrderItem } from '../types.js';

const ordersRouter = new Hono();

ordersRouter.get('/:id', (c) => {
  const db = getDb();
  const id = parseInt(c.req.param('id'));
  const order = db.prepare('SELECT * FROM orders WHERE id = ?').get(id) as Order | undefined;

  if (!order) {
    return c.json({ error: 'Order not found' }, 404);
  }

  const items = db
    .prepare(
      `SELECT oi.*, p.name_zh, p.name_en, p.image_url
       FROM order_items oi
       JOIN products p ON oi.product_id = p.id
       WHERE oi.order_id = ?`
    )
    .all(id) as (OrderItem & { name_zh: string; name_en: string; image_url: string })[];

  const customer = db
    .prepare('SELECT name, email, phone FROM customers WHERE id = ?')
    .get(order.customer_id) as { name: string; email: string; phone: string } | undefined;

  return c.json({
    ...order,
    customer,
    items: items.map((item) => ({
      product_id: item.product_id,
      name_zh: item.name_zh,
      name_en: item.name_en,
      image_url: item.image_url,
      quantity: item.quantity,
      unit_price: item.unit_price,
      subtotal: item.quantity * item.unit_price,
    })),
  });
});

export { ordersRouter };
