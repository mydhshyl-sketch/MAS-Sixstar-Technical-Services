import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Sparkles, MapPin, Clock } from 'lucide-react';

export default function AboutOverviewSection() {
  const metrics = [
    { label: "Handyman & General Repairs", percent: 38 },
    { label: "Interior & Exterior Painting", percent: 26 },
    { label: "Plumbing & Leak Resolution", percent: 18 },
    { label: "Electrical & Lighting Fixes", percent: 18 }
  ];

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="overview-grid">
          {/* Left Column: Quick Overview Card */}
          <div className="overview-stats-card">
            <span className="stats-card-tag">QUICK OVERVIEW</span>
            <h3 className="stats-card-title">Dubai-Wide Technical Response</h3>
            <p className="stats-card-desc">
              Delivering pragmatic maintenance and technical support across residential communities, private villas, commercial offices, and retail premises.
            </p>

            <div className="breakdown-list">
              {metrics.map((item, idx) => (
                <div key={idx} className="breakdown-item">
                  <div className="breakdown-row">
                    <span>{item.label}</span>
                    <span style={{ color: 'var(--color-navy)', fontWeight: 700 }}>{item.percent}%</span>
                  </div>
                  <div className="progress-track">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${item.percent * 2}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Narrative & Value Props */}
          <div className="overview-narrative">
            <span className="section-tag">ABOUT MAS SIXSTAR TECHNICAL SERVICES</span>
            <h2 className="section-title">
              Your Practical One-Stop Maintenance Partner in Dubai
            </h2>

            <p style={{ fontSize: '1rem', color: 'var(--color-slate)', lineHeight: 1.65, marginBottom: '16px' }}>
              MAS Sixstar Technical Services was founded to give Dubai residents and facility managers a genuinely dependable, direct solution for property maintenance. Rather than juggling multiple contractors for small fixes, we combine professional painting, certified electrical support, sanitary plumbing, and precise handyman repairs under one roof.
            </p>

            <p style={{ fontSize: '1rem', color: 'var(--color-slate)', lineHeight: 1.65, marginBottom: '24px' }}>
              We prioritize punctuality, cleanliness, and clear service execution. Whether refreshing an apartment before new tenants move in, repairing electrical switches in an office, or fixing persistent plumbing leaks in a family villa, our focus remains on solid craftsmanship and clear communication from start to finish.
            </p>

            {/* 4 Feature Pillars (2x2 Grid) */}
            <div className="value-props-grid">
              <div className="value-prop-card">
                <div className="value-prop-head">
                  <ShieldCheck size={18} className="value-prop-icon" />
                  <h4 className="value-prop-title">Reliable Execution</h4>
                </div>
                <p className="value-prop-desc">
                  Work delivered with the correct equipment and realistic arrival windows.
                </p>
              </div>

              <div className="value-prop-card">
                <div className="value-prop-head">
                  <Sparkles size={18} className="value-prop-icon" />
                  <h4 className="value-prop-title">Clean Workmanship</h4>
                </div>
                <p className="value-prop-desc">
                  Neat site handling, protected floors/furniture, and tidy clean-up after every job.
                </p>
              </div>

              <div className="value-prop-card">
                <div className="value-prop-head">
                  <MapPin size={18} className="value-prop-icon" />
                  <h4 className="value-prop-title">Full Dubai Coverage</h4>
                </div>
                <p className="value-prop-desc">
                  Servicing Downtown, Marina, Palm Jumeirah, JVC, Arabian Ranches, Business Bay, &amp; surroundings.
                </p>
              </div>

              <div className="value-prop-card">
                <div className="value-prop-head">
                  <Clock size={18} className="value-prop-icon" />
                  <h4 className="value-prop-title">24/7 Availability</h4>
                </div>
                <p className="value-prop-desc">
                  Ready for quick repairs, urgent diagnostics, and planned maintenance appointments.
                </p>
              </div>
            </div>

            <Link to="/contact" className="btn btn-navy">
              <span>Learn More &amp; Contact Us</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
