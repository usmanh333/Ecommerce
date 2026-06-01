'use client';

import Link from 'next/link';

type BannerSliderProps = {
  title?: string;
  subtitle?: string;
  image?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export default function BannerSlider({
  title = 'Luxury Beauty, Delivered',
  subtitle = 'Shop curated fragrances, fairness care, and premium skincare rituals.',
  image = '/images/VzUqgr8pfbNcfXrpzeVBPE.jpg',
  ctaLabel = 'Explore Products',
  ctaHref = '/fashion',
}: BannerSliderProps) {
  return (
    <section className="inner-hero" style={{ backgroundImage: `linear-gradient(110deg, rgba(16, 11, 10, 0.72), rgba(16, 11, 10, 0.26)), url(${image})` }}>
      <div className="inner-hero-content">
        <p>Luxury Collection</p>
        <h1>{title}</h1>
        <span>{subtitle}</span>
        <Link href={ctaHref}>{ctaLabel}</Link>
      </div>
    </section>
  );
}
