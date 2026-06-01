'use client';

import CollectionPage from '@/components/CollectionPage';
import { products } from '@/data/catalog';

export default function ElectronicPage() {
  return (
    <CollectionPage
      title="Skincare & Creams"
      subtitle="Elevate your daily skincare routine with brightening and nourishing formulas."
      image="/images/data/sliders/s2.jpeg"
      products={products.filter((item) => item.category === 'Skincare')}
    />
  );
}