import React, { useEffect } from 'react';
import ServicePageLayout from '../components/common/ServicePageLayout';
import { SERVICES_LIST } from '../data/servicesData';

export default function PaintingPage() {
  const service = SERVICES_LIST.find(s => s.id === 'painting');

  useEffect(() => {
    document.title = "Painting Services in Dubai | Interior & Exterior Painters | MAS Sixstar";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Professional interior and exterior painting services in Dubai. Wall painting, room painting, property refresh, villa and commercial painting by MAS Sixstar.");
    }
    window.scrollTo(0, 0);
  }, []);

  return <ServicePageLayout service={service} />;
}
