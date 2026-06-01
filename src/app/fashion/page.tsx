'use client';

import CollectionPage from '@/components/CollectionPage';
import { products } from '@/data/catalog';

export default function FashionPage() {
  return (
    <CollectionPage
      title="Perfumes & Body Mists"
      subtitle="Shop refined Mecca fragrance mists with long-lasting premium scent notes."
      image="/images/data/sliders/s1.jpeg"
      products={products.filter((item) => item.category === 'Perfumes')}
    />
  );
}
