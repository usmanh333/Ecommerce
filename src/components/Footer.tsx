"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-500 py-6 padding top-10">
      <div className="container mx-auto flex flex-col items-center gap-3">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo.jpeg"
            alt="Footer Logo"
            width={80}
            height={40}
            className="rounded-full"
          />
        </Link>

        {/* Social Icons */}
        <div className="flex gap-5 text-xl">

          <Link href="https://instagram.com/yourprofile" target="_blank">
            <FaInstagram className="hover:scale-110 transition" />
          </Link>

          <Link href="https://wa.me/923000000000" target="_blank">
            <FaWhatsapp className="hover:scale-110 transition" />
          </Link>

        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-900 text-center">
          © {new Date().getFullYear()} Daeson Technologies. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
