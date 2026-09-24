import React, { useEffect } from 'react';
import LeadContactSection from '../components/home/LeadContactSection';
import { MapPin, Mail, Clock, Phone, MessageSquare, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/servicesData';

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact Us | Request a Quote | MAS Sixstar Technical Services";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Get in touch with MAS Sixstar Technical Services in Dubai. Request a free quote for painting, electrical, plumbing, or handyman maintenance. Available 24/7.");
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <section className="service-hero-banner">
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <span className="section-tag" style={{ color: '#FFB366' }}>
              DIRECT CONTACT &bull; 24/7 RESPONSE
            </span>
            <h1 className="service-hero-title">Contact MAS Sixstar Technical Services</h1>
            <p className="service-hero-desc">
              Request a free quotation or book an on-site technical inspection for your villa, apartment, or commercial space anywhere across Dubai.
            </p>
          </div>
        </div>
      </section>

      {/* Direct Contact Cards Bar */}
      <section className="section section-light" style={{ paddingBottom: '0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            <div className="value-prop-card" style={{ padding: '24px', backgroundColor: 'var(--color-white)' }}>
              <div className="value-prop-head">
                <MapPin size={22} color="var(--color-orange)" />
                <h4 className="value-prop-title">Location &amp; Coverage</h4>
              </div>
              <p className="value-prop-desc">
                {COMPANY_INFO.location}
                <br />
                Full coverage across all major Dubai communities.
              </p>
            </div>

            <div className="value-prop-card" style={{ padding: '24px', backgroundColor: 'var(--color-white)' }}>
              <div className="value-prop-head">
                <Mail size={22} color="var(--color-orange)" />
                <h4 className="value-prop-title">Email Inquiries</h4>
              </div>
              <p className="value-prop-desc">
                <a href={`mailto:${COMPANY_INFO.email}`} style={{ color: 'var(--color-navy)', fontWeight: 600 }}>
                  {COMPANY_INFO.email}
                </a>
                <br />
                Prompt replies for residential &amp; corporate scopes.
              </p>
            </div>

            <div className="value-prop-card" style={{ padding: '24px', backgroundColor: 'var(--color-white)' }}>
              <div className="value-prop-head">
                <Phone size={22} color="var(--color-orange)" />
                <h4 className="value-prop-title">WhatsApp &amp; Call</h4>
              </div>
              <p className="value-prop-desc">
                <a href={COMPANY_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-navy)', fontWeight: 600 }}>
                  {COMPANY_INFO.phoneDisplay}
                </a>
                <br />
                24/7 Available for instant messaging.
              </p>
            </div>

            <div className="value-prop-card" style={{ padding: '24px', backgroundColor: 'var(--color-white)' }}>
              <div className="value-prop-head">
                <Clock size={22} color="var(--color-orange)" />
                <h4 className="value-prop-title">Availability</h4>
              </div>
              <p className="value-prop-desc">
                <span className="pulse-dot-green"></span> 24/7 Available
                <br />
                Daytime appointments &amp; round-the-clock emergency support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Split Card Contact Form */}
      <LeadContactSection />
    </main>
  );
}
