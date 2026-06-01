'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BrandHero from '@/components/BrandHero';
import ProductShelf from '@/components/ProductShelf';
import CategoryShowcase from '@/components/CategoryShowcase';
import Testimonials from '@/components/Testimonials';
import PromoBanners from '@/components/PromoBanners';
import FaqAccordion from '@/components/FaqAccordion';
import Newsletter from '@/components/Newsletter';
import { useMemo, useState } from 'react';
import {
  bestSellers,
  brandStats,
  categories,
  faqs,
  featuredProducts,
  productCategories,
  products,
  promoBanners,
  testimonials,
} from '@/data/catalog';

export default function Home() {
  const [categoryFilter, setCategoryFilter] = useState('All');

  const filteredProducts = useMemo(() => {
    if (categoryFilter === 'All') return featuredProducts;
    return featuredProducts.filter((product) => product.category === categoryFilter);
  }, [categoryFilter]);

  return (
    <div>
      <Header />

      <BrandHero banners={promoBanners} />

      <section className="section-shell">
        <div className="section-head">
          <h2>Luxury Beauty Destination</h2>
          <p>
            Discover premium perfumes, oud fragrances, fairness care, and skincare essentials with an elegant shopping
            experience.
          </p>
        </div>

        <div className="stats-grid">
          {brandStats.map((stat) => (
            <article key={stat.label} className="stat-card">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="section-head">
          <h2>Featured Perfumes & Cosmetics</h2>
          <p>Filter highlighted products by category to quickly find your ideal beauty picks.</p>
        </div>

        <div className="filter-row">
          <select value={categoryFilter} onChange={(event) => setCategoryFilter(event.target.value)}>
            <option value="All">All Categories</option>
            {productCategories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </section>

      <ProductShelf
        title="Featured Collection"
        subtitle="Top luxury picks with premium quality and trusted customer love"
        products={filteredProducts}
      />

      <ProductShelf
        title="Skincare & Creams"
        subtitle="Brightening, nourishing skincare products for a radiant daily glow"
        products={products.filter((item) => item.category === 'Skincare')}
      />

      <ProductShelf
        title="Best Sellers"
        subtitle="Most purchased fragrances and cosmetic sets this week"
        products={bestSellers}
      />

      <CategoryShowcase categories={categories} />
      <PromoBanners banners={promoBanners} />
      <Testimonials items={testimonials} />
      <FaqAccordion items={faqs} />
      <Newsletter />
      <Footer />
    </div>
  );
}
