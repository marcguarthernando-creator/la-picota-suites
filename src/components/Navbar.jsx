import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Calendar, 
  Phone,
  Waves,
  Sparkles,
  MapPin,
  HelpCircle,
  Image as ImageIcon
} from 'lucide-react';

export const Navbar = ({ currentPath, onNavigate, onOpenBooking }) => {
  const { lang, setLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [accommodationsDropdown, setAccommodationsDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path, houseId = null) => {
    onNavigate(path, houseId);
    setMobileMenuOpen(false);
    setAccommodationsDropdown(false);
  };

  const navItems = [
    { label: t('nav.home'), path: 'home' },
    { 
      label: t('nav.accommodations'), 
      path: 'house',
      hasDropdown: true 
    },
    { label: t('nav.gallery'), path: 'galeria' },
    { label: t('nav.faq'), path: 'faq' },
    { label: t('nav.contact'), path: 'contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 bg-[#F4EBE3] border-b border-[#E5D7CA] ${
        isScrolled ? 'py-2.5 shadow-md' : 'py-3.5 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo: Logo WEB Oficial */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-left group focus:outline-none flex items-center"
            aria-label="LA PICOTA SUITE"
          >
            <img
              src="/images/logo-web.png?v=3"
              alt="LA PICOTA SUITE · Los Llanillos"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navItems.map((item, idx) => {
              if (item.hasDropdown) {
                return (
                  <div 
                    key={idx} 
                    className="relative group"
                    onMouseEnter={() => setAccommodationsDropdown(true)}
                    onMouseLeave={() => setAccommodationsDropdown(false)}
                  >
                    <button
                      className={`flex items-center space-x-1 text-sm font-bold transition-colors py-2 ${
                        currentPath === 'house'
                          ? 'text-ocean-700 border-b-2 border-ocean-700'
                          : 'text-lava-950 hover:text-ocean-700'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-3.5 h-3.5 opacity-80 group-hover:rotate-180 transition-transform duration-200" />
                    </button>

                    {/* Accommodations Dropdown Card */}
                    <div
                      className={`absolute top-full left-0 w-72 bg-[#F4EBE3] rounded-2xl shadow-2xl border border-[#E5D7CA] p-3 transition-all duration-200 ${
                        accommodationsDropdown
                          ? 'opacity-100 visible translate-y-1'
                          : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                      }`}
                    >
                      <button
                        onClick={() => handleNavClick('house', 'la-picota')}
                        className="w-full text-left p-3 rounded-xl hover:bg-sand-200/70 transition-colors flex items-start space-x-3 group/sub"
                      >
                        <div className="p-2 rounded-lg bg-sand-200 text-ocean-700 mt-0.5">
                          <Waves className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-xs uppercase tracking-wider text-lava-950">
                              CASA LA PICOTA
                            </span>
                            <span className="text-xs font-bold text-lava-700 group-hover/sub:translate-x-1 transition-transform">→</span>
                          </div>
                          <span className="block text-[11px] text-stone-custom font-normal mt-0.5">
                            {lang === 'es' ? 'Piscina privada · 4 personas' : 'Private pool · 4 guests'}
                          </span>
                        </div>
                      </button>

                      <div className="my-1 border-t border-[#E5D7CA]" />

                      <button
                        onClick={() => handleNavClick('house', 'la-picota-ii')}
                        className="w-full text-left p-3 rounded-xl hover:bg-sand-200/70 transition-colors flex items-start space-x-3 group/sub"
                      >
                        <div className="p-2 rounded-lg bg-sand-200 text-olive-700 mt-0.5">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-xs uppercase tracking-wider text-lava-950">
                              LA PICOTA II
                            </span>
                            <span className="text-xs font-bold text-lava-700 group-hover/sub:translate-x-1 transition-transform">→</span>
                          </div>
                          <span className="block text-[11px] text-stone-custom font-normal mt-0.5">
                            {lang === 'es' ? 'Diseño minimalista · 4 personas' : 'Minimalist design · 4 guests'}
                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                );
              }

              const isActive = currentPath === item.path;
              return (
                <button
                  key={idx}
                  onClick={() => handleNavClick(item.path)}
                  className={`text-sm font-bold transition-colors py-2 relative ${
                    isActive
                      ? 'text-ocean-700'
                      : 'text-lava-950 hover:text-ocean-700'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-ocean-700 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls: Lang Switcher + Booking CTA Button */}
          <div className="hidden sm:flex items-center space-x-4">
            
            {/* Language Switcher */}
            <div className="flex items-center bg-sand-200/80 rounded-full p-1 border border-[#E5D7CA]">
              <button
                onClick={() => setLang('es')}
                className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all ${
                  lang === 'es'
                    ? 'bg-lava-950 text-cream-100 shadow-sm'
                    : 'text-lava-950 hover:text-ocean-700'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all ${
                  lang === 'en'
                    ? 'bg-lava-950 text-cream-100 shadow-sm'
                    : 'text-lava-950 hover:text-ocean-700'
                }`}
              >
                EN
              </button>
            </div>

            {/* Direct Booking Modal CTA */}
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center space-x-2 bg-lava-950 hover:bg-ocean-700 text-cream-100 text-xs uppercase tracking-wider font-bold px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{t('nav.cta')}</span>
            </button>
          </div>

          {/* Mobile Right Controls: Language Switcher & Hamburger */}
          <div className="flex items-center space-x-2 lg:hidden">
            {/* Mobile Lang */}
            <div className="flex items-center bg-sand-200/80 rounded-full p-0.5 border border-[#E5D7CA] text-xs">
              <button
                onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
                className="px-2.5 py-1 font-bold text-lava-950"
              >
                {lang.toUpperCase()}
              </button>
            </div>

            {/* Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-lava-950 hover:bg-sand-200 transition-colors focus:outline-none"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F4EBE3] border-b border-[#E5D7CA] shadow-2xl animate-fade-in px-4 pt-3 pb-8 space-y-4">
          
          <div className="space-y-1">
            <button
              onClick={() => handleNavClick('home')}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
                currentPath === 'home'
                  ? 'bg-sand-200 text-lava-950 font-bold'
                  : 'text-lava-950 hover:bg-sand-200/60'
              }`}
            >
              {t('nav.home')}
            </button>

            {/* Mobile Houses Group */}
            <div className="px-4 py-2 space-y-2">
              <p className="text-[11px] uppercase tracking-widest text-stone-custom font-bold">
                {t('nav.accommodations')}
              </p>
              
              <div className="space-y-1 pl-2 border-l-2 border-sand-300">
                <button
                  onClick={() => handleNavClick('house', 'la-picota')}
                  className="w-full text-left py-2 px-3 rounded-lg hover:bg-sand-200 flex items-center justify-between text-xs font-bold text-lava-950"
                >
                  <span className="flex items-center space-x-2">
                    <Waves className="w-3.5 h-3.5 text-ocean-700" />
                    <span>CASA LA PICOTA (Piscina · 4p)</span>
                  </span>
                  <span className="text-stone-custom">→</span>
                </button>

                <button
                  onClick={() => handleNavClick('house', 'la-picota-ii')}
                  className="w-full text-left py-2 px-3 rounded-lg hover:bg-sand-200 flex items-center justify-between text-xs font-bold text-lava-950"
                >
                  <span className="flex items-center space-x-2">
                    <Sparkles className="w-3.5 h-3.5 text-olive-700" />
                    <span>LA PICOTA II (Minimalista · 4p)</span>
                  </span>
                  <span className="text-stone-custom">→</span>
                </button>
              </div>
            </div>



            <button
              onClick={() => handleNavClick('galeria')}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-colors flex items-center space-x-2 ${
                currentPath === 'galeria'
                  ? 'bg-sand-200 text-lava-950 font-bold'
                  : 'text-lava-950 hover:bg-sand-200/60'
              }`}
            >
              <ImageIcon className="w-4 h-4 text-olive-700" />
              <span>{t('nav.gallery')}</span>
            </button>

            <button
              onClick={() => handleNavClick('faq')}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-colors flex items-center space-x-2 ${
                currentPath === 'faq'
                  ? 'bg-sand-200 text-lava-950 font-bold'
                  : 'text-lava-950 hover:bg-sand-200/60'
              }`}
            >
              <HelpCircle className="w-4 h-4 text-ocean-700" />
              <span>{t('nav.faq')}</span>
            </button>

            <button
              onClick={() => handleNavClick('contacto')}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-colors flex items-center space-x-2 ${
                currentPath === 'contacto'
                  ? 'bg-sand-200 text-lava-950 font-bold'
                  : 'text-lava-950 hover:bg-sand-200/60'
              }`}
            >
              <Phone className="w-4 h-4 text-olive-700" />
              <span>{t('nav.contact')}</span>
            </button>
          </div>

          {/* Mobile CTA */}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 bg-lava-950 hover:bg-ocean-700 text-cream-100 font-bold rounded-full text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>{t('nav.cta')}</span>
            </button>
          </div>

        </div>
      )}
    </header>
  );
};
