'use client';

import CollectionPage from '@/components/CollectionPage';
import { products } from '@/data/catalog';

export default function JewelleryPage() {
  return (
    <CollectionPage
      title="All Products"
      subtitle="Browse the full Mecca Cosmetic collection — fragrances, skincare, and more."
      image="/images/data/sliders/s3.jpeg"
      products={products}
    />
  );
}
