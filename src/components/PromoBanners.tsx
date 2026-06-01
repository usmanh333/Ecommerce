import Link from "next/link";
import { PromoBanner } from "@/types/catalog";

type PromoBannersProps = {
  banners: PromoBanner[];
};

export default function PromoBanners({ banners }: PromoBannersProps) {
  return (
    <section className="section-shell">
      <div className="promo-grid">
        {banners.map((banner) => (
          <article
            key={banner.id}
            className="promo-card"
            style={{ backgroundImage: `linear-gradient(90deg, rgba(17, 12, 10, 0.78), rgba(17, 12, 10, 0.22)), url(${banner.image})` }}
          >
            <h3>{banner.title}</h3>
            <p>{banner.subtitle}</p>
            <Link href={banner.ctaHref}>{banner.ctaLabel}</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
