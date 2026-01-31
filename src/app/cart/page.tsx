'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BannerSlider from '@/components/BannerSlider';

export default function CartPage() {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header + Banner */}
      <div className="banner_bg_main">
        <Header />
        <BannerSlider />
      </div>

      {/* CART CONTENT */}
      <div className="grow p-6 max-w-4xl mx-auto w-full">
        {cartItems.length === 0 ? (
          /* EMPTY CART */
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold mb-4">
              You have nothing in your cart
            </h2>

            <Link
              href="/fashion"
              className="px-5 py-2 rounded-lg bg-black! text-white! font-semibold shadow-md hover:bg-yellow-600! hover:scale-105 transition transform duration-300 block text-center"
            >
              Go to Shopping
            </Link>
            
          </div>
        ) : (
          /* CART ITEMS */
          <>
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 border p-4 rounded mb-4 shadow-sm"
              >
                {/* IMAGE CENTER */}
                <div className="relative w-32 h-32 shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-gray-600">
                    {item.priceLabel}: {item.price}
                  </p>

                  <button
                    onClick={() => removeFromCart(item.name)}
                    className="text-red-600 mt-2 flex items-center gap-1 hover:underline"
                  >
                    <i className="fa fa-trash" />
                    Remove
                  </button>
                </div>
              </div>
            ))}

            {/* PAY NOW */}
           <a
  href="https://wa.me/923001234567"
  target="_blank"
  rel="noopener noreferrer"
  className="px-5 py-2 rounded-lg bg-black! text-white! font-semibold shadow-md hover:bg-yellow-600! hover:scale-105 transition transform duration-300 block text-center
  "
>
  Pay Now on WhatsApp
</a>

          </>
        )}
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
