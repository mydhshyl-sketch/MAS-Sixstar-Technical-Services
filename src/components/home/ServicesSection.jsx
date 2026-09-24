import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Paintbrush, Zap, Wrench, Hammer, CheckCircle2 } from 'lucide-react';
import { SERVICES_LIST } from '../../data/servicesData';

export default function ServicesSection() {
  const getIcon = (id) => {
    switch (id) {
      case 'painting':
        return <Paintbrush size={22} />;
      case 'electrical':
        return <Zap size={22} />;
      case 'plumbing':
        return <Wrench size={22} />;
      case 'handyman':
      default:
        return <Hammer size={22} />;
    }
  };

  return (
    <section className="section section-light" id="services">
      <div className="container">
        {/* Section Header */}
        <div className="services-header-row">
          <div>
            <span className="section-tag">COMPREHENSIVE MAINTENANCE SOLUTIONS</span>
            <h2 className="section-title">Our Professional Services</h2>
            <p className="section-desc">
              Practical, meticulous solutions tailored for your residential and commercial property maintenance needs across Dubai.
            </p>
          </div>
          <div>
            <Link to="/services" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <span>Explore All Services</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="services-grid">
          {SERVICES_LIST.map((service) => {
            const isDark = service.featuredDark;
            const hasImage = service.id === 'painting';

            return (
              <div 
                key={service.id} 
                className={`service-card ${isDark ? 'service-card-dark' : ''}`}
              >
                {/* Image on top for painting card as in Stitch */}
                {hasImage && (
                  <div className="service-card-image">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      loading="lazy" 
                    />
                  </div>
                )}

                <span className="card-tag">{service.categoryTag}</span>

                <div className="service-card-icon">
                  {getIcon(service.id)}
                </div>

                <h3 className="service-card-title">{service.title}</h3>
                
                <p className="service-card-desc">{service.shortDescription}</p>

                <ul className="service-card-features">
                  {service.keyFeatures.map((feat, index) => (
                    <li key={index} className="service-feature-item">
                      <CheckCircle2 size={16} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to={`/services/${service.slug}`} 
                  className="service-card-btn"
                  title={`View details for ${service.title}`}
                >
                  <span>Explore {service.title.split(' ')[0]}</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
