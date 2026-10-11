import React, { useEffect } from 'react';
import ServicePageLayout from '../components/common/ServicePageLayout';
import { SERVICES_LIST } from '../data/servicesData';

export default function AcRepairPage() {
  const service = SERVICES_LIST.find(s => s.id === 'ac-repair');

  useEffect(() => {
    document.title = "AC Repair & Installation in Dubai | 24/7 AC Service | MAS Sixstar";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Fast, reliable AC repair, servicing and installation for homes, villas and offices across Dubai. Available 24/7.");
    }
    window.scrollTo(0, 0);
  }, []);

  return <ServicePageLayout service={service} />;
}
