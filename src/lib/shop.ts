import { Product } from "@/types/catalog";

export const formatPrice = (value: number) => `Rs. ${value.toLocaleString()}`;

export const getDiscountPercent = (price: number, salePrice: number) => {
  if (salePrice >= price) return 0;
  return Math.round(((price - salePrice) / price) * 100);
};

export const getProductBySlug = (products: Product[], slug: string) =>
  products.find((item) => item.slug === slug);

export const getRelatedProducts = (products: Product[], product: Product, limit = 4) =>
  products
    .filter((item) => item.slug !== product.slug && item.category === product.category)
    .slice(0, limit);

export interface CustomerDetails {
  name: string;
  phone: string;
  city: string;
  area: string;
  address: string;
  landmark?: string;
}

export const buildWhatsAppMessage = (
  customer: CustomerDetails,
  lineItems: Array<{ name: string; quantity: number; lineTotal: number }>,
  total: number,
) => {
  const lines = lineItems
    .map((item, index) => `${index + 1}. ${item.name} x${item.quantity} - ${formatPrice(item.lineTotal)}`)
    .join("\n");

  const addressParts = [customer.address, customer.area, customer.city];
  if (customer.landmark?.trim()) addressParts.push(`Landmark: ${customer.landmark.trim()}`);

  return [
    "Hello, I want to place an order!",
    "",
    "*Order Details:*",
    lines,
    "",
    `*Total: ${formatPrice(total)}*`,
    "",
    "*Delivery Information:*",
    `Name: ${customer.name.trim()}`,
    `Phone: ${customer.phone.trim()}`,
    `City: ${customer.city}`,
    `Area: ${customer.area.trim()}`,
    `Address: ${customer.address.trim()}`,
    ...(customer.landmark?.trim() ? [`Landmark: ${customer.landmark.trim()}`] : []),
  ].join("\n");
};

export const getWhatsAppCheckoutLink = (phone: string, message: string) => {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encoded}`;
};
