"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaWhatsapp, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-linear-to-r from-black via-gray-900 to-black py-10 text-white">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between items-center gap-6">

        {/* Logo with white border */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.jpeg"
            alt="Footer Logo"
            width={80}
            height={40}
            className="rounded-full border-2 border-white p-1"
          />
        </Link>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm font-medium">
          <Link href="/" className="text-white hover:text-yellow-500 transition">Home</Link>
          <Link href="/fashion" className="text-white hover:text-yellow-500 transition">Fashion</Link>
          <Link href="/electronic" className="text-white hover:text-yellow-500 transition">Electronics</Link>
          <Link href="/jewellery" className="text-white hover:text-yellow-500 transition">Jewellery</Link>
        </div>

        {/* Social Icons with white color and hover effect */}
        <div className="flex gap-5 text-2xl">
          <Link href="https://instagram.com/yourprofile" target="_blank" className="text-white hover:text-yellow-500 transition transform hover:scale-110">
            <FaInstagram />
          </Link>
          <Link href="https://wa.me/923000000000" target="_blank" className="text-white hover:text-yellow-500 transition transform hover:scale-110">
            <FaWhatsapp />
          </Link>
          <Link href="https://facebook.com/yourprofile" target="_blank" className="text-white hover:text-yellow-500 transition transform hover:scale-110">
            <FaFacebookF />
          </Link>
          <Link href="https://twitter.com/yourprofile" target="_blank" className="text-white hover:text-yellow-500 transition transform hover:scale-110">
            <FaTwitter />
          </Link>
        </div>

      </div>

      {/* Copyright */}
      <p className="text-sm text-gray-400 text-center mt-6">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
}
