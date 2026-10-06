import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';
import ServiceRequestModal from './components/ServiceRequestModal';
import AppointmentModal from './components/AppointmentModal';
import LightboxModal from './components/LightboxModal';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import OurWorkPage from './pages/OurWorkPage';
import HowItWorksPage from './pages/HowItWorksPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
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

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="dmeit-app">
        {/* Navigation Header */}
        <Header onRequestService={() => handleOpenRequestModal()} />

        {/* Page Routing */}
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onRequestService={handleOpenRequestModal}
                  onScheduleAppointment={handleOpenAppointmentModal}
                  onOpenLightbox={handleOpenLightbox}
                />
              }
            />
            <Route
              path="/services"
              element={<ServicesPage onRequestService={handleOpenRequestModal} />}
            />
            <Route
              path="/our-work"
              element={
                <OurWorkPage
                  onOpenLightbox={handleOpenLightbox}
                  onRequestService={handleOpenRequestModal}
                />
              }
            />
            <Route
              path="/how-it-works"
              element={
                <HowItWorksPage
                  onRequestService={handleOpenRequestModal}
                  onScheduleAppointment={handleOpenAppointmentModal}
                />
              }
            />
            <Route
              path="/about"
              element={<AboutPage onRequestService={handleOpenRequestModal} />}
            />
            <Route
              path="/contact"
              element={<ContactPage onScheduleAppointment={handleOpenAppointmentModal} />}
            />
            {/* Fallback to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer */}
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

        {/* Modals Accessible Across All Pages */}
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
    </BrowserRouter>
  );
}
