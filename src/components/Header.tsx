'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';
import { FiMenu, FiShoppingBag, FiX } from 'react-icons/fi';
import { useCart } from '@/context/CartContext';
import { products, topNavItems } from '@/data/catalog';

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { cartCount } = useCart();

  const results = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return [];
    return products.filter((item) => item.name.toLowerCase().includes(term)).slice(0, 5);
  }, [searchTerm]);

  return (
    <header className="site-header">
      <div className="marketing-bar">
        <p>Authentic Beauty Products • Fast Nationwide Delivery • Premium Quality Guaranteed</p>
      </div>

      <div className="nav-shell">
        <div className="brand-block">
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Open menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

          <Link href="/" className="brand-logo">
            <Image src="/images/logo.jpeg" alt="Mecca Cosmetic" width={52} height={52} />
            <div>
              <strong>Mecca Cosmetic</strong>
              <span>Perfume & Cosmetics</span>
            </div>
          </Link>
        </div>

        <nav className={`top-nav ${menuOpen ? 'open' : ''}`}>
          {topNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={pathname === item.href ? 'active' : ''}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <div className="search-wrap">
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search perfume, skincare, beauty..."
              aria-label="Search products"
            />

            {!!results.length && (
              <div className="search-dropdown">
                {results.map((item) => (
                  <Link key={item.id} href={`/product/${item.slug}`} onClick={() => setSearchTerm('')}>
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/cart" className="cart-link" aria-label="View cart">
            <FiShoppingBag />
            <span>Cart</span>
            {cartCount > 0 && <b>{cartCount}</b>}
          </Link>
        </div>
      </div>
    </header>
  );
}
