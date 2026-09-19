import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { faqsData } from '../data/content';
import { HelpCircle, Search, ChevronRight, MessageCircle } from 'lucide-react';

export const FAQ = ({ onOpenBooking }) => {
  const { lang, t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: { es: 'Todas las preguntas', en: 'All Questions' } },
    { id: 'general', label: { es: 'Ubicación y Entorno', en: 'Location & Island' } },
    { id: 'houses', label: { es: 'Diferencias de las Casas', en: 'House Differences' } },
    { id: 'booking', label: { es: 'Reservas y Tarifas', en: 'Bookings & Rates' } },
    { id: 'services', label: { es: 'Servicios y Normas', en: 'Services & Rules' } },
  ];

  const filteredFaqs = useMemo(() => {
    return faqsData.filter((faq) => {
      const matchesCat = activeCategory === 'all' || faq.category === activeCategory;
      const qText = (faq.question[lang] || faq.question['es']).toLowerCase();
      const aText = (faq.answer[lang] || faq.answer['es']).toLowerCase();
      const matchesSearch =
        qText.includes(searchTerm.toLowerCase()) || aText.includes(searchTerm.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [activeCategory, searchTerm, lang]);

  return (
    <div className="pt-28 pb-20 space-y-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <span className="inline-flex items-center space-x-1 text-xs uppercase tracking-widest text-olive-700 font-bold">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>{t('nav.faq')}</span>
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-lava-950">
          {lang === 'es' ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
        </h1>
        <p className="text-stone-custom text-sm sm:text-base max-w-xl mx-auto font-normal">
          {lang === 'es'
            ? 'Todo lo que necesitas saber sobre CASA LA PICOTA, LA PICOTA II y tu estancia en Los Llanillos, El Hierro.'
            : 'Everything you need to know about CASA LA PICOTA, LA PICOTA II, and your stay in Los Llanillos, El Hierro.'}
        </p>
      </div>

      {/* Search Input Bar */}
      <div className="relative max-w-lg mx-auto">
        <Search className="w-4 h-4 text-stone-custom absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder={lang === 'es' ? 'Buscar una duda (piscina, check-in, wifi, mascotas...)' : 'Search a query (pool, check-in, wifi, pets...)'}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-11 pr-4 py-3.5 bg-white border border-sand-400 rounded-full text-sm font-bold text-lava-950 placeholder:text-stone-custom/70 focus:ring-2 focus:ring-ocean-700 focus:outline-none shadow-sm"
        />
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm ${
              activeCategory === cat.id
                ? 'bg-lava-950 text-cream-100 shadow-md scale-105'
                : 'bg-white text-lava-950 hover:bg-sand-200 border border-sand-400'
            }`}
          >
            {cat.label[lang] || cat.label['es']}
          </button>
        ))}
      </div>

      {/* FAQ Accordion List */}
      <div className="space-y-4 pt-4 animate-fade-in">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq) => (
            <details
              key={faq.id}
              className="group bg-cream-50 rounded-2xl border border-sand-400 p-6 transition-all duration-200 open:shadow-xl"
            >
              <summary className="flex items-center justify-between cursor-pointer font-serif text-lg sm:text-xl text-lava-950 font-bold list-none">
                <span>{faq.question[lang] || faq.question['es']}</span>
                <span className="ml-4 p-2 rounded-full bg-sand-200 group-open:rotate-90 transition-transform duration-200 shrink-0">
                  <ChevronRight className="w-4 h-4 text-lava-950 font-bold" />
                </span>
              </summary>
              <p className="mt-4 text-xs sm:text-sm text-stone-custom leading-relaxed border-t border-sand-300 pt-4 font-normal">
                {faq.answer[lang] || faq.answer['es']}
              </p>
            </details>
          ))
        ) : (
          <div className="text-center py-12 bg-cream-50 rounded-2xl border border-sand-400 p-8 shadow-sm">
            <p className="text-sm text-stone-custom font-normal">
              {lang === 'es'
                ? 'No encontramos preguntas que coincidan con tu búsqueda.'
                : 'No questions matched your search criteria.'}
            </p>
            <a
              href="https://wa.me/34646293385"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-xs font-bold text-ocean-700 hover:text-ocean-900 mt-3"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{lang === 'es' ? 'Pregúntanos directamente por WhatsApp' : 'Ask us directly on WhatsApp'}</span>
            </a>
          </div>
        )}
      </div>

      {/* Direct Contact Prompt */}
      <div className="bg-sand-100 rounded-3xl p-8 text-center border border-sand-400 space-y-4 shadow-xl">
        <h3 className="font-serif text-2xl text-lava-950 font-bold">
          {lang === 'es' ? '¿Tienes otra consulta sobre LA PICOTA SUITE?' : 'Have another query about LA PICOTA SUITE?'}
        </h3>
        <p className="text-stone-custom text-xs sm:text-sm max-w-md mx-auto font-normal">
          {lang === 'es'
            ? 'Estamos a tu entera disposición para resolver cualquier duda sobre tu estancia o los alojamientos.'
            : 'We are here to assist you with any questions regarding your stay or accommodations.'}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href="https://wa.me/34646293385"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center space-x-2 shadow-lg"
          >
            <MessageCircle className="w-4 h-4 fill-white stroke-none" />
            <span>WhatsApp (+34 646 29 33 85)</span>
          </a>

          <button
            onClick={() => onOpenBooking()}
            className="px-6 py-3 bg-lava-950 hover:bg-ocean-700 text-cream-100 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-lg"
          >
            {t('nav.cta')}
          </button>
        </div>
      </div>

    </div>
  );
};
