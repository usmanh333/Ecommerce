import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BannerSlider from '@/components/BannerSlider';
import ProductSection from '@/components/ProductSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jewellery - Mecca',
  description: 'Jewellery Accessories',
};

const jewelleryProducts = [
  { name: 'Jumkas', price: '$ 100', image: '/images/jhumka-img.png', priceLabel: 'Start Price' },
  { name: 'Necklaces', price: '$ 100', image: '/images/neklesh-img.png', priceLabel: 'Start Price' },
  { name: 'Kangans', price: '$ 100', image: '/images/kangan-img.png', priceLabel: 'Start Price' },
];

export default function JewelleryPage() {
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
          title="Jewellery Accessories"
          products={jewelleryProducts}
          sliderId="jewellery_main_slider"
          imageClass="jewellery_img"
          showLoader={true}
          sectionClass="jewellery_section"
        />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
