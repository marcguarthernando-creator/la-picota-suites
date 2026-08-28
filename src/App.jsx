import React, { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Lightbox } from './components/Lightbox';
import { BookingModal } from './components/BookingModal';
import { LegalModal } from './pages/Legal';

import { Home } from './pages/Home';
import { HouseDetail } from './pages/HouseDetail';
import { Entorno } from './pages/Entorno';
import { Galeria } from './pages/Galeria';
import { FAQ } from './pages/FAQ';
import { Contacto } from './pages/Contacto';

const MainApp = () => {
  const { lang } = useLanguage();

  // Navigation State
  const [currentPath, setCurrentPath] = useState('home');
  const [selectedHouseId, setSelectedHouseId] = useState('la-picota');

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Booking Modal State
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingPreselectedHouse, setBookingPreselectedHouse] = useState('both');
  const [bookingInitialDates, setBookingInitialDates] = useState(null);

  // Legal Modal State
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState('aviso-legal');

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash || hash === 'inicio' || hash === 'home') {
        setCurrentPath('home');
      } else if (hash === 'casa-la-picota' || hash === 'la-picota') {
        setCurrentPath('house');
        setSelectedHouseId('la-picota');
      } else if (hash === 'la-picota-ii' || hash === 'casa-salmor' || hash === 'salmor') {
        setCurrentPath('house');
        setSelectedHouseId('la-picota-ii');
      } else if (hash === 'entorno') {
        setCurrentPath('entorno');
      } else if (hash === 'galeria') {
        setCurrentPath('galeria');
      } else if (hash === 'faq') {
        setCurrentPath('faq');
      } else if (hash === 'contacto') {
        setCurrentPath('contacto');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (path, houseId = null) => {
    setCurrentPath(path);
    if (houseId) {
      const normId = (houseId === 'salmor') ? 'la-picota-ii' : houseId;
      setSelectedHouseId(normId);
    }

    // Update URL hash smoothly
    let targetHash = path;
    if (path === 'house') {
      targetHash = (houseId === 'la-picota') ? 'casa-la-picota' : 'la-picota-ii';
    } else if (path === 'home') {
      targetHash = 'inicio';
    }
    window.location.hash = targetHash;

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (houseId = 'both', initialDates = null) => {
    const normId = (houseId === 'salmor') ? 'la-picota-ii' : houseId;
    setBookingPreselectedHouse(normId || 'both');
    setBookingInitialDates(initialDates);
    setBookingModalOpen(true);
  };

  const handleOpenLightbox = (imagesList, index = 0) => {
    setLightboxImages(imagesList);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleOpenLegal = (type = 'aviso-legal') => {
    setLegalModalType(type);
    setLegalModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream-100 text-lava-900 selection:bg-sand-300 selection:text-lava-950 font-sans">
      
      {/* Top Fixed Header Navbar */}
      <Navbar
        currentPath={currentPath}
        onNavigate={navigateTo}
        onOpenBooking={() => handleOpenBooking('both')}
      />

      {/* Main Routed Page Content */}
      <main className="flex-1">
        {currentPath === 'home' && (
          <Home
            onNavigate={navigateTo}
            onOpenBooking={handleOpenBooking}
            onOpenLightbox={handleOpenLightbox}
          />
        )}

        {currentPath === 'house' && (
          <HouseDetail
            houseId={selectedHouseId}
            onNavigate={navigateTo}
            onOpenBooking={handleOpenBooking}
            onOpenLightbox={handleOpenLightbox}
          />
        )}

        {currentPath === 'entorno' && (
          <Entorno
            onNavigate={navigateTo}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentPath === 'galeria' && (
          <Galeria
            onOpenLightbox={handleOpenLightbox}
          />
        )}

        {currentPath === 'faq' && (
          <FAQ
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentPath === 'contacto' && (
          <Contacto
            onOpenBooking={handleOpenBooking}
          />
        )}
      </main>

      {/* Persistent Floating Contextual WhatsApp */}
      <FloatingWhatsApp
        currentPath={currentPath}
        currentHouseId={selectedHouseId}
      />

      {/* Global Lightbox Component */}
      <Lightbox
        isOpen={lightboxOpen}
        images={lightboxImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={() =>
          setLightboxIndex((prev) => (prev > 0 ? prev - 1 : lightboxImages.length - 1))
        }
        onNext={() =>
          setLightboxIndex((prev) => (prev < lightboxImages.length - 1 ? prev + 1 : 0))
        }
      />

      {/* Global Booking Modal Component */}
      <BookingModal
        isOpen={bookingModalOpen}
        preselectedHouse={bookingPreselectedHouse}
        initialDates={bookingInitialDates}
        onClose={() => setBookingModalOpen(false)}
      />

      {/* Global Legal Modal Component */}
      <LegalModal
        isOpen={legalModalOpen}
        type={legalModalType}
        onClose={() => setLegalModalOpen(false)}
      />

      {/* Page Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenBooking={handleOpenBooking}
        onOpenLegal={handleOpenLegal}
      />

    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}
