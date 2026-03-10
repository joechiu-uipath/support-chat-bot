export interface Product {
  id: number;
  name_zh: string;
  name_en: string;
  brand: string;
  category: string;
  description_zh: string;
  description_en: string;
  price: number;
  unit: string;
  image_url: string | null;
  features: string | null;
  is_featured: number;
  additional_info: string | null;
}

export interface InventoryItem {
  id: number;
  product_id: number;
  warehouse_location: string;
  quantity: number;
  last_updated: string;
}

export interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  city: string;
  district: string | null;
  address: string | null;
  customer_type: string;
  persona: string;
  registration_date: string;
  preferred_language: string;
}

export interface Order {
  id: number;
  customer_id: number;
  order_date: string;
  status: string;
  fulfillment_mode: string;
  shipping_address: string | null;
  total_amount: number;
  tracking_number: string | null;
  estimated_delivery: string | null;
  notes: string | null;
}

export interface OrderItem {
  id: number;
  order_id: number;
  product_id: number;
  quantity: number;
  unit_price: number;
}
