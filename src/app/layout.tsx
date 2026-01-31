'use client'; // layout is a client component to use useState

import { useEffect, useState } from "react";
import { Poppins, Great_Vibes } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { CartProvider } from '@/context/CartContext';

/* ---------------- FONTS ---------------- */
const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const greatVibes = Great_Vibes({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-great-vibes",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [cartCount, setCartCount] = useState(0);

  // Listen for global add-to-cart events
  useEffect(() => {
    const handler = () => setCartCount((prev) => prev + 1);
    window.addEventListener("add-to-cart", handler);
    return () => window.removeEventListener("add-to-cart", handler);
  }, []);

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css"
        />
      </head>

      <body className={`${poppins.variable} ${greatVibes.variable}`}>
        {/* ---------------- CART PROVIDER ---------------- */}
        <CartProvider>
          {/* Optional Top Cart Bar (commented out, can enable) */}
          {/*
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "15px 25px",
              borderBottom: "1px solid #eee",
            }}
          >
            <div style={{ position: "relative", fontSize: "26px" }}>
              <i className="fa fa-shopping-cart"></i>
              {cartCount > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-8px",
                    right: "-10px",
                    background: "red",
                    color: "white",
                    borderRadius: "50%",
                    width: "20px",
                    height: "20px",
                    fontSize: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                  }}
                >
                  {cartCount}
                </span>
              )}
            </div>
          </div>
          */}
          
          {children}
        </CartProvider>

        {/* ---------------- SCRIPTS ---------------- */}
        <Script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
