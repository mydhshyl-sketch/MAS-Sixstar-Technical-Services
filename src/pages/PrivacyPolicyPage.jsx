import React, { useEffect } from 'react';
import { COMPANY_INFO } from '../data/servicesData';

export default function PrivacyPolicyPage() {
  useEffect(() => {
    document.title = "Privacy Policy | MAS Sixstar Technical Services";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <section className="service-hero-banner" style={{ padding: '56px 0 48px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <span className="section-tag" style={{ color: '#FFB366' }}>LEGAL INFORMATION</span>
            <h1 className="service-hero-title">Privacy Policy</h1>
            <p className="service-hero-desc">
              How MAS Sixstar Technical Services collects, uses, and safeguards your personal information when requesting property maintenance services in Dubai.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '840px', lineHeight: 1.75, color: 'var(--color-charcoal)' }}>
          <h2 style={{ fontSize: '1.4rem', color: 'var(--color-navy)', marginBottom: '12px' }}>1. Introduction</h2>
          <p style={{ marginBottom: '24px' }}>
            {COMPANY_INFO.name} ("we", "our", or "us") operates in {COMPANY_INFO.location}. We are committed to protecting the privacy and personal data of clients who contact us for home maintenance, painting, electrical, plumbing, and handyman services.
          </p>

          <h2 style={{ fontSize: '1.4rem', color: 'var(--color-navy)', marginBottom: '12px' }}>2. Information We Collect</h2>
          <p style={{ marginBottom: '16px' }}>
            When you submit a quotation inquiry or contact us via WhatsApp, phone, or email, we may collect:
          </p>
          <ul style={{ paddingLeft: '24px', marginBottom: '24px' }}>
            <li>Your full name</li>
            <li>Contact telephone/WhatsApp number</li>
            <li>Email address</li>
            <li>Property address or community in Dubai</li>
            <li>Details and photos of maintenance tasks required</li>
          </ul>

          <h2 style={{ fontSize: '1.4rem', color: 'var(--color-navy)', marginBottom: '12px' }}>3. How We Use Your Information</h2>
          <p style={{ marginBottom: '16px' }}>
            We only use your information for legitimate maintenance business purposes, specifically:
          </p>
          <ul style={{ paddingLeft: '24px', marginBottom: '24px' }}>
            <li>Preparing accurate cost estimations and quotations</li>
            <li>Scheduling technician visits to your residence or commercial facility</li>
            <li>Communicating appointment confirmations and updates</li>
            <li>Invoicing and service record keeping</li>
          </ul>

          <h2 style={{ fontSize: '1.4rem', color: 'var(--color-navy)', marginBottom: '12px' }}>4. Data Protection &amp; Sharing</h2>
          <p style={{ marginBottom: '24px' }}>
            We do not sell, rent, or trade your personal information to third-party marketing companies. Personal data is accessible strictly to authorized team members and technical staff directly responsible for fulfilling your service request.
          </p>

          <h2 style={{ fontSize: '1.4rem', color: 'var(--color-navy)', marginBottom: '12px' }}>5. Contact Us</h2>
          <p style={{ marginBottom: '24px' }}>
            If you have any questions regarding this Privacy Policy or your personal data, please contact us at:
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
