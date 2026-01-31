'use client'; 

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { FiShoppingCart } from "react-icons/fi";

// Example products for search
const products = [
  'iPhone 14',
  'Samsung Galaxy S23',
  'MacBook Pro',
  'Nike Sneakers',
  'Gold Necklace',
  'Leather Jacket',
  'AirPods Pro',
  'Laptop Bag'
];

export default function Header() {
  const [sidenavOpen, setSidenavOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { cartCount } = useCart(); // ✅ from CartContext

  const openNav = () => setSidenavOpen(true);
  const closeNav = () => setSidenavOpen(false);

  // Exact match for search
  const exactMatch =
    products.find(
      (product) =>
        product.toLowerCase() === searchTerm.trim().toLowerCase()
    ) || null;

  return (
    <>
      {/* ================= TOP MENU / MARKETING LINE ================= */}
      <div className="container">
        <div className="header_section_top block py-2">
          <div className="row">
            <div className="col-sm-12 text-center">
              <p className="text-white font-semibold text-sm animate-pulse">
                Trusted Quality • Fast Delivery • Best Prices in Pakistan
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= LOGO ================= */}
      <div className="logo_section py-6">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <Link href="/">
                <Image
                  src="/images/logo.jpeg"
                  alt="Logo"
                  width={120}
                  height={50}
                  className="rounded-full mx-auto"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MAIN HEADER ================= */}
      <div className="header_section">
        <div className="container">
          <div className="containt_main flex items-center gap-4">

            {/* -------- MOBILE SIDE NAV ONLY -------- */}
            <div
              id="mySidenav"
              className="sidenav md:hidden"
              style={{ width: sidenavOpen ? '250px' : '0' }}
            >
              <a className="closebtn" onClick={closeNav}>
                &times;
              </a>
              <Link href="/" onClick={closeNav}>Home</Link>
              <Link href="/fashion" onClick={closeNav}>Fashion</Link>
              <Link href="/electronic" onClick={closeNav}>Electronic</Link>
              <Link href="/jewellery" onClick={closeNav}>Jewellery</Link>
            </div>

            {/* MOBILE HAMBURGER */}
            <span
              className="toggle_icon cursor-pointer md:hidden"
              onClick={openNav}
            >
              <Image src="/images/toggle-icon.png" alt="Menu" width={30} height={30} />
            </span>

            {/* DESKTOP BUTTONS + SEARCH BAR */}
            <div className="containt_main flex flex-col items-center gap-4 w-full">
              {/* -------- DESKTOP PAGE BUTTONS -------- */}
              <div className="hidden md:flex justify-center gap-4 w-full mb-2">
                <Link
                  href="/"
                  className="px-5 py-2 rounded-lg bg-black! text-white! font-semibold shadow-md hover:bg-yellow-600! hover:scale-105 transition transform duration-300 block text-center"
                >
                  Home
                </Link>
                <Link
                  href="/fashion"
                  className="px-5 py-2 rounded-lg bg-black! text-white! font-semibold shadow-md hover:bg-yellow-600! hover:scale-105 transition transform duration-300 block text-center"
                >
                  Fashion
                </Link>
                <Link
                  href="/electronic"
                  className="px-5 py-2 rounded-lg bg-black! text-white! font-semibold shadow-md hover:bg-yellow-600! hover:scale-105 transition transform duration-300 block text-center"
                >
                  Electronic
                </Link>
                <Link
                  href="/jewellery"
                  className="px-5 py-2 rounded-lg bg-black! text-white! font-semibold shadow-md hover:bg-yellow-600! hover:scale-105 transition transform duration-300 block text-center"
                >
                  Jewellery
                </Link>
              </div>
              {/* -------- SEARCH + CART ROW -------- */}
              <div className="w-full flex flex-col md:flex-row items-center gap-3">

                {/* SEARCH BAR */}
                <div className="input-group w-full relative">
                  <input
                    type="text"
                    className="form-control border rounded-md w-full px-3 py-2"
                    placeholder="Search products"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <div className="input-group-append absolute right-2 top-1/2 -translate-y-1/2">
                    <button
                      className="btn btn-secondary px-3 py-1 bg-orange-500 border-orange-500 text-white rounded-md"
                      type="button"
                    >
                      <i className="fa fa-search"></i>
                    </button>
                  </div>
                </div>

                {/* CART ICON */}
              <Link
  href="/cart"
  className="relative flex items-center gap-2 text-black whitespace-nowrap"
>
  <FiShoppingCart className="text-2xl text-white" /> {/* force white color */}
  <span>Cart</span>

  {cartCount > 0 && (
    <span className="absolute -top-2 -right-3 bg-red-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center font-bold">
      {cartCount}
    </span>
  )}
</Link>

              </div>

              {/* -------- SEARCH RESULT (EXACT MATCH ONLY) -------- */}
              {exactMatch && (
                <div className="w-full text-center mt-2">
                  <p className="font-semibold text-green-600">
                    Product Found: {exactMatch}
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
