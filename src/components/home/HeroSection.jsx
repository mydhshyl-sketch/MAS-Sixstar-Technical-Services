import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Mail, PhoneCall, Zap, Building2 } from 'lucide-react';
import { COMPANY_INFO } from '../../data/servicesData';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Text Column */}
          <div className="hero-content">
            <div className="hero-badge-row">
              <span className="badge-pill">
                <span className="pulse-dot"></span>
                <span>Dubai’s Trusted Handyman &bull; 24/7 Available</span>
              </span>
            </div>

            <h1 className="hero-title">
              Reliable Home Maintenance &amp; Handyman Services in Dubai
            </h1>

            <p className="hero-subtitle">
              From painting and electrical work to plumbing and everyday home repairs, MAS Sixstar Technical Services provides dependable solutions for homes and businesses across Dubai.
            </p>

            <div className="hero-cta-group">
              <Link to="/contact" className="btn btn-primary">
                <span>Get a Quote</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn btn-outline">
                <span>Explore Services</span>
                <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="hero-trust-bar">
              <div className="hero-trust-item">
                <Mail size={16} color="#F28C28" />
                <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
              </div>
              <div className="hero-trust-item">
                <PhoneCall size={16} color="#F28C28" />
                <a href={COMPANY_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  {COMPANY_INFO.phoneDisplay} (24/7 Available)
                </a>
              </div>
            </div>
          </div>

          {/* Right Image Column with Floating Glass Badges */}
          <div className="hero-image-wrapper">
            <div className="hero-image-card">
              <img 
                src="/images/hero-technician.jpg" 
                alt="MAS Sixstar Technical Services Technician in Dubai" 
                className="hero-img"
                loading="eager"
              />

              {/* Floating Top Badge */}
              <div className="floating-badge-top">
                <Zap size={16} color="#F28C28" />
                <span>24/7 Fast Response &bull; Same-Day Dispatch</span>
              </div>

              {/* Floating Bottom Card */}
              <div className="floating-badge-bottom">
                <div className="floating-icon-wrap">
                  <Building2 size={20} />
                </div>
                <div>
                  <h4 className="floating-badge-title">Serving Residential &amp; Commercial</h4>
                  <p className="floating-badge-sub">Across prime Dubai communities &amp; villas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
