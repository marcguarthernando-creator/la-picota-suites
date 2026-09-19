import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { housesData } from '../data/content';
import { 
  Waves, 
  Sparkles, 
  ArrowLeft, 
  Calendar, 
  MessageCircle, 
  Check, 
  ExternalLink, 
  Maximize2, 
  Wifi, 
  Car, 
  Coffee, 
  Tv, 
  Sun, 
  Eye, 
  Star 
} from 'lucide-react';

export const HouseDetail = ({ houseId, onNavigate, onOpenBooking, onOpenLightbox }) => {
  const { lang, t } = useLanguage();

  const normalizedId = houseId === 'salmor' ? 'la-picota-ii' : houseId;
  const house = housesData.find((h) => h.id === normalizedId) || housesData[0];
  const isPicota1 = house.id === 'la-picota';

  const otherHouse = housesData.find((h) => h.id !== house.id);

  // Icon map for amenities
  const getAmenityIcon = (key) => {
    switch (key) {
      case 'pool':
        return <Waves className="w-5 h-5 text-ocean-700" />;
      case 'wifi':
        return <Wifi className="w-5 h-5 text-ocean-700" />;
      case 'parking':
        return <Car className="w-5 h-5 text-ocean-700" />;
      case 'coffee':
      case 'kitchen':
        return <Coffee className="w-5 h-5 text-ocean-700" />;
      case 'tv':
        return <Tv className="w-5 h-5 text-ocean-700" />;
      case 'terrace':
      case 'openSpace':
      case 'garden':
      case 'bbq':
        return <Sun className="w-5 h-5 text-ocean-700" />;
      case 'seaView':
      case 'mountainView':
      case 'panoramicWindows':
        return <Eye className="w-5 h-5 text-ocean-700" />;
      default:
        return <Check className="w-5 h-5 text-olive-700" />;
    }
  };

  const whatsappMessage = t(
    isPicota1 ? 'whatsapp.messages.casaLaPicota' : 'whatsapp.messages.laPicota2'
  );
  const whatsappUrl = `https://wa.me/34646293385?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="pt-28 pb-20 space-y-16 sm:space-y-24">
      
      {/* 1. TOP BREADCRUMB & BACK NAV */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider font-bold text-lava-950 hover:text-ocean-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{lang === 'es' ? 'Volver al Inicio' : 'Back to Home'}</span>
        </button>
      </div>

      {/* 2. HERO IMAGE & TITLE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-sand-400 min-h-[50vh] sm:min-h-[65vh] flex items-end">
          
          <img
            src={house.heroImage}
            alt={house.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-lava-950 via-lava-950/60 to-lava-950/20" />

          {/* Hero Details Overlay */}
          <div className="relative z-10 p-6 sm:p-12 lg:p-16 text-cream-100 max-w-4xl space-y-4">
            
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="bg-lava-950/80 backdrop-blur-md border border-sand-300/40 text-sand-200 text-xs px-3.5 py-1 rounded-full uppercase tracking-widest font-bold shadow-md">
                LA PICOTA SUITE · Los Llanillos
              </span>
              
              {isPicota1 ? (
                <span className="bg-ocean-800/90 backdrop-blur-md text-cream-100 text-xs px-3.5 py-1 rounded-full font-bold flex items-center space-x-1 border border-cream-100/20 shadow-md">
                  <Waves className="w-3.5 h-3.5 text-ocean-300" />
                  <span>{lang === 'es' ? 'Piscina Privada' : 'Private Pool'}</span>
                </span>
              ) : (
                <span className="bg-olive-800/90 backdrop-blur-md text-cream-100 text-xs px-3.5 py-1 rounded-full font-bold flex items-center space-x-1 border border-cream-100/20 shadow-md">
                  <Sparkles className="w-3.5 h-3.5 text-sand-300" />
                  <span>{lang === 'es' ? 'Refugio Minimalista' : 'Minimalist Haven'}</span>
                </span>
              )}

              {house.bookingScore && (
                <span className="bg-cream-100 text-lava-950 text-xs px-3.5 py-1 rounded-full font-bold flex items-center space-x-1 shadow-md">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span>{house.bookingScore} Booking.com</span>
                </span>
              )}
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream-50 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              {house.name}
            </h1>

            <p className="text-cream-100 text-base sm:text-lg font-normal max-w-2xl leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
              {house.subtitle[lang]}
            </p>

            {/* Quick action bar */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenBooking(house.id)}
                className="px-6 py-3 bg-cream-100 hover:bg-sand-300 text-lava-950 font-bold rounded-full text-xs uppercase tracking-wider transition-all shadow-xl hover:shadow-2xl flex items-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>{t('nav.cta')}</span>
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold rounded-full text-xs uppercase tracking-wider transition-all shadow-xl flex items-center space-x-2"
              >
                <MessageCircle className="w-4 h-4 fill-white stroke-none" />
                <span>WhatsApp</span>
              </a>

              {house.hasBookingLink && house.bookingUrl && (
                <a
                  href={house.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-lava-950/85 hover:bg-lava-900 text-cream-100 border border-sand-300/40 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center space-x-2"
                >
                  <span>Booking.com</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

          </div>

        </div>
      </section>


      {/* 3. KEY SPECS BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 sm:p-8 bg-cream-50 rounded-3xl border border-sand-400 shadow-xl text-lava-950 text-center">
          <div className="space-y-1 border-r border-sand-300 pr-2">
            <span className="text-[11px] uppercase tracking-widest text-stone-custom font-bold">
              {t('comparison.table.surface')}
            </span>
            <p className="font-serif text-xl sm:text-2xl text-lava-950 font-bold">
              {house.specs.surface}
            </p>
          </div>

          <div className="space-y-1 sm:border-r border-sand-300 pr-2">
            <span className="text-[11px] uppercase tracking-widest text-stone-custom font-bold">
              {t('comparison.table.capacity')}
            </span>
            <p className="font-serif text-lg sm:text-xl text-lava-950 font-bold">
              {house.specs.capacity[lang]}
            </p>
          </div>

          <div className="space-y-1 border-r border-sand-300 pr-2">
            <span className="text-[11px] uppercase tracking-widest text-stone-custom font-bold">
              {t('comparison.table.bedrooms')}
            </span>
            <p className="font-serif text-lg sm:text-xl text-lava-950 font-bold">
              {house.specs.bedrooms[lang]}
            </p>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] uppercase tracking-widest text-stone-custom font-bold">
              {t('comparison.table.bathrooms')}
            </span>
            <p className="font-serif text-lg sm:text-xl text-lava-950 font-bold">
              {house.specs.bathrooms[lang]}
            </p>
          </div>
        </div>
      </section>


      {/* 4. EDITORIAL GALLERY GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-serif text-2xl sm:text-3xl text-lava-950">
            {lang === 'es' ? 'Galería del alojamiento' : 'Accommodation Gallery'}
          </h2>
          <button
            onClick={() => onOpenLightbox(house.gallery, 0)}
            className="text-xs uppercase tracking-wider font-bold text-ocean-700 hover:text-ocean-900 flex items-center space-x-1"
          >
            <span>{lang === 'es' ? 'Abrir visor a pantalla completa' : 'Open fullscreen viewer'}</span>
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {house.gallery.map((img, idx) => (
            <div
              key={idx}
              onClick={() => onOpenLightbox(house.gallery, idx)}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group shadow-md border border-sand-300/60 ${
                idx === 0 ? 'col-span-2 row-span-2 aspect-[4/3] md:aspect-auto' : 'aspect-square'
              }`}
            >
              <img
                src={img.url}
                alt={img.caption[lang] || house.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-lava-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-xs sm:text-sm text-cream-100 font-bold">
                  {img.caption[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* 5. DESCRIPTION & AMENITIES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Long Description */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-widest text-olive-700 font-bold block">
              {lang === 'es' ? 'La Experiencia' : 'The Experience'}
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-lava-950">
              {lang === 'es' ? 'Un espacio diseñado para habitar la calma' : 'A space designed to inhabit calmness'}
            </h3>
            
            <div className="text-stone-custom text-sm sm:text-base leading-relaxed space-y-4 font-normal">
              {house.longDesc[lang].split('\n\n').map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph.trim()}</p>
              ))}
            </div>

            {/* Detailed Spec breakdown */}
            <div className="pt-6 border-t border-sand-400 space-y-3 text-xs sm:text-sm text-lava-950">
              <div className="flex justify-between py-2 border-b border-sand-300">
                <span className="text-stone-custom font-bold">{t('comparison.table.bedrooms')}:</span>
                <span className="font-bold text-right text-lava-950">{house.specs.beds[lang]}</span>
              </div>
              {house.specs.pool && (
                <div className="flex justify-between py-2 border-b border-sand-300">
                  <span className="text-stone-custom font-bold">{t('comparison.table.pool')}:</span>
                  <span className="font-bold text-right text-lava-950">{house.specs.pool[lang]}</span>
                </div>
              )}
              <div className="flex justify-between py-2 border-b border-sand-300">
                <span className="text-stone-custom font-bold">{t('comparison.table.outdoor')}:</span>
                <span className="font-bold text-right text-lava-950">{house.specs.outdoor[lang]}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-sand-300">
                <span className="text-stone-custom font-bold">{t('comparison.table.views')}:</span>
                <span className="font-bold text-right text-lava-950">{house.specs.views[lang]}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-stone-custom font-bold">{t('comparison.table.minStay')}:</span>
                <span className="font-bold text-right text-lava-950">{house.specs.minStay[lang]}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Amenities & Booking Card */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Amenities Grid Box */}
            <div className="bg-cream-50 p-6 sm:p-8 rounded-3xl border border-sand-400 shadow-xl space-y-6">
              <h4 className="font-serif text-2xl text-lava-950">
                {lang === 'es' ? 'Servicios y equipamiento' : 'Amenities & Features'}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm text-lava-950 font-medium">
                {house.amenitiesList.map((amenityKey) => (
                  <div key={amenityKey} className="flex items-center space-x-2.5">
                    {getAmenityIcon(amenityKey)}
                    <span>{t(`amenities.${amenityKey}`)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Booking CTA Box */}
            <div className="bg-sand-100 p-6 sm:p-8 rounded-3xl border border-sand-400 shadow-xl text-center space-y-4">
              <h4 className="font-serif text-2xl text-lava-950">
                {lang === 'es' ? `¿Deseas consultar disponibilidad en ${house.name}?` : `Check availability at ${house.name}?`}
              </h4>
              <p className="text-stone-custom text-xs sm:text-sm font-normal">
                {lang === 'es'
                  ? 'Envíanos tus fechas de viaje y te responderemos con disponibilidad y tarifas personalizadas.'
                  : 'Send us your travel dates and we will reply promptly with custom availability and rates.'}
              </p>

              <div className="pt-2 space-y-3">
                <button
                  onClick={() => onOpenBooking(house.id)}
                  className="w-full py-4 bg-lava-950 hover:bg-ocean-700 text-cream-100 font-bold rounded-full text-xs uppercase tracking-wider transition-all shadow-xl hover:shadow-2xl"
                >
                  {t('nav.cta')}
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold rounded-full text-xs uppercase tracking-wider transition-all shadow-lg flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white stroke-none" />
                  <span>WhatsApp (+34 646 29 33 85)</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* 6. SWITCHER TO OTHER HOUSE */}
      {otherHouse && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-lava-950 text-cream-100 rounded-3xl p-8 sm:p-12 border border-lava-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs uppercase tracking-widest text-sand-300 font-bold">
                {lang === 'es' ? 'Descubre también' : 'Also discover'}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-cream-50">
                {otherHouse.name}
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm max-w-lg font-normal">
                {otherHouse.subtitle[lang]}
              </p>
            </div>

            <button
              onClick={() => onNavigate('house', otherHouse.id)}
              className="px-8 py-4 bg-sand-300 text-lava-950 hover:bg-cream-100 font-bold rounded-full text-xs uppercase tracking-wider transition-all shadow-xl shrink-0 flex items-center space-x-2"
            >
              <span>{lang === 'es' ? `Ver ${otherHouse.name}` : `View ${otherHouse.name}`}</span>
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </button>
          </div>
        </section>
      )}

    </div>
  );
};
