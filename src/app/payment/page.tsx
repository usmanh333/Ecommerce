"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BannerSlider from '@/components/BannerSlider';
import Link from 'next/link';
export default function PaymentPage() {
  return (
    <div>
      <Header />
      <BannerSlider
        title="Secure Checkout"
        subtitle="Complete your order details and confirm instantly through WhatsApp checkout."
        image="/images/VzUqgr8pfbNcfXrpzeVBPE.jpg"
        ctaLabel="Return to Cart"
        ctaHref="/cart"
      />

      <main className="section-shell">
        <div className="cart-summary" style={{ maxWidth: 680, margin: '0 auto' }}>
          <h2 style={{ marginTop: 0 }}>Checkout Information</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            This frontend-only store confirms purchases through WhatsApp. Review your selected products in cart and send
            your order details securely.
          </p>

          <ul>
            <li>Add products to cart.</li>
            <li>Set product quantities and customer name.</li>
            <li>Tap Checkout on WhatsApp to send a fully formatted order summary.</li>
          </ul>

          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            <Link href="/cart" className="luxury-btn">
              Go to Cart Checkout
            </Link>
            <a href="https://wa.me/923234576235" target="_blank" rel="noreferrer" className="luxury-btn ghost">
              Contact on WhatsApp
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
