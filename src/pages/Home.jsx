import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { housesData, experienceSections, guestReviews, faqsData, allGalleryPhotos } from '../data/content';
import { QuickSearchBar } from '../components/QuickSearchBar';
import { ComparisonTable } from '../components/ComparisonTable';
import { ReviewCard } from '../components/ReviewCard';
import { MapSection } from '../components/MapSection';
import { BookingForm } from '../components/BookingForm';
import { 
  Waves, 
  Sparkles, 
  ArrowRight, 
  Check, 
  Calendar, 
  MessageCircle, 
  ExternalLink,
  ChevronRight,
  Maximize2,
  Star
} from 'lucide-react';

export const Home = ({ onNavigate, onOpenBooking, onOpenLightbox }) => {
  const { lang, t } = useLanguage();

  const [searchParams, setSearchParams] = useState(null);

  const handleQuickSearch = (params) => {
    setSearchParams(params);
    onOpenBooking(params.house, params);
  };

  const previewPhotos = allGalleryPhotos.slice(0, 6);
  const featuredFaqs = faqsData.slice(0, 4);

  return (
    <div className="w-full">
      
      {/* 1. HERO SECTION (Texto elevado en la zona superior para dejar la piscina 100% visible y protagonista) */}
      <section className="relative w-full min-h-[82vh] sm:min-h-[90vh] lg:min-h-[96vh] flex flex-col justify-start pt-28 sm:pt-36 pb-36 sm:pb-44 px-4 sm:px-6 lg:px-8 overflow-hidden bg-lava-950">
        
        {/* Full-width Impact Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/portada.jpg"
            alt="LA PICOTA SUITE · Los Llanillos, El Hierro"
            className="w-full h-full object-cover object-[center_72%] sm:object-[center_65%] transition-all duration-700"
          />
          {/* Gradiente superior suave para lectura del titular, dejando la piscina inferior despejada y luminosa */}
          <div className="absolute inset-0 bg-gradient-to-b from-lava-950/80 via-lava-950/35 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-lava-950/40 to-transparent" />
        </div>

        {/* Hero Content (Concentrado arriba en el cielo y montaña para no tapar la piscina) */}
        <div className="relative z-10 max-w-3xl mx-auto text-center text-cream-100 space-y-4 sm:space-y-5 animate-fade-in-up">
          
          {/* Location Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-lava-950/75 backdrop-blur-md border border-sand-300/40 text-[11px] sm:text-xs tracking-widest uppercase font-semibold text-sand-200 shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-sand-300 animate-pulse" />
            <span>{t('hero.tagline')}</span>
          </div>

          {/* Brand Name & Headline */}
          <div className="space-y-1.5">
            <span className="block text-[11px] sm:text-xs tracking-[0.3em] uppercase text-sand-300 font-bold drop-shadow-md">
              LA PICOTA SUITE
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-6xl tracking-tight leading-[1.1] text-balance font-normal drop-shadow-[0_3px_12px_rgba(0,0,0,0.85)] text-cream-50">
              {t('hero.title')}
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-xs sm:text-base text-cream-100 max-w-xl mx-auto font-normal leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]">
            {t('hero.subtitle')}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1 sm:pt-2">
            <button
              onClick={() => onOpenBooking('both')}
              className="w-full sm:w-auto px-7 py-3 bg-cream-100 text-lava-950 hover:bg-sand-300 font-bold rounded-full text-xs uppercase tracking-wider transition-all duration-300 shadow-2xl hover:shadow-[0_8px_30px_rgba(245,243,238,0.3)] transform hover:-translate-y-0.5 text-center flex items-center justify-center space-x-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{t('hero.ctaPrimary')}</span>
            </button>

            <a
              href="#alojamientos"
              className="w-full sm:w-auto px-7 py-3 bg-lava-950/85 hover:bg-ocean-700 text-cream-100 border border-sand-300/50 backdrop-blur-md font-bold rounded-full text-xs uppercase tracking-wider transition-all duration-300 shadow-2xl hover:shadow-2xl transform hover:-translate-y-0.5 text-center"
            >
              {t('hero.ctaSecondary')}
            </a>
          </div>

          {/* Micro trust indicators (Compactos y elegantes) */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-[11px] text-cream-100">
            <span className="flex items-center space-x-1.5 bg-lava-950/70 backdrop-blur-md px-3 py-1 rounded-full border border-cream-100/20 font-medium shadow-sm">
              <Check className="w-3.5 h-3.5 text-sand-300 shrink-0" />
              <span>{lang === 'es' ? '2 Alojamientos' : '2 Accommodations'}</span>
            </span>
            <span className="flex items-center space-x-1.5 bg-lava-950/70 backdrop-blur-md px-3 py-1 rounded-full border border-cream-100/20 font-medium shadow-sm">
              <Check className="w-3.5 h-3.5 text-sand-300 shrink-0" />
              <span>{lang === 'es' ? 'Piscina Privada' : 'Private Pool'}</span>
            </span>
            <span className="flex items-center space-x-1.5 bg-lava-950/70 backdrop-blur-md px-3 py-1 rounded-full border border-cream-100/20 font-medium shadow-sm">
              <Check className="w-3.5 h-3.5 text-sand-300 shrink-0" />
              <span>{lang === 'es' ? '9.8 en Booking' : '9.8 Booking'}</span>
            </span>
          </div>

        </div>

      </section>

      {/* 2. BUSCADOR / CONSULTA RÁPIDA (Solapado elegante sobre el Hero) */}
      <div className="relative z-20 -mt-6 sm:-mt-10">
        <QuickSearchBar onSearch={handleQuickSearch} />
      </div>

      {/* SUBSEQUENT PAGE SECTIONS */}
      <div className="space-y-20 sm:space-y-28 pt-12 sm:pt-16 pb-16">

        {/* 3. INTRODUCCIÓN CONCEPTUAL */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-cream-50 rounded-3xl p-8 sm:p-14 lg:p-16 border border-sand-400 shadow-xl text-center max-w-4xl mx-auto space-y-4">
            <span className="inline-flex items-center space-x-1 text-xs uppercase tracking-widest text-olive-700 font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t('intro.badge')}</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-lava-950 leading-tight">
              {t('intro.title')}
            </h2>
            <p className="text-stone-custom text-sm sm:text-base leading-relaxed font-normal">
              {t('intro.description')}
            </p>
          </div>
        </section>


        {/* 4. DOS ALOJAMIENTOS, UN MISMO LUGAR */}
        <section id="alojamientos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="inline-flex items-center space-x-1 text-xs uppercase tracking-widest text-olive-700 font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t('twoAccommodations.badge')}</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-lava-950">
              {t('twoAccommodations.title')}
            </h2>
            <p className="text-stone-custom text-sm sm:text-base font-normal">
              {t('twoAccommodations.subtitle')}
            </p>
          </div>

          {/* Two Houses Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
            
            {/* Card 1: CASA LA PICOTA */}
            <div className="bg-cream-50 rounded-3xl overflow-hidden border border-sand-400 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col group">
              
              {/* Image Container */}
              <div className="relative h-72 sm:h-96 overflow-hidden">
                <img
                  src={housesData[0].cardImage}
                  alt="CASA LA PICOTA · Los Llanillos"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-lava-950/85 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-cream-100 flex items-center space-x-1.5 border border-sand-300/40 shadow-md">
                  <Waves className="w-3.5 h-3.5 text-ocean-300" />
                  <span>{lang === 'es' ? 'Piscina Privada' : 'Private Pool'}</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-cream-100 text-xs">
                  <span className="bg-lava-950/85 backdrop-blur-md px-3.5 py-1 rounded-full border border-cream-100/20 font-semibold shadow-md">
                    {housesData[0].specs.surface} · {housesData[0].specs.capacity[lang]}
                  </span>
                  <span className="bg-ocean-800/95 backdrop-blur-md px-3.5 py-1 rounded-full border border-cream-100/20 font-bold shadow-md">
                    {lang === 'es' ? 'Familias & Grupos' : 'Families & Groups'}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-stone-custom font-bold">
                    Alojamiento Principal · Los Llanillos
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-lava-950 mt-1 mb-2">
                    CASA LA PICOTA
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-custom leading-relaxed font-normal">
                    {housesData[0].shortDesc[lang]}
                  </p>

                  {/* Highlights list */}
                  <div className="grid grid-cols-2 gap-2.5 mt-6 pt-6 border-t border-sand-300 text-xs text-lava-950 font-medium">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-ocean-700 shrink-0" />
                      <span>~100 m² de superficie</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-ocean-700 shrink-0" />
                      <span>2 Dormitorios (hasta 4p)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-ocean-700 shrink-0" />
                      <span>Piscina de uso exclusivo</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-ocean-700 shrink-0" />
                      <span>Jardín volcánico & Barbacoa</span>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-6 border-t border-sand-300 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={() => onNavigate('house', 'la-picota')}
                    className="w-full sm:flex-1 py-3.5 bg-lava-950 hover:bg-ocean-700 text-cream-100 text-xs uppercase tracking-wider font-bold rounded-full transition-all shadow-md flex items-center justify-center space-x-2"
                  >
                    <span>{t('twoAccommodations.ctaExplore')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onOpenBooking('la-picota')}
                    className="w-full sm:w-auto px-5 py-3.5 border-2 border-sand-400 hover:bg-sand-200 text-lava-950 text-xs uppercase tracking-wider font-bold rounded-full transition-colors"
                  >
                    {t('twoAccommodations.ctaAvailability')}
                  </button>
                </div>
              </div>

            </div>


            {/* Card 2: LA PICOTA II */}
            <div className="bg-cream-50 rounded-3xl overflow-hidden border border-sand-400 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col group">
              
              {/* Image Container */}
              <div className="relative h-72 sm:h-96 overflow-hidden">
                <img
                  src={housesData[1].cardImage}
                  alt="LA PICOTA II · Los Llanillos"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-lava-950/85 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-cream-100 flex items-center space-x-1.5 border border-sand-300/40 shadow-md">
                  <Sparkles className="w-3.5 h-3.5 text-sand-300" />
                  <span>{lang === 'es' ? 'Minimalista Contemporáneo' : 'Contemporary Minimalist'}</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-cream-100 text-xs">
                  <span className="bg-lava-950/85 backdrop-blur-md px-3.5 py-1 rounded-full border border-cream-100/20 font-semibold shadow-md">
                    {housesData[1].specs.surface} · {housesData[1].specs.capacity[lang]}
                  </span>
                  <span className="bg-olive-800/95 backdrop-blur-md px-3.5 py-1 rounded-full border border-cream-100/20 font-bold shadow-md">
                    {lang === 'es' ? 'Ideal Parejas' : 'Ideal for 2'}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-stone-custom font-bold">
                    Refugio Íntimo · Los Llanillos
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-lava-950 mt-1 mb-2">
                    LA PICOTA II
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-custom leading-relaxed font-normal">
                    {housesData[1].shortDesc[lang]}
                  </p>

                  {/* Highlights list */}
                  <div className="grid grid-cols-2 gap-2.5 mt-6 pt-6 border-t border-sand-300 text-xs text-lava-950 font-medium">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-olive-700 shrink-0" />
                      <span>~70 m² de superficie</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-olive-700 shrink-0" />
                      <span>Espacio cocina-comedor-salón</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-olive-700 shrink-0" />
                      <span>Grandes ventanales panorámicos</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-olive-700 shrink-0" />
                      <span>Terraza y jardín privado</span>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-6 border-t border-sand-300 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={() => onNavigate('house', 'la-picota-ii')}
                    className="w-full sm:flex-1 py-3.5 bg-lava-950 hover:bg-olive-700 text-cream-100 text-xs uppercase tracking-wider font-bold rounded-full transition-all shadow-md flex items-center justify-center space-x-2"
                  >
                    <span>{t('twoAccommodations.ctaExplore')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onOpenBooking('la-picota-ii')}
                    className="w-full sm:w-auto px-5 py-3.5 border-2 border-sand-400 hover:bg-sand-200 text-lava-950 text-xs uppercase tracking-wider font-bold rounded-full transition-colors"
                  >
                    {t('twoAccommodations.ctaAvailability')}
                  </button>
                </div>
              </div>

            </div>

          </div>

        </section>


        {/* 5. COMPARATIVA RÁPIDA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ComparisonTable
            onSelectHouse={(houseId) => onNavigate('house', houseId)}
            onOpenBooking={(houseId) => onOpenBooking(houseId)}
          />
        </section>


        {/* 6. EXPERIENCIA Y CARACTERÍSTICAS (Inspiración Villa Mocanes) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-flex items-center space-x-1 text-xs uppercase tracking-widest text-olive-700 font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t('experience.badge')}</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-lava-950">
              {t('experience.title')}
            </h2>
            <p className="text-stone-custom text-xs sm:text-sm font-normal">
              {t('experience.subtitle')}
            </p>
          </div>

          {/* Narrative Photo-Text Rows */}
          <div className="space-y-12 sm:space-y-16">
            {experienceSections.map((item, idx) => {
              const isReversed = idx % 2 === 1;
              return (
                <div
                  key={item.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-cream-50 rounded-3xl p-6 sm:p-10 border border-sand-400 shadow-lg ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Image */}
                  <div className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/10] group border border-sand-300/60">
                      <img
                        src={item.image}
                        alt={item.title[lang]}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 bg-lava-950/85 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold text-cream-100 border border-sand-300/40 shadow-md">
                        {item.tag[lang]}
                      </div>
                    </div>
                  </div>

                  {/* Text Description */}
                  <div className={`lg:col-span-5 space-y-4 ${isReversed ? 'lg:order-1' : ''}`}>
                    <span className="text-xs uppercase tracking-widest text-olive-700 font-bold">
                      0{idx + 1} · {item.tag[lang]}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-lava-950">
                      {item.title[lang]}
                    </h3>
                    <p className="text-stone-custom text-sm sm:text-base leading-relaxed font-normal">
                      {item.desc[lang]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>


        {/* 7. GALERÍA DESTACADA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 space-y-4 md:space-y-0">
            <div>
              <span className="inline-flex items-center space-x-1 text-xs uppercase tracking-widest text-olive-700 font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t('galleryPreview.badge')}</span>
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-lava-950 mt-1">
                {t('galleryPreview.title')}
              </h2>
              <p className="text-stone-custom text-xs sm:text-sm mt-1 font-normal">
                {t('galleryPreview.subtitle')}
              </p>
            </div>

            <button
              onClick={() => onNavigate('galeria')}
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider font-bold text-lava-950 hover:text-ocean-700 transition-colors"
            >
              <span>{t('galleryPreview.viewAll')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {previewPhotos.map((photo, idx) => (
              <div
                key={idx}
                onClick={() => onOpenLightbox(previewPhotos, idx)}
                className={`relative overflow-hidden rounded-2xl cursor-pointer group shadow-md border border-sand-300/60 ${
                  idx === 0 ? 'col-span-2 md:col-span-2 row-span-2 aspect-[4/3] md:aspect-auto' : 'aspect-square'
                }`}
              >
                <img
                  src={photo.url}
                  alt={photo.title[lang] || photo.title['es']}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-lava-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 sm:p-6">
                  <div className="text-cream-100 flex items-center justify-between w-full">
                    <p className="text-xs sm:text-sm font-bold">
                      {photo.title[lang] || photo.title['es']}
                    </p>
                    <Maximize2 className="w-4 h-4 text-sand-300 shrink-0 ml-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* 8. EL HIERRO / ENTORNO */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MapSection />
        </div>


        {/* 9. OPINIONES DE HUÉSPEDES */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="inline-flex items-center space-x-1 text-xs uppercase tracking-widest text-olive-700 font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>{t('reviews.badge')}</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-lava-950">
              {t('reviews.title')}
            </h2>
            <p className="text-stone-custom text-xs sm:text-sm font-normal">
              {t('reviews.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guestReviews.map((rev) => (
              <ReviewCard key={rev.id} review={rev} />
            ))}
          </div>
        </section>


        {/* 10. CONSULTA DE DISPONIBILIDAD (CTA FINAL) */}
        <section id="reserva" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Editorial Prompt */}
            <div className="lg:col-span-5 space-y-6 lg:pr-6">
              <span className="inline-flex items-center space-x-1 text-xs uppercase tracking-widest text-olive-700 font-bold">
                <Calendar className="w-3.5 h-3.5" />
                <span>{t('bookingCTA.badge')}</span>
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-lava-950 leading-tight">
                {t('bookingCTA.title')}
              </h2>
              <p className="text-stone-custom text-sm sm:text-base leading-relaxed font-normal">
                {t('bookingCTA.subtitle')}
              </p>

              {/* Booking.com info for CASA LA PICOTA */}
              <div className="p-5 rounded-2xl bg-white border border-sand-400 space-y-2 text-xs text-lava-950 shadow-sm">
                <p className="font-bold text-lava-950 flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-ocean-700" />
                  <span>{t('bookingCTA.bookingBadge')}</span>
                </p>
                <p className="text-stone-custom leading-relaxed font-normal">
                  {lang === 'es'
                    ? 'Si prefieres reservar CASA LA PICOTA a través de plataforma, puedes consultar su perfil oficial con reseñas verificadas.'
                    : 'If you prefer booking CASA LA PICOTA via OTA, you can access its official listing with verified reviews.'}
                </p>
                <a
                  href={housesData[0].bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-ocean-700 hover:text-ocean-900 font-bold underline pt-1"
                >
                  <span>{lang === 'es' ? 'Ver perfil oficial en Booking.com' : 'View official Booking.com listing'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="p-5 rounded-2xl bg-emerald-50 border-2 border-emerald-300 flex items-center justify-between text-xs shadow-sm">
                <div className="space-y-0.5">
                  <p className="font-bold text-lava-950 text-sm">
                    {lang === 'es' ? '¿Prefieres atención inmediata?' : 'Prefer immediate attention?'}
                  </p>
                  <p className="text-stone-custom font-semibold">+34 638 672 576</p>
                </div>
                <a
                  href="https://wa.me/34638672576"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full font-bold transition-colors flex items-center space-x-1.5 shadow-md text-xs uppercase tracking-wider"
                >
                  <MessageCircle className="w-4 h-4 fill-white stroke-none" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-7">
              <BookingForm 
                preselectedHouse={searchParams?.house || 'both'}
                initialDates={searchParams}
                compact={false} 
              />
            </div>

          </div>
        </section>


        {/* 11. FAQ HIGHLIGHTS */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 space-y-2">
            <span className="inline-flex items-center space-x-1 text-xs uppercase tracking-widest text-olive-700 font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t('nav.faq')}</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-lava-950">
              {lang === 'es' ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
            </h2>
          </div>

          <div className="space-y-3">
            {featuredFaqs.map((faq) => (
              <details
                key={faq.id}
                className="group bg-cream-50 rounded-2xl border border-sand-400 p-5 sm:p-6 transition-all duration-200 open:shadow-lg"
              >
                <summary className="flex items-center justify-between cursor-pointer font-serif text-lg sm:text-xl text-lava-950 font-bold list-none">
                  <span>{faq.question[lang] || faq.question['es']}</span>
                  <span className="ml-4 p-1.5 rounded-full bg-sand-200 group-open:rotate-90 transition-transform duration-200">
                    <ChevronRight className="w-4 h-4 text-lava-950 font-bold" />
                  </span>
                </summary>
                <p className="mt-4 text-sm text-stone-custom leading-relaxed border-t border-sand-300 pt-3 font-normal">
                  {faq.answer[lang] || faq.answer['es']}
                </p>
              </details>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => onNavigate('faq')}
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider font-bold text-lava-950 hover:text-ocean-700 transition-colors"
            >
              <span>{lang === 'es' ? 'Ver todas las preguntas y normas' : 'View all FAQs & house rules'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

      </div>

    </div>
  );
};
