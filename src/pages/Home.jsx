import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import AboutOverviewSection from '../components/home/AboutOverviewSection';
import WhyChooseSection from '../components/home/WhyChooseSection';
import FAQSection from '../components/home/FAQSection';
import LeadContactSection from '../components/home/LeadContactSection';

export default function Home() {
  useEffect(() => {
    document.title = "MAS Sixstar Technical Services | Handyman & Home Maintenance Dubai";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "MAS Sixstar Technical Services provides painting, electrical, plumbing and handyman services in Dubai. Reliable home and property maintenance solutions available 24/7.");
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <AboutOverviewSection />
      <WhyChooseSection />
      <FAQSection />
      <LeadContactSection />
    </main>
  );
}
