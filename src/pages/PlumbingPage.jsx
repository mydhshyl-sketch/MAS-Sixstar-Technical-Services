import React, { useEffect } from 'react';
import ServicePageLayout from '../components/common/ServicePageLayout';
import { SERVICES_LIST } from '../data/servicesData';

export default function PlumbingPage() {
  const service = SERVICES_LIST.find(s => s.id === 'plumbing');

  useEffect(() => {
    document.title = "Plumbing Services in Dubai | Leak Repair & Maintenance | MAS Sixstar";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Professional plumbing services in Dubai. Emergency leak repairs, faucet fixing, sink drainage, toilet repair, and complete plumbing maintenance.");
    }
    window.scrollTo(0, 0);
  }, []);

  return <ServicePageLayout service={service} />;
}
