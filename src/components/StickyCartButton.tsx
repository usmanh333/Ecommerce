"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function StickyCartButton() {
  const { cartCount } = useCart();

  if (!cartCount) return null;

  return (
    <Link href="/cart" className="sticky-cart-btn" aria-label="View cart">
      Cart ({cartCount})
    </Link>
  );
}
