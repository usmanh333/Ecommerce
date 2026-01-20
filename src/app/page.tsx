// pages/index.js
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BannerSlider from '@/components/BannerSlider';
import ProductSection from '@/components/ProductSection';

const fashionProducts = [
  { name: 'Man T-shirt', price: '$30', image: '/images/tshirt-img.png', priceLabel: 'Price' },
  { name: 'Man Shirt', price: '$30', image: '/images/dress-shirt-img.png', priceLabel: 'Price' },
  { name: 'Woman Scarf', price: '$30', image: '/images/women-clothes-img.png', priceLabel: 'Price' },
];

const electronicProducts = [
  { name: 'Laptop', price: '$100', image: '/images/laptop-img.png', priceLabel: 'Start Price' },
  { name: 'Mobile', price: '$100', image: '/images/mobile-img.png', priceLabel: 'Start Price' },
  { name: 'Computers', price: '$100', image: '/images/computer-img.png', priceLabel: 'Start Price' },
];

const jewelleryProducts = [
  { name: 'Jumkas', price: '$100', image: '/images/jhumka-img.png', priceLabel: 'Start Price' },
  { name: 'Necklaces', price: '$100', image: '/images/neklesh-img.png', priceLabel: 'Start Price' },
  { name: 'Kangans', price: '$100', image: '/images/kangan-img.png', priceLabel: 'Start Price' },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Banner Section */}
      <div className="banner_bg_main">
        <Header />
        <BannerSlider />
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        <ProductSection
          title="Man & Woman Fashion"
          products={fashionProducts}
          sliderId="main_slider"
          imageClass="tshirt_img"
        />

        <ProductSection
          title="Electronic"
          products={electronicProducts}
          sliderId="electronic_main_slider"
          imageClass="electronic_img"
        />

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
