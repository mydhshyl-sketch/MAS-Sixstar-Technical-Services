import React, { useEffect } from 'react';
import { COMPANY_INFO } from '../data/servicesData';

export default function TermsConditionsPage() {
  useEffect(() => {
    document.title = "Terms & Conditions | MAS Sixstar Technical Services";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <section className="service-hero-banner" style={{ padding: '56px 0 48px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <span className="section-tag" style={{ color: '#FFB366' }}>LEGAL TERMS</span>
            <h1 className="service-hero-title">Terms &amp; Conditions</h1>
            <p className="service-hero-desc">
              Standard terms and service conditions governing maintenance appointments provided by MAS Sixstar Technical Services in Dubai, United Arab Emirates.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '840px', lineHeight: 1.75, color: 'var(--color-charcoal)' }}>
          <h2 style={{ fontSize: '1.4rem', color: 'var(--color-navy)', marginBottom: '12px' }}>1. Scope of Work</h2>
          <p style={{ marginBottom: '24px' }}>
            {COMPANY_INFO.name} provides professional technical, maintenance, painting, electrical, plumbing, and handyman services across Dubai. All jobs are executed based on agreed estimates provided before commencement of on-site tasks.
          </p>

          <h2 style={{ fontSize: '1.4rem', color: 'var(--color-navy)', marginBottom: '12px' }}>2. Quotations &amp; Pricing</h2>
          <p style={{ marginBottom: '24px' }}>
            Initial quotations provided online, over phone, or via WhatsApp are preliminary estimates based on client-provided descriptions and images. Any unforeseen defects or additional required spare parts discovered upon physical inspection will be clearly communicated for client approval before proceeding.
          </p>

          <h2 style={{ fontSize: '1.4rem', color: 'var(--color-navy)', marginBottom: '12px' }}>3. Access &amp; Approvals</h2>
          <p style={{ marginBottom: '24px' }}>
            Clients are responsible for providing unobstructed access to premises at the scheduled appointment time. For gated residential communities or commercial buildings requiring security work permits, gate passes, or NOCs from building management, clients must arrange necessary access permissions in advance.
          </p>

          <h2 style={{ fontSize: '1.4rem', color: 'var(--color-navy)', marginBottom: '12px' }}>4. Workmanship Guarantee</h2>
          <p style={{ marginBottom: '24px' }}>
            We take pride in high standards of craftsmanship. If any issue arises from our workmanship, clients are encouraged to notify us promptly so we can inspect and address the concern without delay.
          </p>

          <h2 style={{ fontSize: '1.4rem', color: 'var(--color-navy)', marginBottom: '12px' }}>5. Contact &amp; Governance</h2>
          <p style={{ marginBottom: '24px' }}>
            These terms are governed by the applicable laws of Dubai and the United Arab Emirates. For any contractual inquiries:
            <br />
            <strong>Email:</strong> <a href={`mailto:${COMPANY_INFO.email}`} style={{ color: 'var(--color-orange)' }}>{COMPANY_INFO.email}</a>
            <br />
            <strong>Location:</strong> {COMPANY_INFO.location}
          </p>
        </div>
      </section>
    </main>
  );
}
