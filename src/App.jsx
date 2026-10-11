import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TopBar from './components/layout/TopBar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/common/WhatsAppButton';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import PaintingPage from './pages/PaintingPage';
import ElectricalPage from './pages/ElectricalPage';
import PlumbingPage from './pages/PlumbingPage';
import HandymanPage from './pages/HandymanPage';
import AcRepairPage from './pages/AcRepairPage';
import WhyChooseUsPage from './pages/WhyChooseUsPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsConditionsPage from './pages/TermsConditionsPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/painting" element={<PaintingPage />} />
        <Route path="/services/electrical" element={<ElectricalPage />} />
        <Route path="/services/plumbing" element={<PlumbingPage />} />
        <Route path="/services/handyman" element={<HandymanPage />} />
        <Route path="/services/ac-repair" element={<AcRepairPage />} />
        <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-conditions" element={<TermsConditionsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
