import React from 'react';
import { 
  Clock, 
  UserCheck, 
  Layers, 
  Award, 
  CheckCircle, 
  Zap 
} from 'lucide-react';
import { WHY_CHOOSE_ITEMS } from '../../data/servicesData';

export default function WhyChooseSection() {
  const getIcon = (num) => {
    switch (num) {
      case '1':
        return <Clock size={22} />;
      case '2':
        return <UserCheck size={22} />;
      case '3':
        return <Layers size={22} />;
      case '4':
        return <Award size={22} />;
      case '5':
        return <CheckCircle size={22} />;
      case '6':
      default:
        return <Zap size={22} />;
    }
  };

  return (
    <section className="section section-light" id="why-choose-us">
      <div className="container">
        <div className="text-center" style={{ maxWidth: '780px', margin: '0 auto' }}>
          <span className="section-tag center-block">PRECISION, DEPENDABILITY, CRAFT</span>
          <h2 className="section-title">Why Choose MAS Sixstar Technical Services?</h2>
          <p className="section-desc center-block">
            Built on dependability, craft, and responsive technical support across the emirate of Dubai.
          </p>
        </div>

        <div className="why-grid">
          {WHY_CHOOSE_ITEMS.map((item) => (
            <div key={item.number} className="why-card">
              <div className="why-icon-wrap">
                {getIcon(item.number)}
              </div>
              <h3 className="why-title">
                {item.number}. {item.title}
              </h3>
              <p className="why-desc">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
