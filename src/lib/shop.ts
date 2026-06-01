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

export const buildWhatsAppMessage = (
  customerName: string,
  lineItems: Array<{ name: string; quantity: number; lineTotal: number }>,
  total: number,
) => {
  const safeName = customerName.trim() || "Not Provided";
  const lines = lineItems
    .map((item, index) => `${index + 1}. ${item.name} x${item.quantity} - ${formatPrice(item.lineTotal)}`)
    .join("\n");

  return [
    "Hello, I want to place an order.",
    "",
    "Products:",
    lines,
    "",
    `Total: ${formatPrice(total)}`,
    "",
    `Customer Name: ${safeName}`,
  ].join("\n");
};

export const getWhatsAppCheckoutLink = (phone: string, message: string) => {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encoded}`;
};
