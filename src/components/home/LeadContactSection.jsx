import React, { useState } from 'react';
import { Mail, MapPin, Phone, Clock, ArrowRight, CheckCircle2, AlertCircle, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../../data/servicesData';

export default function LeadContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceRequired: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone / WhatsApp number is required';
    } else if (!/^[0-9+ \-()]{7,20}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.serviceRequired) {
      errs.serviceRequired = 'Please select a service';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Frontend validation & state simulation ready for backend/API integration
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-split-card">
          {/* Left Column: Dark Navy Info Card */}
          <div className="contact-split-left">
            <div>
              <span className="contact-split-left-tag">FAST TECHNICAL RESPONSE</span>
              <h2 className="contact-split-left-title">
                Ready to Fix or Refresh Your Property?
              </h2>
              <p className="contact-split-left-desc">
                Send your technical requirements or reach out for immediate scheduling. We cater to villas, apartments, and businesses across Dubai.
              </p>

              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="contact-info-icon-box">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="contact-info-label">Email Support</span>
                    <p className="contact-info-value">
                      <a href={`mailto:${COMPANY_INFO.email}`} style={{ color: 'inherit' }}>
                        {COMPANY_INFO.email}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon-box">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="contact-info-label">Service Coverage</span>
                    <p className="contact-info-value">{COMPANY_INFO.location} (Full Coverage)</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon-box">
                    <Clock size={18} />
                  </div>
                  <div>
                    <span className="contact-info-label">24/7 Availability</span>
                    <p className="contact-info-value">{COMPANY_INFO.availability} for Emergency &amp; Routine Tasks</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon-box">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="contact-info-label">WhatsApp &amp; Direct Call</span>
                    <p className="contact-info-value">
                      <a 
                        href={COMPANY_INFO.whatsappUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{ color: '#FFB366' }}
                      >
                        {COMPANY_INFO.phoneDisplay}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '18px', fontSize: '0.8rem', color: '#8E9BAE' }}>
              Direct Technical Team &bull; WhatsApp Available 24/7
            </div>
          </div>

          {/* Right Column: Quote Form */}
          <div className="contact-split-right">
            {isSubmitted ? (
              <div style={{ textAlign: 'center', padding: '36px 12px' }}>
                <div style={{ display: 'inline-flex', padding: '16px', borderRadius: '50%', backgroundColor: 'var(--color-orange-light)', color: 'var(--color-orange)', marginBottom: '18px' }}>
                  <CheckCircle2 size={42} />
                </div>
                <h3 style={{ fontSize: '1.6rem', color: 'var(--color-navy)', marginBottom: '12px', fontWeight: 800 }}>
                  Quote Request Prepared!
                </h3>
                <p style={{ color: 'var(--color-slate)', maxWidth: '440px', margin: '0 auto 24px auto', lineHeight: 1.6 }}>
                  Thank you, <strong>{formData.fullName}</strong>. Your request for <strong>{formData.serviceRequired}</strong> has been validated. You can send this request directly to our team via WhatsApp for instant pricing.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '340px', margin: '0 auto' }}>
                  <a
                    href={`https://wa.me/971506637162?text=Hello%20MAS%20Sixstar,%20my%20name%20is%20${encodeURIComponent(formData.fullName)}.%20I%20need%20a%20quote%20for%20${encodeURIComponent(formData.serviceRequired)}.%20Phone:%20${encodeURIComponent(formData.phone)}.%20Details:%20${encodeURIComponent(formData.message || 'Standard service request')}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                    style={{ width: '100%' }}
                  >
                    <MessageSquare size={18} />
                    <span>Send via WhatsApp Now</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        serviceRequired: '',
                        message: ''
                      });
                    }}
                    className="btn btn-outline"
                    style={{ width: '100%' }}
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form className="quote-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fullName" className="form-label">
                      Full Name <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      placeholder="e.g. Sohail Akbar"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`form-control ${errors.fullName ? 'error' : ''}`}
                    />
                    {errors.fullName && <span className="error-text">{errors.fullName}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Phone / WhatsApp <span className="req">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="e.g. +971 50 663 7162"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`form-control ${errors.phone ? 'error' : ''}`}
                    />
                    {errors.phone && <span className="error-text">{errors.phone}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Address <span className="req">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="e.g. name@domain.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`form-control ${errors.email ? 'error' : ''}`}
                    />
                    {errors.email && <span className="error-text">{errors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="serviceRequired" className="form-label">
                      Service Required <span className="req">*</span>
                    </label>
                    <select
                      id="serviceRequired"
                      name="serviceRequired"
                      value={formData.serviceRequired}
                      onChange={handleChange}
                      className={`form-control ${errors.serviceRequired ? 'error' : ''}`}
                    >
                      <option value="">Select a service category...</option>
                      <option value="Painting Services">Painting Services</option>
                      <option value="Electrical Services">Electrical Services</option>
                      <option value="Plumbing Services">Plumbing Services</option>
                      <option value="Handyman Services">Handyman Services</option>
                      <option value="Multiple Maintenance Needs">Multiple Maintenance Needs</option>
                    </select>
                    {errors.serviceRequired && <span className="error-text">{errors.serviceRequired}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Brief Message / Property Location
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Select the issue or project (e.g., villa repaint, faucet leak, socket repair, furniture assembly) and mention your Dubai community (e.g. Downtown, JVC, Marina)..."
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary form-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span>Validating Request...</span>
                  ) : (
                    <>
                      <span>Request a Quote</span>
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
