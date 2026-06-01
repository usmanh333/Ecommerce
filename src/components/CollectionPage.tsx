"use client";

import { useMemo, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BannerSlider from "@/components/BannerSlider";
import ProductShelf from "@/components/ProductShelf";
import { Product } from "@/types/catalog";

type CollectionPageProps = {
  title: string;
  subtitle: string;
  image: string;
  products: Product[];
};

export default function CollectionPage({ title, subtitle, image, products }: CollectionPageProps) {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    const base = term
      ? products.filter(
          (item) =>
            item.name.toLowerCase().includes(term) || item.tags.some((tag) => tag.toLowerCase().includes(term)),
        )
      : products;

    if (sortBy === "price") {
      return [...base].sort((a, b) => a.salePrice - b.salePrice);
    }
    if (sortBy === "rating") {
      return [...base].sort((a, b) => b.rating - a.rating);
    }
    return [...base].sort((a, b) => Number(b.featured) - Number(a.featured));
  }, [products, search, sortBy]);

  return (
    <div>
      <Header />
      <BannerSlider title={title} subtitle={subtitle} image={image} ctaLabel="Shop Best Sellers" ctaHref="/jewellery" />

      <section className="section-shell">
        <div className="filter-row">
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search by name or tags"
            aria-label="Search products"
          />
          <select value={sortBy} onChange={(event) => setSortBy(event.target.value)} aria-label="Sort products">
            <option value="featured">Featured First</option>
            <option value="rating">Top Rated</option>
            <option value="price">Price: Low to High</option>
          </select>
        </div>
      </section>

      <ProductShelf title={title} subtitle={subtitle} products={filtered} />
      <Footer />
    </div>
  );
}
