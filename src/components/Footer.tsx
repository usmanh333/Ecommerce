"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaWhatsapp, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            <Image src="/images/logo.jpeg" alt="Mecca Cosmetic" width={56} height={56} />
            <div>
              <strong>Mecca Cosmetic</strong>
              <p>Premium perfumes, skincare, and beauty essentials curated for modern elegance.</p>
            </div>
          </Link>
        </div>

        <div>
          <h4>Collections</h4>
          <nav>
            <Link href="/fashion">Perfumes</Link>
            <Link href="/electronic">Skincare</Link>
            <Link href="/jewellery">Beauty</Link>
            <Link href="/cart">Cart</Link>
          </nav>
        </div>

        <div>
          <h4>Customer Care</h4>
          <nav>
            <a href="#faq">FAQs</a>
            <Link href="/payment">Checkout</Link>
            <a href="https://wa.me/9234576235" target="_blank" rel="noreferrer">
              WhatsApp Orders
            </a>
          </nav>
        </div>

        <div>
          <h4>Connect</h4>
          <div className="socials">
            <Link href="https://instagram.com/yourprofile" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </Link>
            <Link href="https://wa.me/9234576235" target="_blank" aria-label="WhatsApp">
              <FaWhatsapp />
            </Link>
            <Link href="https://facebook.com/yourprofile" target="_blank" aria-label="Facebook">
              <FaFacebookF />
            </Link>
            <Link href="https://twitter.com/yourprofile" target="_blank" aria-label="Twitter">
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Mecca Cosmetic. Crafted for premium beauty shopping.</p>
      </div>
    </footer>
  );
}
