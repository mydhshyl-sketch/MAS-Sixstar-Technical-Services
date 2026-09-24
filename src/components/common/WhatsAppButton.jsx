import React from 'react';
import { MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../../data/servicesData';

export default function WhatsAppButton() {
  return (
    <a
      href={COMPANY_INFO.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Chat on WhatsApp with MAS Sixstar Technical Services"
      title="Chat on WhatsApp for instant quote (+971 50 663 7162)"
    >
      <MessageSquare size={22} />
      <span>WhatsApp Quote</span>
    </a>
  );
}
