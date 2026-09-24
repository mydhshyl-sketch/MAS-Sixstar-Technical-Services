import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../../data/servicesData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container nav-inner">
        {/* Brand Logo */}
        <Link to="/" className="brand-logo" onClick={closeMenu}>
          <img 
            src="/images/logo-mark.svg" 
            alt="MAS Sixstar Logo" 
            className="brand-logo-img" 
          />
          <div className="brand-title-wrap">
            <span className="brand-title">MAS Sixstar</span>
            <span className="brand-subtitle">TECHNICAL SERVICES CO. LLC</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation">
          <ul className="nav-links">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/services" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/why-choose-us" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Why Choose Us
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/faq" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Header CTA Button */}
        <div className="header-cta">
          <Link to="/contact" className="btn btn-primary">
            <span>Get a Quote</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <ul className="nav-links">
            <li>
              <NavLink to="/" className="nav-link" onClick={closeMenu} end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-link" onClick={closeMenu}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="nav-link" onClick={closeMenu}>
                Our Services
              </NavLink>
            </li>
            <li style={{ paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Link to="/services/painting" className="nav-link" onClick={closeMenu} style={{ fontSize: '0.95rem', color: 'var(--color-slate)' }}>
                • Painting Services
              </Link>
              <Link to="/services/electrical" className="nav-link" onClick={closeMenu} style={{ fontSize: '0.95rem', color: 'var(--color-slate)' }}>
                • Electrical Services
              </Link>
              <Link to="/services/plumbing" className="nav-link" onClick={closeMenu} style={{ fontSize: '0.95rem', color: 'var(--color-slate)' }}>
                • Plumbing Services
              </Link>
              <Link to="/services/handyman" className="nav-link" onClick={closeMenu} style={{ fontSize: '0.95rem', color: 'var(--color-slate)' }}>
                • Handyman Services
              </Link>
            </li>
            <li>
              <NavLink to="/why-choose-us" className="nav-link" onClick={closeMenu}>
                Why Choose Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/faq" className="nav-link" onClick={closeMenu}>
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="nav-link" onClick={closeMenu}>
                Contact Us
              </NavLink>
            </li>
          </ul>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
            <Link to="/contact" className="btn btn-primary" onClick={closeMenu} style={{ width: '100%' }}>
              <span>Get a Quote</span>
              <ArrowRight size={16} />
            </Link>
            <a 
              href={COMPANY_INFO.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-whatsapp" 
              style={{ width: '100%' }}
            >
              <Phone size={16} />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
