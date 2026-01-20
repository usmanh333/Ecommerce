import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BannerSlider from '@/components/BannerSlider';
import ProductSection from '@/components/ProductSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Electronic - Mecca',
  description: 'Electronic Products',
};

const electronicProducts = [
  { name: 'Laptop', price: '$ 100', image: '/images/laptop-img.png', priceLabel: 'Start Price' },
  { name: 'Mobile', price: '$ 100', image: '/images/mobile-img.png', priceLabel: 'Start Price' },
  { name: 'Computers', price: '$ 100', image: '/images/computer-img.png', priceLabel: 'Start Price' },
];

export default function ElectronicPage() {
  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Header + Banner */}
      <div className="banner_bg_main">
        <Header />
        <BannerSlider />
      </div>

      {/* Page Content */}
      <main className="grow">
        <ProductSection
          title="Electronic"
          products={electronicProducts}
          sliderId="electronic_main_slider"
          imageClass="electronic_img"
        />
      </main>

      {/* Footer (now independent) */}
      <Footer />

    </div>
  );
}
