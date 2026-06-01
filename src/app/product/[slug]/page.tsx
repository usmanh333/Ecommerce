"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductShelf from "@/components/ProductShelf";
import { products, reviews } from "@/data/catalog";
import { formatPrice, getRelatedProducts } from "@/lib/shop";
import { useCart } from "@/context/CartContext";

export default function ProductPage() {
  const { addToCart } = useCart();
  const [activeImage, setActiveImage] = useState(0);
  const params = useParams<{ slug: string }>();

  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    return (
      <div>
        <Header />
        <main className="product-page">
          <section className="empty-cart">
            <h2>Product not found</h2>
            <p>The selected product is unavailable or has been moved.</p>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  const related = getRelatedProducts(products, product);
  const productReviews = reviews.filter((review) => review.productSlug === product.slug);

  return (
    <div>
      <Header />

      <main className="product-page">
        <section className="section-shell" style={{ marginTop: "1rem" }}>
          <div className="product-detail-grid">
            <div>
              <div style={{ position: "relative", aspectRatio: "4 / 3", borderRadius: "16px", overflow: "hidden", border: "1px solid var(--line)" }}>
                <Image src={product.images[activeImage]} alt={product.name} fill className="product-image" />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.5rem", marginTop: "0.6rem" }}>
                {product.images.map((image, index) => (
                  <button
                    type="button"
                    key={image}
                    onClick={() => setActiveImage(index)}
                    style={{
                      position: "relative",
                      borderRadius: "10px",
                      overflow: "hidden",
                      border: activeImage === index ? "2px solid var(--gold)" : "1px solid var(--line)",
                      aspectRatio: "4 / 3",
                      background: "transparent",
                    }}
                  >
                    <Image src={image} alt={`${product.name} image ${index + 1}`} fill className="product-image" />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="product-category">{product.category}</p>
              <h1 style={{ margin: 0 }}>{product.name}</h1>
              <p style={{ color: "var(--text-muted)" }}>{product.description}</p>

              <p className="product-pricing" style={{ margin: "0.8rem 0" }}>
                <span className="sale-price">{formatPrice(product.salePrice)}</span>
                <span className="base-price">{formatPrice(product.price)}</span>
              </p>

              <p style={{ margin: "0.25rem 0" }}>Rating: {product.rating.toFixed(1)} / 5</p>
              <p style={{ margin: "0.25rem 0" }}>Availability: {product.availability}</p>

              <button className="luxury-btn" onClick={() => addToCart(product)}>
                Add to Cart
              </button>

              <div style={{ marginTop: "1rem" }}>
                <h3>Ingredients</h3>
                <ul>
                  {product.ingredients.map((ingredient) => (
                    <li key={ingredient}>{ingredient}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3>Usage Instructions</h3>
                <p>{product.usage}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell muted">
          <div className="section-head">
            <h2>Ratings & Reviews</h2>
            <p>Verified buyer feedback for this product.</p>
          </div>
          <div className="testimonial-grid">
            {productReviews.length ? (
              productReviews.map((review) => (
                <article key={review.id} className="testimonial-card">
                  <div className="stars">{"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}</div>
                  <p>{review.comment}</p>
                  <h4>{review.user}</h4>
                </article>
              ))
            ) : (
              <article className="testimonial-card">
                <p>No reviews yet for this product. Be the first customer to review it.</p>
              </article>
            )}
          </div>
        </section>

        <ProductShelf
          title="Related Products"
          subtitle="You may also like these products from the same category"
          products={related}
        />
      </main>

      <Footer />
    </div>
  );
}
