import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../../data/servicesData';

export default function FAQSection() {
  // First item open by default as seen in Stitch mockup
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="text-center" style={{ maxWidth: '780px', margin: '0 auto' }}>
          <span className="section-tag center-block">HELP &amp; CLARITY</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-desc center-block">
            Clear answers to common questions about our Dubai home maintenance services.
          </p>
        </div>

        <div className="faq-container">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`faq-item ${isOpen ? 'open' : ''}`}
              >
                <button
                  className="faq-trigger"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span>{item.question}</span>
                  <ChevronDown size={20} className="faq-trigger-icon" />
                </button>

                {isOpen && (
                  <div 
                    id={`faq-answer-${index}`} 
                    className="faq-content"
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
