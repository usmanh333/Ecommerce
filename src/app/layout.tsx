import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import "./globals.css";
import { CartProvider } from '@/context/CartContext';
import CartToast from '@/components/CartToast';
import StickyCartButton from '@/components/StickyCartButton';

const cormorant = Cormorant_Garamond({
  weight: ['500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-cormorant',
});

const manrope = Manrope({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: 'Mecca Cosmetic | Premium Perfumes, Skincare & Cosmetics',
  description:
    'Shop luxury perfumes, oud fragrances, fairness creams, skincare essentials, and beauty bundles from Mecca Cosmetic.',
  openGraph: {
    title: 'Mecca Cosmetic',
    description: 'Premium fragrance and beauty ecommerce experience.',
    images: ['/images/VzUqgr8pfbNcfXrpzeVBPE.jpg'],
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${manrope.variable}`}>
        <CartProvider>
          {children}
          <StickyCartButton />
          <CartToast />
        </CartProvider>
      </body>
    </html>
  );
}
