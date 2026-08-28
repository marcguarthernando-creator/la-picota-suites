import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { allGalleryPhotos } from '../data/content';
import { Sparkles, Maximize2 } from 'lucide-react';

export const Galeria = ({ onOpenLightbox }) => {
  const { lang, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  const filterButtons = [
    { id: 'all', label: { es: 'Todos', en: 'All' } },
    { id: 'la-picota', label: { es: 'CASA LA PICOTA', en: 'CASA LA PICOTA' } },
    { id: 'la-picota-ii', label: { es: 'LA PICOTA II', en: 'LA PICOTA II' } },
    { id: 'exteriores', label: { es: 'Exteriores & Vistas', en: 'Exteriors & Views' } },
    { id: 'interiores', label: { es: 'Interiores & Diseño', en: 'Interiors & Design' } },
    { id: 'entorno', label: { es: 'Entorno de El Hierro', en: 'El Hierro Island' } },
  ];

  const filteredPhotos = useMemo(() => {
    if (activeFilter === 'all') return allGalleryPhotos;
    if (activeFilter === 'la-picota' || activeFilter === 'la-picota-ii') {
      return allGalleryPhotos.filter((p) => p.house === activeFilter);
    }
    return allGalleryPhotos.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="pt-28 pb-20 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center space-x-1 text-xs uppercase tracking-widest text-olive-700 font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t('nav.gallery')}</span>
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-lava-950">
          {lang === 'es' ? 'Fotografía de gran formato' : 'Large format gallery'}
        </h1>
        <p className="text-stone-custom text-sm sm:text-base leading-relaxed font-normal">
          {lang === 'es'
            ? 'Explora las estancias de CASA LA PICOTA, los rincones contemporáneos de LA PICOTA II y los paisajes sobrecogedores de Los Llanillos.'
            : 'Explore the living spaces of CASA LA PICOTA, the contemporary corners of LA PICOTA II, and the breathtaking scenery of Los Llanillos.'}
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 pb-2">
        {filterButtons.map((btn) => (
          <button
            key={btn.id}
            onClick={() => setActiveFilter(btn.id)}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm ${
              activeFilter === btn.id
                ? 'bg-lava-950 text-cream-100 shadow-md scale-105'
                : 'bg-white text-lava-950 hover:bg-sand-200 border border-sand-400'
            }`}
          >
            {btn.label[lang] || btn.label['es']}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
        {filteredPhotos.map((photo, idx) => (
          <div
            key={photo.id}
            onClick={() => onOpenLightbox(filteredPhotos, idx)}
            className="group relative rounded-3xl overflow-hidden cursor-pointer bg-cream-50 border border-sand-400 shadow-md hover:shadow-2xl transition-all duration-300 aspect-[4/3]"
          >
            <img
              src={photo.url}
              alt={photo.title[lang] || photo.title['es']}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            
            {/* Dark Hover Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-lava-950/90 via-lava-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-6">
              <div className="flex justify-end">
                <span className="p-2 rounded-full bg-lava-950/90 text-cream-100 backdrop-blur-md">
                  <Maximize2 className="w-4 h-4 text-sand-300" />
                </span>
              </div>

              <div className="text-cream-100">
                <p className="font-serif text-lg text-cream-50 font-medium">
                  {photo.title[lang] || photo.title['es']}
                </p>
                <p className="text-[11px] text-sand-300 uppercase tracking-wider font-bold mt-0.5">
                  {photo.house === 'la-picota'
                    ? 'CASA LA PICOTA'
                    : photo.house === 'la-picota-ii'
                    ? 'LA PICOTA II'
                    : 'El Hierro'}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
