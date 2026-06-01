'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BannerSlider from '@/components/BannerSlider';
import { buildWhatsAppMessage, formatPrice, getWhatsAppCheckoutLink } from '@/lib/shop';

const WHATSAPP_PHONE = '9234576235';

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, subtotal } = useCart();
  const [customerName, setCustomerName] = useState('');

  const checkoutUrl = useMemo(() => {
    if (!cartItems.length) return '#';
    const lineItems = cartItems.map((item) => ({
      name: item.product.name,
      quantity: item.quantity,
      lineTotal: item.product.salePrice * item.quantity,
    }));

    const message = buildWhatsAppMessage(customerName, lineItems, subtotal);
    return getWhatsAppCheckoutLink(WHATSAPP_PHONE, message);
  }, [cartItems, customerName, subtotal]);

  return (
    <div>
      <Header />
      <BannerSlider
        title="Your Luxury Cart"
        subtitle="Review selected perfumes and beauty products before sending your order on WhatsApp."
        image="/images/images5.jpeg"
        ctaLabel="Continue Shopping"
        ctaHref="/"
      />

      <main className="cart-page">
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty</h2>
            <p>Add premium perfumes or skincare products to start your order.</p>
            <Link href="/fashion" className="luxury-btn" style={{ marginTop: '1rem' }}>
              Explore Products
            </Link>
          </div>
        ) : (
          <section style={{ display: 'grid', gap: '1rem' }}>
            {cartItems.map((item) => (
              <article key={item.product.id} className="cart-item">
                <div className="cart-item-image">
                  <Image src={item.product.images[0]} alt={item.product.name} fill className="product-image" />
                </div>
                <div>
                  <h3 style={{ margin: 0 }}>{item.product.name}</h3>
                  <p style={{ margin: '0.2rem 0', color: 'var(--text-muted)' }}>{item.product.category}</p>
                  <p className="sale-price">{formatPrice(item.product.salePrice)}</p>

                  <div className="cart-item-footer">
                    <div className="cart-controls">
                      <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} aria-label="Decrease quantity">
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} aria-label="Increase quantity">
                        +
                      </button>
                    </div>
                    <button onClick={() => removeFromCart(item.product.id)} style={{ color: '#8d3f31', background: 'transparent', border: 0 }}>
                      Remove
                    </button>
                  </div>
                </div>
              </article>
            ))}

            <section className="cart-summary">
              <h3 style={{ marginTop: 0 }}>Order Summary</h3>
              <p>Total: <strong>{formatPrice(subtotal)}</strong></p>

              <input
                type="text"
                placeholder="Enter your name"
                value={customerName}
                onChange={(event) => setCustomerName(event.target.value)}
                style={{ width: '100%', marginBottom: '0.7rem', border: '1px solid var(--line)', borderRadius: '10px', padding: '0.65rem' }}
              />

              <a href={checkoutUrl} target="_blank" rel="noreferrer" className="luxury-btn" style={{ width: '100%' }}>
                Checkout on WhatsApp
              </a>

              <Link href="/payment" className="luxury-btn ghost" style={{ width: '100%', marginTop: '0.65rem' }}>
                Continue to Payment Page
              </Link>
            </section>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
