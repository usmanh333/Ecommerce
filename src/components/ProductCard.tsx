"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/catalog";
import { formatPrice, getDiscountPercent } from "@/lib/shop";
import { useCart } from "@/context/CartContext";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const discount = getDiscountPercent(product.price, product.salePrice);

  return (
    <article className="product-card">
      <Link href={`/product/${product.slug}`} className="product-image-wrap">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
          className="product-image"
        />
      </Link>

      <div className="product-body">
        <p className="product-category">{product.category}</p>
        <Link href={`/product/${product.slug}`} className="product-title-link">
          <h3 className="product-title">{product.name}</h3>
        </Link>
        <p className="product-description">{product.description}</p>

        <div className="product-meta-row">
          <p className="product-pricing">
            <span className="sale-price">{formatPrice(product.salePrice)}</span>
            <span className="base-price">{formatPrice(product.price)}</span>
          </p>
          {discount > 0 && <span className="discount-pill">-{discount}%</span>}
        </div>

        <div className="product-footer-row">
          <span className="rating">{product.rating.toFixed(1)} / 5</span>
          <button className="luxury-btn small" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}
