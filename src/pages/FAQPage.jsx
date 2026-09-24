import React, { useEffect, useState } from 'react';
import FAQSection from '../components/home/FAQSection';
import LeadContactSection from '../components/home/LeadContactSection';
import { Mail, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/servicesData';

export default function FAQPage() {
  useEffect(() => {
    document.title = "FAQ | Frequently Asked Questions | MAS Sixstar Technical Services";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Find answers to common questions about MAS Sixstar Technical Services in Dubai. Learn about our handyman, painting, electrical, and plumbing solutions.");
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <section className="service-hero-banner">
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <span className="section-tag" style={{ color: '#FFB366' }}>
              HELP &amp; CLARITY
            </span>
            <h1 className="service-hero-title">Frequently Asked Questions</h1>
            <p className="service-hero-desc">
              Have questions about how we work, response times, or coverage across Dubai? Find quick and honest answers below.
            </p>
          </div>
        </div>
      </section>

      <FAQSection />

      {/* Still have questions banner */}
      <section className="section section-light" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div style={{ backgroundColor: 'var(--color-navy)', color: 'var(--color-white)', borderRadius: '16px', padding: '36px 32px', textAlign: 'center', maxWidth: '860px', margin: '0 auto' }}>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '12px' }}>
              Have A Specific Maintenance Question?
            </h3>
            <p style={{ color: '#B5C4D8', maxWidth: '520px', margin: '0 auto 24px auto', fontSize: '0.95rem' }}>
              Our Dubai technical team is ready 24/7 to provide immediate answers, advice, and fast quotation estimates.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a 
                href={COMPANY_INFO.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-whatsapp"
              >
                <MessageSquare size={16} />
                <span>Chat on WhatsApp</span>
              </a>
              <a 
                href={`mailto:${COMPANY_INFO.email}`} 
                className="btn btn-outline-white"
              >
                <Mail size={16} />
                <span>Email Us Directly</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <LeadContactSection />
    </main>
  );
}
