import React from 'react';
import { MapPin, Clock, Mail, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../../data/servicesData';

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="container top-bar-inner">
        <div className="top-bar-left">
          <div className="top-bar-item">
            <MapPin size={14} color="#F28C28" />
            <span>{COMPANY_INFO.location}</span>
          </div>
          <span className="top-bar-sep">|</span>
          <div className="top-bar-item">
            <span className="pulse-dot-green"></span>
            <span>{COMPANY_INFO.availability}</span>
          </div>
        </div>

        <div className="top-bar-right">
          <div className="top-bar-item">
            <Mail size={14} color="#F28C28" />
            <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
          </div>
          <span className="top-bar-sep">|</span>
          <a 
            href={COMPANY_INFO.whatsappUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="top-bar-whatsapp-btn"
            title="Chat directly on WhatsApp for quotations"
          >
            <MessageSquare size={13} />
            <span>Talk WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
