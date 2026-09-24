import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Phone, MessageSquare, ShieldCheck, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../../data/servicesData';
import LeadContactSection from '../home/LeadContactSection';

export default function ServicePageLayout({ service }) {
  if (!service) return null;

  return (
    <div className="service-page">
      {/* Service Hero Banner */}
      <section className="service-hero-banner">
        <div className="container">
          <div className="service-hero-grid">
            <div>
              <span className="section-tag" style={{ color: '#FFB366' }}>
                {service.categoryTag} &bull; DUBAI, UAE
              </span>
              <h1 className="service-hero-title">{service.pageTitle}</h1>
              <p className="service-hero-desc">{service.fullDescription}</p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '28px' }}>
                <a href="#quote-form" className="btn btn-primary">
                  <span>{service.ctaText}</span>
                  <ArrowRight size={18} />
                </a>
                <a
                  href={`https://wa.me/971506637162?text=Hello%20MAS%20Sixstar,%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(service.title)}%20in%20Dubai.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <MessageSquare size={18} />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>

              <div style={{ display: 'flex', gap: '20px', fontSize: '0.85rem', color: '#B5C4D8', flexWrap: 'wrap' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <ShieldCheck size={16} color="#F28C28" /> No Hidden Fees
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <Clock size={16} color="#F28C28" /> 24/7 Available
                </span>
              </div>
            </div>

            <div>
              <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-xl)', border: '2px solid rgba(255,255,255,0.1)' }}>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  style={{ width: '100%', height: '360px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scope / Subsections Grid */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '720px', margin: '0 auto' }}>
            <span className="section-tag center-block">DETAILED SERVICE SCOPE</span>
            <h2 className="section-title">Comprehensive {service.title}</h2>
            <p className="section-desc center-block">
              Explore our structured solutions designed specifically for Dubai residential homes, luxury villas, and commercial properties.
            </p>
          </div>

          <div className="service-scope-grid">
            {service.sections.map((sec, idx) => (
              <div key={idx} className="service-scope-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'var(--color-orange-light)', color: 'var(--color-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <CheckCircle2 size={16} />
                  </div>
                  <h3 className="service-scope-title" style={{ margin: 0 }}>{sec.title}</h3>
                </div>
                <p className="service-scope-desc">{sec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quotation Form Section */}
      <div id="quote-form">
        <LeadContactSection />
      </div>
    </div>
  );
}
