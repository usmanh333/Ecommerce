export type ProductCategory =
  | "Perfumes"
  | "Oud & Fragrances"
  | "Fairness Creams"
  | "Skincare"
  | "Beauty"
  | "Cosmetic Bundles";

export type Product = {
  id: number;
  name: string;
  slug: string;
  category: ProductCategory;
  price: number;
  salePrice: number;
  rating: number;
  featured: boolean;
  availability: "In Stock" | "Limited" | "Out of Stock";
  images: string[];
  description: string;
  ingredients: string[];
  usage: string;
  tags: string[];
};

export type Category = {
  id: number;
  name: ProductCategory;
  slug: string;
  description: string;
  coverImage: string;
};

export type Testimonial = {
  id: number;
  name: string;
  city: string;
  rating: number;
  quote: string;
};

export type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

export type PromoBanner = {
  id: number;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
};

export type Collection = {
  id: number;
  title: string;
  subtitle: string;
  productSlugs: string[];
};

export type Review = {
  id: number;
  productSlug: string;
  user: string;
  rating: number;
  comment: string;
};
