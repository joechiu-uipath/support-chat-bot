import { Hono } from 'hono';
import { getDb } from '../db/connection.js';
import type { Customer, Order } from '../types.js';

const customersRouter = new Hono();

// List all customers (summary)
customersRouter.get('/', (c) => {
  const db = getDb();
  const customers = db
    .prepare('SELECT id, name, email, phone, city, customer_type, persona FROM customers ORDER BY id')
    .all();
  return c.json(customers);
});

customersRouter.get('/:id', (c) => {
  const db = getDb();
  const id = parseInt(c.req.param('id'));
  const customer = db.prepare('SELECT * FROM customers WHERE id = ?').get(id) as
    | Customer
    | undefined;

  if (!customer) {
    return c.json({ error: 'Customer not found' }, 404);
  }

  const orders = db
    .prepare(
      'SELECT id, order_date, status, total_amount FROM orders WHERE customer_id = ? ORDER BY order_date DESC LIMIT 10'
    )
    .all(id) as Pick<Order, 'id' | 'order_date' | 'status' | 'total_amount'>[];

  return c.json({ ...customer, orders });
});

export { customersRouter };
