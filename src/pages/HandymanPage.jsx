import React, { useEffect } from 'react';
import ServicePageLayout from '../components/common/ServicePageLayout';
import { SERVICES_LIST } from '../data/servicesData';

export default function HandymanPage() {
  const service = SERVICES_LIST.find(s => s.id === 'handyman');

  useEffect(() => {
    document.title = "Handyman Services in Dubai | Furniture Assembly & Repairs | MAS Sixstar";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Expert handyman services in Dubai. IKEA furniture assembly, TV wall mounting, door adjustments, minor installations, and home repairs.");
    }
    window.scrollTo(0, 0);
  }, []);

  return <ServicePageLayout service={service} />;
}
