'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BannerSlider from '@/components/BannerSlider';
import { buildWhatsAppMessage, formatPrice, getWhatsAppCheckoutLink, CustomerDetails } from '@/lib/shop';

const WHATSAPP_PHONE = '923234576235';

const PAKISTAN_CITIES = [
  'Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Faisalabad',
  'Multan', 'Peshawar', 'Quetta', 'Sialkot', 'Gujranwala',
  'Hyderabad', 'Abbottabad', 'Bahawalpur', 'Sargodha', 'Sukkur',
  'Larkana', 'Mardan', 'Sheikhupura', 'Rahim Yar Khan', 'Gujrat',
  'Jhang', 'Dera Ghazi Khan', 'Mirpur Khas', 'Kasur', 'Okara',
  'Mingora', 'Nawabshah', 'Chiniot', 'Kamoke', 'Mandi Bahauddin',
  'Jhelum', 'Sadiqabad', 'Jacobabad', 'Shikarpur', 'Khanewal',
  'Hafizabad', 'Kohat', 'Muzaffargarh', 'Khanpur', 'Gojra',
  'Bahawalnagar', 'Muridke', 'Pakpattan', 'Ahmadpur East', 'Kot Addu',
];

const FIELD_LABELS: Record<string, string> = {
  name: 'Full Name',
  phone: 'Phone Number',
  city: 'City',
  area: 'Area / Neighbourhood',
  address: 'Street Address',
};

