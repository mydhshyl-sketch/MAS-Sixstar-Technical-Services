import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Building2, Home as HomeIcon } from 'lucide-react';
import { COMPANY_INFO } from '../data/servicesData';
import LeadContactSection from '../components/home/LeadContactSection';

export default function About() {
  useEffect(() => {
    document.title = "About Us | MAS Sixstar Technical Services Dubai";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Learn about MAS Sixstar Technical Services. Delivering practical technical, maintenance and handyman solutions for homes and businesses across Dubai.");
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      {/* About Hero Banner */}
      <section className="service-hero-banner">
        <div className="container">
          <div style={{ maxWidth: '820px' }}>
            <span className="section-tag" style={{ color: '#FFB366' }}>
              ABOUT MAS SIXSTAR TECHNICAL SERVICES
            </span>
            <h1 className="service-hero-title">
              Your Practical One-Stop Maintenance Partner in Dubai
            </h1>
            <p className="service-hero-desc">
              MAS Sixstar Technical Services provides dependable technical, maintenance, and handyman solutions for residential villas, apartments, and commercial facilities across Dubai.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative Section */}
      <section className="section">
        <div className="container">
          <div className="overview-grid">
            <div>
              <span className="section-tag">WHO WE ARE</span>
              <h2 className="section-title">
                Reliable Technical Solutions Under One Roof
              </h2>
              <p style={{ fontSize: '1.02rem', color: 'var(--color-slate)', lineHeight: 1.7, marginBottom: '20px' }}>
                Property maintenance should not be complicated. Rather than coordinating with multiple separate vendors for painting, electrical issues, plumbing leaks, and small carpentry jobs, MAS Sixstar Technical Services unites all four fundamental trades into one responsive technical team.
              </p>
              <p style={{ fontSize: '1.02rem', color: 'var(--color-slate)', lineHeight: 1.7, marginBottom: '24px' }}>
                We focus on punctuality, neat execution, and honest communication. Whether preparing a rental property for handover, replacing electrical fixtures, repairing emergency pipe leaks, or mounting furniture, our team ensures the job is done cleanly and correctly.
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link to="/services" className="btn btn-primary">
                  <span>Explore Our Services</span>
                  <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  <span>Get in Touch</span>
                </Link>
              </div>
            </div>

            <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-xl)', border: '1px solid var(--color-border)' }}>
              <img 
                src="/images/hero-technician.jpg" 
                alt="MAS Sixstar Handyman Team" 
                style={{ width: '100%', height: '420px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '720px', margin: '0 auto 48px auto' }}>
            <span className="section-tag center-block">OUR CORE VALUES</span>
            <h2 className="section-title">Built On Dependability and Craft</h2>
            <p className="section-desc center-block">
              Every appointment is guided by our commitment to quality workmanship, customer care, and hassle-free service.
            </p>
          </div>

          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon-wrap">
                <ShieldCheck size={24} />
              </div>
              <h3 className="why-title">Reliable Service</h3>
              <p className="why-desc">
                We respect your time. Our technicians arrive with the correct diagnostic tools and materials ready to resolve issues efficiently.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon-wrap">
                <Sparkles size={24} />
              </div>
              <h3 className="why-title">Professional Approach</h3>
              <p className="why-desc">
                From uniform presentation to floor protection and debris cleanup, we treat your property with the utmost care and respect.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon-wrap">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="why-title">Quality Workmanship</h3>
              <p className="why-desc">
                We believe in lasting fixes, not temporary shortcuts. Every electrical switch, pipe fitting, or painted wall is inspected for durability.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon-wrap">
                <HomeIcon size={24} />
              </div>
              <h3 className="why-title">Residential Maintenance</h3>
              <p className="why-desc">
                Tailored solutions for Dubai apartments, townhouses, and luxury villas—keeping your living spaces safe, comfortable, and beautiful.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon-wrap">
                <Building2 size={24} />
              </div>
              <h3 className="why-title">Commercial Maintenance</h3>
              <p className="why-desc">
                Support for corporate offices, retail stores, and commercial premises with flexible scheduling that prevents operational downtime.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon-wrap">
                <ShieldCheck size={24} />
              </div>
              <h3 className="why-title">Convenient One-Stop Service</h3>
              <p className="why-desc">
                One phone call or WhatsApp message connects you to a complete range of property maintenance expertise across the emirate of Dubai.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <LeadContactSection />
    </main>
  );
}
