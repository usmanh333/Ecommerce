'use client';

import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BannerSlider from '@/components/BannerSlider';
import { useCart } from '@/context/CartContext';

export default function Home() {
  const { addToCart } = useCart();

  const products = [
    {
      name: 'Man T-shirt',
      price: '$30',
      image: '/images/tshirt-img.png',
      priceLabel: 'Price',
    },
    {
      name: 'Man Shirt',
      price: '$30',
      image: '/images/dress-shirt-img.png',
      priceLabel: 'Price',
    },
    {
      name: 'Woman Scarf',
      price: '$30',
      image: '/images/women-clothes-img.png',
      priceLabel: 'Price',
    },
    {
      name: 'Laptop',
      price: '$100',
      image: '/images/laptop-img.png',
      priceLabel: 'Start Price',
    },
    {
      name: 'Mobile',
      price: '$100',
      image: '/images/mobile-img.png',
      priceLabel: 'Start Price',
    },
    {
      name: 'Computer',
      price: '$100',
      image: '/images/computer-img.png',
      priceLabel: 'Start Price',
    },
    {
      name: 'Jhumkas',
      price: '$100',
      image: '/images/jhumka-img.png',
      priceLabel: 'Start Price',
    },
    {
      name: 'Necklace',
      price: '$100',
      image: '/images/neklesh-img.png',
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
        {products.map((product, index) => (
          <div
            key={index}
            className="border rounded-lg shadow hover:shadow-lg transition flex flex-col items-center p-4"
          >
            {/* IMAGE CENTER */}
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