function validate(form: CustomerDetails): Record<string, string> {
  const errors: Record<string, string> = {};
  if (!form.name.trim()) errors.name = 'Full name is required.';
  if (!form.phone.trim()) {
    errors.phone = 'Phone number is required.';
  } else if (!/^(\+92|0)3\d{9}$/.test(form.phone.replace(/\s/g, ''))) {
    errors.phone = 'Enter a valid Pakistani number (e.g. 03001234567).';
  }
  if (!form.city) errors.city = 'Please select your city.';
  if (!form.area.trim()) errors.area = 'Area / neighbourhood is required.';
  if (!form.address.trim()) errors.address = 'Street address is required.';
  return errors;
}

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, subtotal } = useCart();

  const [form, setForm] = useState<CustomerDetails>({
    name: '', phone: '', city: '', area: '', address: '', landmark: '',
  });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  const errors = validate(form);
  const hasErrors = Object.keys(errors).length > 0;

  function handleChange(field: keyof CustomerDetails, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleBlur(field: string) {
    setTouched((prev) => ({ ...prev, [field]: true }));
  }

  function showError(field: string) {
    return (touched[field] || submitted) && errors[field];
  }

  const checkoutUrl = useMemo(() => {
    if (!cartItems.length) return '#';
    const lineItems = cartItems.map((item) => ({
      name: item.product.name,
      quantity: item.quantity,
      lineTotal: item.product.salePrice * item.quantity,
    }));
    const message = buildWhatsAppMessage(form, lineItems, subtotal);
    return getWhatsAppCheckoutLink(WHATSAPP_PHONE, message);
  }, [cartItems, form, subtotal]);

  function handleCheckout(e: React.MouseEvent<HTMLAnchorElement>) {
    setSubmitted(true);
    if (hasErrors) {
      e.preventDefault();
    }
  }

  const inputStyle = (field: string): React.CSSProperties => ({
    width: '100%',
    border: `1px solid ${showError(field) ? '#c0392b' : 'var(--line)'}`,
    borderRadius: '10px',
    padding: '0.65rem 0.8rem',
    fontSize: '0.95rem',
    outline: 'none',
    background: 'var(--surface, #fff)',
    color: 'var(--text)',
    boxSizing: 'border-box',
  });

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
                      <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} aria-label="Decrease quantity">-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} aria-label="Increase quantity">+</button>
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

              <h4 style={{ margin: '1.2rem 0 0.8rem', color: 'var(--accent, #8d6a3f)' }}>Delivery Details</h4>

              {/* Full Name */}
              <div style={{ marginBottom: '0.9rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.3rem' }}>
                  Full Name <span style={{ color: '#c0392b' }}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ayesha Khan"
                  value={form.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  onBlur={() => handleBlur('name')}
                  style={inputStyle('name')}
                />
                {showError('name') && <p style={{ color: '#c0392b', fontSize: '0.78rem', margin: '0.2rem 0 0' }}>{errors.name}</p>}
              </div>

              {/* Phone */}
              <div style={{ marginBottom: '0.9rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.3rem' }}>
                  Phone Number <span style={{ color: '#c0392b' }}>*</span>
                </label>
                <input
                  type="tel"
                  placeholder="e.g. 03001234567"
                  value={form.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  onBlur={() => handleBlur('phone')}
                  style={inputStyle('phone')}
                />
                {showError('phone') && <p style={{ color: '#c0392b', fontSize: '0.78rem', margin: '0.2rem 0 0' }}>{errors.phone}</p>}
              </div>

              {/* City */}
              <div style={{ marginBottom: '0.9rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.3rem' }}>
                  City <span style={{ color: '#c0392b' }}>*</span>
                </label>
                <select
                  value={form.city}
                  onChange={(e) => handleChange('city', e.target.value)}
                  onBlur={() => handleBlur('city')}
                  style={{ ...inputStyle('city'), appearance: 'auto' }}
                >
                  <option value="">-- Select City --</option>
                  {PAKISTAN_CITIES.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
                {showError('city') && <p style={{ color: '#c0392b', fontSize: '0.78rem', margin: '0.2rem 0 0' }}>{errors.city}</p>}
              </div>

              {/* Area */}
              <div style={{ marginBottom: '0.9rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.3rem' }}>
                  Area / Neighbourhood <span style={{ color: '#c0392b' }}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Gulshan-e-Iqbal, DHA Phase 5"
                  value={form.area}
                  onChange={(e) => handleChange('area', e.target.value)}
                  onBlur={() => handleBlur('area')}
                  style={inputStyle('area')}
                />
                {showError('area') && <p style={{ color: '#c0392b', fontSize: '0.78rem', margin: '0.2rem 0 0' }}>{errors.area}</p>}
              </div>

              {/* Street Address */}
              <div style={{ marginBottom: '0.9rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.3rem' }}>
                  Street Address <span style={{ color: '#c0392b' }}>*</span>
                </label>
                <textarea
                  placeholder="House / Flat no., Street no., Block"
                  value={form.address}
                  onChange={(e) => handleChange('address', e.target.value)}
                  onBlur={() => handleBlur('address')}
                  rows={2}
                  style={{ ...inputStyle('address'), resize: 'vertical', fontFamily: 'inherit' }}
                />
                {showError('address') && <p style={{ color: '#c0392b', fontSize: '0.78rem', margin: '0.2rem 0 0' }}>{errors.address}</p>}
              </div>

              {/* Landmark (optional) */}
              <div style={{ marginBottom: '1.2rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.3rem' }}>
                  Nearby Landmark <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>(optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Near City Hospital, Opposite Masjid"
                  value={form.landmark}
                  onChange={(e) => handleChange('landmark', e.target.value)}
                  style={inputStyle('landmark')}
                />
              </div>

              {submitted && hasErrors && (
                <p style={{ color: '#c0392b', fontSize: '0.85rem', marginBottom: '0.8rem', fontWeight: 600 }}>
                  Please fill in all required fields before checking out.
                </p>
              )}

              <a
                href={hasErrors && submitted ? undefined : checkoutUrl}
                target={hasErrors ? undefined : '_blank'}
                rel="noreferrer"
                className="luxury-btn"
                style={{ width: '100%', opacity: submitted && hasErrors ? 0.7 : 1 }}
                onClick={handleCheckout}
              >
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
