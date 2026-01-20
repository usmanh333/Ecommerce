"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import BannerSlider from "@/components/BannerSlider";

/* ================= TYPES (REQUIRED FOR TS) ================= */

type ProductItem = {
  id: number;
  title: string;
  description: string;
  image: string;
};

// 3 product items with local images
const productBoxes: ProductItem[] = [
  {
    id: 1,
    title: "Velvet Oud",
    description: "Luxurious oud fragrance with deep and warm notes.",
    image: "/images/images (5).jpeg",
  },
  {
    id: 2,
    title: "Rose Whisper",
    description: "Soft floral aroma with delicate, elegant undertones.",
    image: "/images/images (6).jpeg",
  },
  {
    id: 3,
    title: "Fresh Breeze Deodorant",
    description: "Long-lasting freshness with a light, invigorating scent.",
    image: "/images/VzUqgr8pfbNcfXrpzeVBPE.jpg",
  },
];

export default function CartPage() {
  const [items, setItems] = useState<ProductItem[]>(productBoxes);

  const handleDelete = (id: number): void => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className="banner_bg_main">
        <Header />
        <BannerSlider />
      </div>

      <div className="banner_bg_main relative w-full h-64 py-50">
        <Image
          src="/images/ChatGPT Image Jan 18, 2026, 10_18_13 PM.png"
          alt="Cart Banner"
          fill
          className="object-cover"
        />
      </div>

      {/* Main container */}
      <div className="min-h-[calc(100vh-64px-64px)] flex flex-col justify-center items-center px-6 py-10 w-full">
        <div className="flex flex-col gap-8 w-full max-w-4xl">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center bg-white text-black rounded-xl shadow-2xl overflow-hidden h-40 w-full"
            >
              {/* Image */}
              <div className="w-40 h-full shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={160}
                  height={160}
                  className="object-cover h-full w-full"
                />
              </div>

              {/* Details */}
              <div className="flex flex-col justify-center px-6 flex-1">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-gray-700 mt-1">{item.description}</p>
              </div>

              {/* Actions */}
              <div className="flex flex-col justify-center px-6 gap-3">
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-red-600 hover:text-red-800 text-2xl"
                  title="Delete"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pay Now Button */}
        <div className="flex justify-center mt-12 w-full">
          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 text-black px-12 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transition-shadow duration-300 shadow-lg hover:shadow-xl"
          >
            Pay Now
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}
