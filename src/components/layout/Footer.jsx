import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Clock, Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../../data/servicesData';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand & Positioning */}
          <div className="footer-col">
            <Link to="/" className="brand-logo" style={{ marginBottom: '14px' }}>
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

            <p style={{ fontWeight: 700, color: 'var(--color-orange)', fontSize: '0.95rem', marginTop: '6px' }}>
              "{COMPANY_INFO.tagline}"
            </p>

            <p className="footer-brand-desc">
              Dubai’s Trusted Handyman. Dependable painting, electrical, plumbing and handyman property maintenance delivering solid craft and 24/7 promptness.
            </p>

            <div className="badge-pill" style={{ display: 'inline-flex' }}>
              <span className="pulse-dot-green"></span>
              <span>24/7 Available in Dubai</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="/" className="footer-link">Home</Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="footer-link">Services</Link>
              </li>
              <li>
                <Link to="/why-choose-us" className="footer-link">Why Choose Us</Link>
              </li>
              <li>
                <Link to="/faq" className="footer-link">FAQ</Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="footer-col">
            <h4 className="footer-col-title">Our Services</h4>
            <ul className="footer-links">
              <li>
                <Link to="/services/painting" className="footer-link">Painting Services</Link>
              </li>
              <li>
                <Link to="/services/electrical" className="footer-link">Electrical Services</Link>
              </li>
              <li>
                <Link to="/services/plumbing" className="footer-link">Plumbing Services</Link>
              </li>
              <li>
                <Link to="/services/handyman" className="footer-link">Handyman Services</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Support & WhatsApp CTA */}
          <div className="footer-col">
            <h4 className="footer-col-title">Direct Support</h4>
            <div className="footer-contact-item">
              <MapPin size={18} />
              <span>{COMPANY_INFO.location}</span>
            </div>
            <div className="footer-contact-item">
              <Mail size={18} />
              <a href={`mailto:${COMPANY_INFO.email}`} style={{ color: 'inherit' }}>
                {COMPANY_INFO.email}
              </a>
            </div>
            <div className="footer-contact-item">
              <Clock size={18} />
              <span>{COMPANY_INFO.availability}</span>
            </div>

            <div style={{ marginTop: '20px' }}>
              <a 
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-navy"
                style={{ width: '100%', fontSize: '0.9rem', justifyContent: 'center' }}
              >
                <MessageSquare size={16} color="#25D366" />
                <span>Call &amp; WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="footer-bottom-bar">
          <p>© 2026 MAS Sixstar Technical Services. All rights reserved.</p>
          <div className="footer-legal-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms-conditions">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
