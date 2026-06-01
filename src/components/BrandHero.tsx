"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { PromoBanner } from "@/types/catalog";

type BrandHeroProps = {
  banners: PromoBanner[];
};

export default function BrandHero({ banners }: BrandHeroProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const safeBanners = useMemo(() => banners.slice(0, 3), [banners]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % safeBanners.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [safeBanners.length]);

  return (
    <section className="hero-shell">
      {safeBanners.map((banner, index) => (
        <div
          key={banner.id}
          className={`hero-slide ${index === activeIndex ? "active" : ""}`}
          style={{ backgroundImage: `linear-gradient(112deg, rgba(14, 12, 11, 0.76), rgba(14, 12, 11, 0.2)), url(${banner.image})` }}
        >
          <div className="hero-content">
            <p className="hero-kicker">Luxury Perfume & Beauty</p>
            <h1>{banner.title}</h1>
            <p>{banner.subtitle}</p>
            <div className="hero-actions">
              <Link href={banner.ctaHref} className="luxury-btn">
                {banner.ctaLabel}
              </Link>
              <Link href="/jewellery" className="luxury-btn ghost">
                View Best Sellers
              </Link>
            </div>
          </div>
        </div>
      ))}
      <div className="hero-dots" role="tablist" aria-label="Hero slides">
        {safeBanners.map((banner, index) => (
          <button
            key={banner.id}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            className={index === activeIndex ? "active" : ""}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}
