export interface Product {
  id: number;
  name: string;
  name_secondary: string;
  brand: string;
  category: string;
  description: string;
  price: number;
  unit: string;
  image_url: string | null;
  images: string[];
  features: string[];
  is_featured: boolean;
}

export interface CustomerSummary {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  city: string;
  customer_type: string;
  persona: string;
}

export async function fetchProducts(locale: string = 'zh-TW'): Promise<Product[]> {
  const res = await fetch(`/api/products?locale=${encodeURIComponent(locale)}`);
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}

export async function fetchProduct(id: number, locale: string = 'zh-TW'): Promise<Product> {
  const res = await fetch(`/api/products/${id}?locale=${encodeURIComponent(locale)}`);
  if (!res.ok) throw new Error('Failed to fetch product');
  return res.json();
}

export async function fetchCustomers(): Promise<CustomerSummary[]> {
  const res = await fetch('/api/customers');
  if (!res.ok) throw new Error('Failed to fetch customers');
  return res.json();
}
