import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MessageCircle, Phone, MapPin, Sparkles, ExternalLink } from 'lucide-react';
import { InstagramIcon } from './Icons';

export const Footer = ({ onNavigate, onOpenBooking, onOpenLegal }) => {
  const { lang, t } = useLanguage();

  return (
    <footer className="bg-[#F4EBE3] text-lava-950 border-t border-[#E5D7CA] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#E5D7CA]">
          
          {/* Col 1: Brand Logo & Story */}
          <div className="lg:col-span-4 space-y-5">
            <button
              onClick={() => onNavigate('home')}
              className="text-left group focus:outline-none block"
            >
              <img
                src="/images/logos/FOOTER.png?v=5"
                alt="LA PICOTA SUITE · Los Llanillos, El Hierro"
                className="h-24 sm:h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </button>

            <p className="text-xs uppercase tracking-widest text-stone-custom font-bold">
              Los Llanillos · El Hierro · Islas Canarias
            </p>
            
            <p className="text-xs sm:text-sm text-stone-custom leading-relaxed max-w-sm font-normal">
              {t('footer.about')}
            </p>

            {/* Social & Direct Contact Badges */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://instagram.com/lapicota_suite"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram LA PICOTA SUITE"
                className="w-10 h-10 rounded-full bg-white border border-[#E5D7CA] flex items-center justify-center text-lava-950 hover:bg-sand-200 hover:text-ocean-700 transition-colors shadow-sm"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/34638672576"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp LA PICOTA SUITE"
                className="w-10 h-10 rounded-full bg-white border border-[#E5D7CA] flex items-center justify-center text-[#25D366] hover:bg-emerald-50 transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-current stroke-none" />
              </a>
            </div>
          </div>

          {/* Col 2: Accommodations Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-lava-950 font-bold">
              {t('footer.houses')}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-custom">
              <li>
                <button
                  onClick={() => onNavigate('house', 'la-picota')}
                  className="hover:text-ocean-700 transition-colors text-left flex items-center space-x-2 font-medium"
                >
                  <span className="w-2 h-2 rounded-full bg-ocean-700 shrink-0" />
                  <span>CASA LA PICOTA (Piscina privada · 4p)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('house', 'la-picota-ii')}
                  className="hover:text-olive-700 transition-colors text-left flex items-center space-x-2 font-medium"
                >
                  <span className="w-2 h-2 rounded-full bg-olive-700 shrink-0" />
                  <span>LA PICOTA II (Minimalista · 2p)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('galeria')}
                  className="hover:text-lava-950 transition-colors text-left font-medium"
                >
                  {t('nav.gallery')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenBooking()}
                  className="hover:text-ocean-700 transition-colors text-left text-lava-950 font-bold"
                >
                  {t('nav.cta')} →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-lava-950 font-bold">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-custom">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-ocean-700 transition-colors text-left font-medium"
                >
                  {t('nav.home')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('entorno')}
                  className="hover:text-ocean-700 transition-colors text-left font-medium"
                >
                  {t('nav.surroundings')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faq')}
                  className="hover:text-ocean-700 transition-colors text-left font-medium"
                >
                  {t('nav.faq')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contacto')}
                  className="hover:text-ocean-700 transition-colors text-left font-medium"
                >
                  {t('nav.contact')}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct Contact & Location */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-lava-950 font-bold">
              {t('footer.contactInfo')}
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-stone-custom">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-ocean-700 shrink-0 mt-0.5" />
                <span className="font-normal">Los Llanillos, 38911 Frontera, El Hierro, Islas Canarias</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-ocean-700 shrink-0" />
                <a href="tel:+34638672576" className="hover:text-ocean-700 transition-colors font-bold text-lava-950">
                  +34 638 672 576
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0 fill-[#25D366] stroke-none" />
                <a
                  href="https://wa.me/34638672576"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-700 transition-colors font-bold text-lava-950"
                >
                  WhatsApp directo
                </a>
              </div>
            </div>

            {/* Biosphere Badge */}
            <div className="pt-2">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#E5D7CA] text-[11px] text-stone-custom font-semibold shadow-sm">
                <Sparkles className="w-3 h-3 text-olive-700" />
                <span>{t('footer.sustainability')}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-custom space-y-4 sm:space-y-0">
          <p className="font-normal">
            © {new Date().getFullYear()} LA PICOTA SUITE. {t('footer.rights')}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-semibold">
            <button
              onClick={() => onOpenLegal('aviso-legal')}
              className="hover:text-lava-950 transition-colors"
            >
              {t('footer.legalNotice')}
            </button>
            <button
              onClick={() => onOpenLegal('privacidad')}
              className="hover:text-lava-950 transition-colors"
            >
              {t('footer.privacyPolicy')}
            </button>
            <button
              onClick={() => onOpenLegal('cookies')}
              className="hover:text-lava-950 transition-colors"
            >
              {t('footer.cookiesPolicy')}
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
