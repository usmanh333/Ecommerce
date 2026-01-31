'use client';

import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BannerSlider from '@/components/BannerSlider';
import { useCart } from '@/context/CartContext';

export default function FashionPage() {
  const { addToCart } = useCart();

  const fashionProducts = [
    {
      name: 'Jhumkas',
      price: '$100',
      image: '/images/jhumka-img.png',
      priceLabel: 'Start Price',
    },
    {
      name: 'Necklaces',
      price: '$100',
      image: '/images/neklesh-img.png',
      priceLabel: 'Start Price',
    },
    {
      name: 'Kangans',
      price: '$100',
      image: '/images/kangan-img.png',
      priceLabel: 'Start Price',
    },
    {
      name: 'Fashion Bracelet',
      price: '$100',
      image: '/images/kangan-img.png',
      priceLabel: 'Start Price',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header + Banner */}
      <div className="banner_bg_main">
        <Header />
        <BannerSlider />
      </div>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {fashionProducts.map((product, index) => (
          <div
            key={index}
            className="border rounded-lg shadow hover:shadow-lg transition flex flex-col items-center p-4"
          >
            {/* CENTERED IMAGE */}
            <div className="relative w-40 h-40 mb-4">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain"
              />
            </div>

            <h2 className="font-semibold text-lg text-center">
              {product.name}
            </h2>

            <p className="text-gray-600 text-center mt-1">
              {product.priceLabel}: {product.price}
            </p>

            <button
              onClick={() => addToCart(product)}
              className="mt-4 bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition w-full"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
