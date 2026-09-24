import React, { useEffect } from 'react';
import ServicePageLayout from '../components/common/ServicePageLayout';
import { SERVICES_LIST } from '../data/servicesData';

export default function ElectricalPage() {
  const service = SERVICES_LIST.find(s => s.id === 'electrical');

  useEffect(() => {
    document.title = "Electrical Services in Dubai | Repairs & Maintenance | MAS Sixstar";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Reliable electrical services in Dubai. Electrical repairs, maintenance, lighting installation, switch & socket repair, and residential troubleshooting.");
    }
    window.scrollTo(0, 0);
  }, []);

  return <ServicePageLayout service={service} />;
}
