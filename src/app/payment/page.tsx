"use client";

import Image from "next/image";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BannerSlider from '@/components/BannerSlider';
export default function PaymentPage() {
  return (
    <>
      <Header />
 <BannerSlider />
      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <div className="relative h-64 w-full">
          <Image
            src="/banners/perfume-payment-banner.jpg"
            alt="Checkout"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-white text-4xl font-bold">Secure Checkout</h1>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-6 py-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Payment Details
            </h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Cardholder Name"
                className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="text"
                placeholder="Card Number"
                className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
                <input
                  type="password"
                  placeholder="CVV"
                  className="border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-full text-lg hover:bg-gray-800 transition"
              >
                Pay Now
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
