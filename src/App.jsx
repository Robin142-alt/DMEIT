import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QuickHelpBanner from './components/QuickHelpBanner';
import ServicesSection from './components/ServicesSection';
import NotSureHelp from './components/NotSureHelp';
import HowItWorks from './components/HowItWorks';
import OurWorkGallery from './components/OurWorkGallery';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';
import ServiceRequestModal from './components/ServiceRequestModal';
import AppointmentModal from './components/AppointmentModal';
import LightboxModal from './components/LightboxModal';
import { projectGallery, companyData } from './data/companyData';
import { MessageCircle } from 'lucide-react';

export default function App() {
  // Service Request Modal State
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  // Appointment Modal State
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  // Lightbox Modal State
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  // Handlers
  const handleOpenRequestModal = (serviceName = '') => {
    setSelectedService(serviceName);
    setIsRequestModalOpen(true);
  };

  const handleCloseRequestModal = () => {
    setIsRequestModalOpen(false);
    setSelectedService('');
  };

  const handleOpenAppointmentModal = () => {
    setIsAppointmentModalOpen(true);
  };

  const handleCloseAppointmentModal = () => {
    setIsAppointmentModalOpen(false);
  };

  const handleOpenLightbox = (index) => {
    setActivePhotoIndex(index);
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
  };

  const handleNavigateLightbox = (newIndex) => {
    setActivePhotoIndex(newIndex);
  };

  const scrollToNotSure = () => {
    const el = document.getElementById('not-sure');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="dmeit-app">
      {/* 1. Header Navigation */}
      <Header
        onRequestService={() => handleOpenRequestModal()}
        onScheduleAppointment={handleOpenAppointmentModal}
      />

      <main>
        {/* 2. Hero Section */}
        <Hero
          onRequestService={() => handleOpenRequestModal()}
          onScheduleAppointment={handleOpenAppointmentModal}
        />

        {/* 3. Quick Help Banner */}
        <QuickHelpBanner
          onNotSureClick={scrollToNotSure}
          onRequestService={() => handleOpenRequestModal('Not Sure / I Need Advice')}
        />

        {/* 4. Practical Services Section */}
        <ServicesSection
          onSelectService={(serviceName) => handleOpenRequestModal(serviceName)}
        />

        {/* 5. Not Sure What You Need Empathy Guide */}
        <NotSureHelp
          onSelectService={(serviceName) => handleOpenRequestModal(serviceName)}
          onOpenRequest={(serviceName) => handleOpenRequestModal(serviceName)}
        />

        {/* 6. How It Works 3-Step Journey */}
        <HowItWorks />

        {/* 7. Real Project Gallery (18 Curated Photos) */}
        <OurWorkGallery onOpenLightbox={handleOpenLightbox} />

        {/* 8. About DMEIT & Director David Nkadayo */}
        <AboutSection onRequestService={() => handleOpenRequestModal()} />

        {/* 9. Contact & In-Page Request Form */}
        <ContactSection onScheduleAppointment={handleOpenAppointmentModal} />
      </main>

      {/* 10. Footer */}
      <Footer
        onRequestService={() => handleOpenRequestModal()}
        onScheduleAppointment={handleOpenAppointmentModal}
      />

      {/* Desktop Floating WhatsApp Launcher */}
      <div className="floating-actions" style={{ display: 'none' }}>
        <a
          href={companyData.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-whatsapp-btn"
          aria-label="Chat directly on WhatsApp"
          title="Chat with DMEIT on WhatsApp"
        >
          <MessageCircle size={28} />
        </a>
      </div>

      {/* Mobile Sticky Action Bar */}
      <MobileStickyBar onRequestService={() => handleOpenRequestModal()} />

      {/* Interactive Modals */}
      <ServiceRequestModal
        isOpen={isRequestModalOpen}
        onClose={handleCloseRequestModal}
        initialService={selectedService}
      />

      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={handleCloseAppointmentModal}
      />

      <LightboxModal
        images={projectGallery}
        activeIndex={activePhotoIndex}
        isOpen={isLightboxOpen}
        onClose={handleCloseLightbox}
        onNavigate={handleNavigateLightbox}
      />

      <style>{`
        @media (min-width: 768px) {
          .floating-actions {
            display: flex !important;
          }
        }
      `}</style>
    </div>
  );
}
