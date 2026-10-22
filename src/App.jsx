import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ServicesGrid from './components/ServicesGrid.jsx';
import HowWeWork from './components/HowWeWork.jsx';
import WhyA2Z from './components/WhyA2Z.jsx';
import ComplianceCalendarWidget from './components/ComplianceCalendarWidget.jsx';
import Testimonials from './components/Testimonials.jsx';
import FaqSection from './components/FaqSection.jsx';
import ConsultationForm from './components/ConsultationForm.jsx';
import ServiceDetailView from './components/ServiceDetailView.jsx';
import ConsultationModal from './components/ConsultationModal.jsx';
import MobileQuickContact from './components/MobileQuickContact.jsx';
import Footer from './components/Footer.jsx';
import { SERVICES } from './data/servicesData.js';

export default function App() {
  const [activeService, setActiveService] = useState(null);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [consultationPrefill, setConsultationPrefill] = useState("");

  // Sync with browser hash for SEO and deep linking (e.g., #service-gst-registration)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash && hash.startsWith('#service-')) {
        const slug = hash.replace('#service-', '');
        const found = SERVICES.find(s => s.slug === slug || s.id === slug);
        if (found) {
          setActiveService(found);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }
      if (hash === '' || hash === '#') {
        setActiveService(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update page title dynamically when viewing a specific service
  useEffect(() => {
    if (activeService) {
      document.title = `${activeService.title} in Coimbatore | A2Z Associates`;
    } else {
      document.title = "A2Z Associates | Tax, GST & Business Compliance Advisory – Coimbatore";
    }
  }, [activeService]);

  const handleSelectService = (service) => {
    if (service) {
      window.location.hash = `service-${service.slug}`;
      setActiveService(service);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.hash = '';
      setActiveService(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenConsultation = (serviceTitle = "") => {
    setConsultationPrefill(serviceTitle || (activeService ? activeService.title : ""));
    setIsConsultationModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-slate-800 selection:bg-[#C5A059]/20 selection:text-slate-900">
      
      {/* Sticky Top Bar (Conforms to 3-zone contract) */}
      <Header
        onOpenConsultation={() => handleOpenConsultation()}
        onSelectService={handleSelectService}
        activeService={activeService}
      />

      {/* Main View: Either Dedicated Service Page Template OR Complete Homepage */}
      <main className="flex-grow">
        {activeService ? (
          <ServiceDetailView
            service={activeService}
            onBack={() => handleSelectService(null)}
            onOpenConsultation={() => handleOpenConsultation(activeService.title)}
          />
        ) : (
          <>
            {/* 1. Hero: Positioning & Trust Strip */}
            <Hero onOpenConsultation={() => handleOpenConsultation()} />

            {/* 2. Services: Bento-style 9-service grid */}
            <ServicesGrid
              onSelectService={handleSelectService}
              onOpenConsultation={() => handleOpenConsultation()}
            />

            {/* 3. How We Work: 4-step horizontal timeline */}
            <HowWeWork onOpenConsultation={() => handleOpenConsultation()} />

            {/* 4. Why A2Z: 4 specific MSME pillars */}
            <WhyA2Z />

            {/* 5. Statutory Compliance Due Dates Widget */}
            <ComplianceCalendarWidget onOpenConsultation={() => handleOpenConsultation()} />

            {/* 6. Testimonials Carousel & Client Logos */}
            <Testimonials />

            {/* 7. Insights & Regulatory FAQ Accordion */}
            <FaqSection onOpenConsultation={() => handleOpenConsultation()} />

            {/* 8. Final CTA Band with Lead Capture & WhatsApp */}
            <ConsultationForm prefilledService={consultationPrefill} />
          </>
        )}
      </main>

      {/* Footer with Gandhipuram address, Google Maps, and credentials */}
      <Footer
        onSelectService={handleSelectService}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Mobile Floating Quick Action (15% sticky height cap compliant) */}
      <MobileQuickContact />

      {/* Global Booking Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        prefilledService={consultationPrefill}
      />
    </div>
  );
}
