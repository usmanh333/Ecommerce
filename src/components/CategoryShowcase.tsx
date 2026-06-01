import Link from "next/link";
import Image from "next/image";
import { Category } from "@/types/catalog";

type CategoryShowcaseProps = {
  categories: Category[];
};

export default function CategoryShowcase({ categories }: CategoryShowcaseProps) {
  return (
    <section className="section-shell">
      <div className="section-head">
        <h2>Shop by Collection</h2>
        <p>Explore premium perfume, skincare, and cosmetic edits tailored for modern beauty routines.</p>
      </div>
      <div className="category-grid">
        {categories.map((category) => (
          <Link key={category.id} href={`/${category.slug}`} className="category-card">
            <div className="category-image-wrap">
              <Image src={category.coverImage} alt={category.name} fill className="category-image" />
            </div>
            <div className="category-body">
              <h3>{category.name}</h3>
              <p>{category.description}</p>
              <span>Explore collection</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
