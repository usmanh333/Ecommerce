'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BannerSlider from "@/components/BannerSlider";
import { useCart } from '@/context/CartContext';
import Image from "next/image";

export default function ElectronicPage() {
   const { addToCart } = useCart();

  const electronicProducts = [
    {
      name: "Laptop",
      price: "$100",
      image: "/images/images6.jpeg",
      priceLabel: "Start Price",
    },
    {
      name: "Mobile",
      price: "$100",
      image: "/images/images5.jpeg",
      priceLabel: "Start Price",
    },
    {
      name: "Computers",
      price: "$100",
      image: "/images/images4.jpeg",
      priceLabel: "Start Price",
    },
     {
      name: "Computers",
      price: "$100",
      image: "/images/images4.jpeg",
      priceLabel: "Start Price",
    },
  ];

   return (
    <div className="min-h-screen flex flex-col">
          
          {/* Header + Banner */}
          <div className="banner_bg_main">
            <Header />
            <BannerSlider />
          </div>
    <div className="min-h-screen flex flex-col">
      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {electronicProducts.map((product, index) => (
          <div
            key={index}
            className="border rounded-lg shadow hover:shadow-lg transition flex flex-col items-center p-4"
          >
            {/* IMAGE CENTERED */}
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

      {/* FOOTER */}
      <Footer />
    </div>
    </div>
  );
}