import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Paintbrush, Zap, Wrench, Hammer } from 'lucide-react';
import { SERVICES_LIST } from '../data/servicesData';
import LeadContactSection from '../components/home/LeadContactSection';

export default function Services() {
  useEffect(() => {
    document.title = "Our Services | MAS Sixstar Technical Services Dubai";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Explore our painting, electrical, plumbing and handyman services in Dubai. Available 24/7 for residential and commercial property maintenance.");
    }
    window.scrollTo(0, 0);
  }, []);

  const getIcon = (id) => {
    switch (id) {
      case 'painting': return <Paintbrush size={24} />;
      case 'electrical': return <Zap size={24} />;
      case 'plumbing': return <Wrench size={24} />;
      case 'handyman':
      default: return <Hammer size={24} />;
    }
  };

  return (
    <main>
      {/* Services Banner */}
      <section className="service-hero-banner">
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <span className="section-tag" style={{ color: '#FFB366' }}>
              COMPREHENSIVE PROPERTY SOLUTIONS
            </span>
            <h1 className="service-hero-title">
              Professional Technical &amp; Handyman Services in Dubai
            </h1>
            <p className="service-hero-desc">
              From interior touch-ups and critical electrical repairs to emergency plumbing and versatile handyman fixes, we deliver reliable property care across Dubai.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid with Cards */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
            {SERVICES_LIST.map((srv, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={srv.id}
                  className="overview-grid"
                  style={{
                    backgroundColor: 'var(--color-bg-light)',
                    padding: '40px',
                    borderRadius: '20px',
                    border: '1px solid var(--color-border)'
                  }}
                >
                  <div style={{ order: isEven ? 1 : 2 }}>
                    <div style={{ borderRadius: '14px', overflow: 'hidden', height: '340px', boxShadow: 'var(--shadow-md)' }}>
                      <img 
                        src={srv.image} 
                        alt={srv.title} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                  </div>

                  <div style={{ order: isEven ? 2 : 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                      <div className="service-card-icon" style={{ margin: 0 }}>
                        {getIcon(srv.id)}
                      </div>
                      <span className="card-tag" style={{ margin: 0 }}>{srv.categoryTag}</span>
                    </div>

                    <h2 style={{ fontSize: '1.9rem', fontWeight: 800, color: 'var(--color-navy)', margin: '12px 0 14px 0' }}>
                      {srv.title}
                    </h2>

                    <p style={{ color: 'var(--color-slate)', lineHeight: 1.6, marginBottom: '20px', fontSize: '1rem' }}>
                      {srv.fullDescription}
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '24px' }}>
                      {srv.keyFeatures.map((feat, fidx) => (
                        <div key={fidx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: 'var(--color-charcoal)', fontWeight: 600 }}>
                          <CheckCircle2 size={16} color="var(--color-orange)" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                      <Link to={`/services/${srv.slug}`} className="btn btn-primary">
                        <span>View Dedicated Page</span>
                        <ArrowRight size={16} />
                      </Link>
                      <Link to="/contact" className="btn btn-outline">
                        <span>Request a Quote</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <LeadContactSection />
    </main>
  );
}
