import React, { useEffect } from 'react';
import WhyChooseSection from '../components/home/WhyChooseSection';
import LeadContactSection from '../components/home/LeadContactSection';
import { Shield, Clock, CheckCircle2, Star } from 'lucide-react';

export default function WhyChooseUsPage() {
  useEffect(() => {
    document.title = "Why Choose Us | MAS Sixstar Technical Services Dubai";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Discover why MAS Sixstar is Dubai's trusted handyman and technical maintenance partner. 24/7 availability, quality workmanship, and reliable service.");
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <section className="service-hero-banner">
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <span className="section-tag" style={{ color: '#FFB366' }}>
              PRECISION, DEPENDABILITY, CRAFT
            </span>
            <h1 className="service-hero-title">Why Choose MAS Sixstar Technical Services?</h1>
            <p className="service-hero-desc">
              We understand that maintaining a property in Dubai demands punctuality, clean execution, and dependable craft. Here is how we deliver exceptional service every day.
            </p>
          </div>
        </div>
      </section>

      <WhyChooseSection />

      <section className="section">
        <div className="container">
          <div className="overview-stats-card" style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center', padding: '48px 36px' }}>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--color-navy)', marginBottom: '16px', fontWeight: 800 }}>
              The MAS Sixstar Service Standard
            </h3>
            <p style={{ color: 'var(--color-slate)', maxWidth: '640px', margin: '0 auto 32px auto', lineHeight: 1.6 }}>
              Whether dealing with an urgent leak in the middle of the night or booking a planned villa painting refresh, you can count on straightforward communication and solid technical work.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
              <div style={{ padding: '20px', borderRadius: '12px', background: 'var(--color-bg-light)' }}>
                <Clock size={28} color="var(--color-orange)" style={{ margin: '0 auto 10px auto' }} />
                <h4 style={{ color: 'var(--color-navy)', marginBottom: '6px' }}>Punctual Arrival</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-slate)' }}>Committed time slots so you never waste your day waiting.</p>
              </div>

              <div style={{ padding: '20px', borderRadius: '12px', background: 'var(--color-bg-light)' }}>
                <Shield size={28} color="var(--color-orange)" style={{ margin: '0 auto 10px auto' }} />
                <h4 style={{ color: 'var(--color-navy)', marginBottom: '6px' }}>No Hidden Costs</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-slate)' }}>Clear, upfront quotes before any technical work begins.</p>
              </div>

              <div style={{ padding: '20px', borderRadius: '12px', background: 'var(--color-bg-light)' }}>
                <CheckCircle2 size={28} color="var(--color-orange)" style={{ margin: '0 auto 10px auto' }} />
                <h4 style={{ color: 'var(--color-navy)', marginBottom: '6px' }}>Tidy Cleanup</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-slate)' }}>Drop sheets used and work areas cleaned after every task.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LeadContactSection />
    </main>
  );
}
