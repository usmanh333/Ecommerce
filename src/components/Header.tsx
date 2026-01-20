'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [sidenavOpen, setSidenavOpen] = useState(false);

  const openNav = () => {
    setSidenavOpen(true);
  };

  const closeNav = () => {
    setSidenavOpen(false);
  };

  return (
    <>
      {/* header top section start */}
      <div className="container">
        <div className="header_section_top">
          <div className="row">
            <div className="col-sm-12">
              <div className="custom_menu">
                <ul>
                  <li><Link href="#">Best Sellers</Link></li>
                  <li><Link href="#">Gift Ideas</Link></li>
                  <li><Link href="#">New Releases</Link></li>
                  <li><Link href="#">Today&apos;s Deals</Link></li>
                  <li><Link href="#">Customer Service</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* header top section end */}

      {/* logo section start */}
      <div className="logo_section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="logo">
                <Link href="/">
  <Image
    src="/images/logo.jpeg"
    alt="Logo"
    width={100}
    height={40}
    className="rounded-full"
  />
</Link>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* logo section end */}

      {/* header section start */}
      <div className="header_section">
        <div className="container">
          <div className="containt_main" style={{ display: 'flex', alignItems: 'center' }}>
            <div
              id="mySidenav"
              className="sidenav"
              style={{ width: sidenavOpen ? '250px' : '0' }}
            >
              <a href="#" className="closebtn" onClick={closeNav}>&times;</a>
              <Link href="/">Home</Link>
              <Link href="/fashion">Fashion</Link>
              <Link href="/electronic">Electronic</Link>
              <Link href="/jewellery">Jewellery</Link>
            </div>

            <span className="toggle_icon" onClick={openNav}>
              <Image src="/images/toggle-icon.png" alt="Toggle" width={30} height={30} />
            </span>

            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                All Category
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </div>

            {/* Search + Cart together */}
            <div className="main" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search this blog" />
                <div className="input-group-append">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    style={{ backgroundColor: '#f26522', borderColor: '#f26522' }}
                  >
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>

              {/* Cart on search side */}
              <div>
                <a href="/cart" style={{ display: 'flex',  color: 'white', alignItems: 'center', gap: '6px' }}>
                  <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                  <span className="padding_10">Cart</span>
                </a>
              </div>
            </div>

            {/* ========================= */}
            {/* COMMENTED: Language & old Cart */}
            {/* ========================= */}

            {/*
            <div className="header_box">
              <div className="lang_box">
                <a href="#" title="Language" className="nav-link" data-toggle="dropdown" aria-expanded="true">
                  <Image src="/images/flag-uk.png" alt="flag" className="mr-2" title="United Kingdom" width={20} height={15} /> 
                  English <i className="fa fa-angle-down ml-2" aria-hidden="true"></i>
                </a>
                <div className="dropdown-menu">
                  <a href="#" className="dropdown-item">
                    <Image src="/images/flag-france.png" className="mr-2" alt="flag" width={20} height={15} />
                    French
                  </a>
                </div>
              </div>

              <div className="login_menu">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                      <span className="padding_10">Cart</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            */}

          </div>
        </div>
      </div>
      {/* header section end */}
    </>
  );
}
