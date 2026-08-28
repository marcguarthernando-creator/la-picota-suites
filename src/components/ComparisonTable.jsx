import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Check, ArrowRight, Waves, Heart } from 'lucide-react';

export const ComparisonTable = ({ onSelectHouse, onOpenBooking }) => {
  const { lang, t } = useLanguage();

  const comparisonRows = [
    {
      feature: t('comparison.table.surface'),
      picota: '~100 m²',
      picota2: '~70 m²',
      highlight: false,
    },
    {
      feature: t('comparison.table.capacity'),
      picota: lang === 'es' ? 'Hasta 4 huéspedes' : 'Up to 4 guests',
      picota2: lang === 'es' ? 'Ideal 2 huéspedes' : 'Ideal for 2 guests',
      highlight: true,
    },
    {
      feature: t('comparison.table.bedrooms'),
      picota: lang === 'es' ? '2 dormitorios (1 Queen + 2 individuales)' : '2 bedrooms (1 Queen + 2 twins)',
      picota2: lang === 'es' ? '1 habitación independiente (King Size)' : '1 independent bedroom (King Size)',
      highlight: false,
    },
    {
      feature: t('comparison.table.bathrooms'),
      picota: lang === 'es' ? '1 baño completo' : '1 full bathroom',
      picota2: lang === 'es' ? '1 baño contemporáneo' : '1 contemporary bathroom',
      highlight: false,
    },
    {
      feature: t('comparison.table.pool'),
      picota: {
        text: lang === 'es' ? 'Piscina exterior privada exclusiva' : 'Exclusive private outdoor pool',
        included: true,
      },
      picota2: {
        text: lang === 'es' ? 'Piscinas naturales de lava a 8 min' : 'Natural lava sea pools 8 min away',
        included: false,
      },
      highlight: true,
    },
    {
      feature: t('comparison.table.outdoor'),
      picota: lang === 'es' ? 'Terraza solárium, jardín volcánico y barbacoa' : 'Sun terrace, volcanic garden & BBQ',
      picota2: lang === 'es' ? 'Terraza privada, jardín y espacio exterior' : 'Private terrace, garden & outdoor space',
      highlight: false,
    },
    {
      feature: t('comparison.table.views'),
      picota: lang === 'es' ? 'Océano Atlántico y riscos de El Golfo' : 'Atlantic Ocean & El Golfo cliffs',
      picota2: lang === 'es' ? 'Paisaje volcánico y vistas al Atlántico' : 'Volcanic landscape & Atlantic views',
      highlight: false,
    },
    {
      feature: t('comparison.table.style'),
      picota: lang === 'es' ? 'Mayor amplitud y arquitectura canaria cálida' : 'Generous space & warm Canarian design',
      picota2: lang === 'es' ? 'Contemporáneo, minimalista y grandes ventanales' : 'Contemporary minimalist with vast windows',
      highlight: false,
    },
    {
      feature: t('comparison.table.idealFor'),
      picota: lang === 'es' ? 'Familias, grupos pequeños o parejas que buscan espacio' : 'Families, small groups, or couples seeking space',
      picota2: lang === 'es' ? 'Parejas, retiros íntimos y amantes de la calma' : 'Couples, intimate retreats & design enthusiasts',
      highlight: true,
    },
    {
      feature: t('comparison.table.minStay'),
      picota: lang === 'es' ? '3 noches' : '3 nights',
      picota2: lang === 'es' ? '3 noches' : '3 nights',
      highlight: false,
    },
    {
      feature: t('comparison.table.bookingChannel'),
      picota: lang === 'es' ? 'Directa en Web o en Booking.com' : 'Direct on Web or on Booking.com',
      picota2: lang === 'es' ? 'Exclusiva en Web y WhatsApp' : 'Exclusive via Web and WhatsApp',
      highlight: false,
    },
  ];

  return (
    <div className="w-full overflow-hidden bg-cream-50 rounded-3xl border border-sand-400 shadow-xl">
      
      {/* Table Header with Houses Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-b border-sand-400">
        
        {/* Left Column Description Header */}
        <div className="hidden md:flex flex-col justify-end p-6 bg-sand-200/50 border-r border-sand-400">
          <span className="text-xs uppercase tracking-widest text-olive-700 font-bold mb-1">
            {t('comparison.badge')}
          </span>
          <h4 className="font-serif text-2xl text-lava-950">
            {t('comparison.title')}
          </h4>
          <p className="text-xs text-stone-custom mt-1 font-normal">
            {t('comparison.subtitle')}
          </p>
        </div>

        {/* CASA LA PICOTA Card Header */}
        <div className="p-6 bg-sand-100 border-b md:border-b-0 md:border-r border-sand-400 text-center relative flex flex-col justify-between">
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold bg-ocean-800 text-cream-100 shadow-sm">
              <Waves className="w-3 h-3" />
              <span>{lang === 'es' ? 'Con Piscina' : 'With Pool'}</span>
            </span>
          </div>

          <div>
            <span className="text-[11px] uppercase tracking-widest text-stone-custom font-bold">
              LA PICOTA SUITE
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-lava-950 mt-1">
              CASA LA PICOTA
            </h3>
            <p className="text-xs text-stone-custom mt-1 max-w-xs mx-auto font-normal">
              {lang === 'es' ? 'Amplitud (~100 m²), piscina privada y terrazas frente al mar.' : 'Spacious (~100 m²), private pool & sea-facing terraces.'}
            </p>
          </div>

          <div className="mt-5 flex items-center justify-center space-x-2">
            <button
              onClick={() => onSelectHouse('la-picota')}
              className="px-4 py-2 bg-lava-950 hover:bg-ocean-700 text-cream-100 rounded-full text-xs font-bold transition-all shadow-md flex items-center space-x-1"
            >
              <span>{lang === 'es' ? 'Ver CASA LA PICOTA' : 'View CASA LA PICOTA'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onOpenBooking('la-picota')}
              className="px-3.5 py-2 border-2 border-sand-400 hover:bg-sand-200 text-lava-950 rounded-full text-xs font-bold transition-colors"
            >
              {lang === 'es' ? 'Disponibilidad' : 'Availability'}
            </button>
          </div>
        </div>

        {/* LA PICOTA II Card Header */}
        <div className="p-6 bg-sand-200/60 text-center relative flex flex-col justify-between">
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold bg-olive-700 text-cream-100 shadow-sm">
              <Heart className="w-3 h-3" />
              <span>{lang === 'es' ? 'Para 2 · Íntima' : 'For 2 · Intimate'}</span>
            </span>
          </div>

          <div>
            <span className="text-[11px] uppercase tracking-widest text-stone-custom font-bold">
              LA PICOTA SUITE
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-lava-950 mt-1">
              LA PICOTA II
            </h3>
            <p className="text-xs text-stone-custom mt-1 max-w-xs mx-auto font-normal">
              {lang === 'es' ? 'Refugio contemporáneo (~70 m²), grandes ventanales y calma.' : 'Contemporary haven (~70 m²), picture windows & calm.'}
            </p>
          </div>

          <div className="mt-5 flex items-center justify-center space-x-2">
            <button
              onClick={() => onSelectHouse('la-picota-ii')}
              className="px-4 py-2 bg-lava-950 hover:bg-olive-700 text-cream-100 rounded-full text-xs font-bold transition-all shadow-md flex items-center space-x-1"
            >
              <span>{lang === 'es' ? 'Ver LA PICOTA II' : 'View LA PICOTA II'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onOpenBooking('la-picota-ii')}
              className="px-3.5 py-2 border-2 border-sand-400 hover:bg-sand-200 text-lava-950 rounded-full text-xs font-bold transition-colors"
            >
              {lang === 'es' ? 'Disponibilidad' : 'Availability'}
            </button>
          </div>
        </div>

      </div>

      {/* Comparison Rows */}
      <div className="divide-y divide-sand-300 text-xs sm:text-sm">
        {comparisonRows.map((row, idx) => (
          <div
            key={idx}
            className={`grid grid-cols-1 md:grid-cols-3 transition-colors ${
              row.highlight ? 'bg-sand-200/40' : 'hover:bg-sand-100/40'
            }`}
          >
            {/* Feature Name */}
            <div className="p-3.5 sm:p-4 font-bold text-lava-950 bg-sand-200/30 md:bg-transparent md:border-r border-sand-400 flex items-center">
              <span>{row.feature}</span>
            </div>

            {/* CASA LA PICOTA Value */}
            <div className="p-3.5 sm:p-4 text-lava-950 font-medium md:border-r border-sand-400 flex items-center justify-start md:justify-center text-left md:text-center">
              {typeof row.picota === 'object' ? (
                <div className="flex items-center space-x-2 font-bold text-lava-950">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <span>{row.picota.text}</span>
                </div>
              ) : (
                <span>{row.picota}</span>
              )}
            </div>

            {/* LA PICOTA II Value */}
            <div className="p-3.5 sm:p-4 text-lava-950 font-medium flex items-center justify-start md:justify-center text-left md:text-center bg-sand-200/20 md:bg-transparent">
              {typeof row.picota2 === 'object' ? (
                <div className="flex items-center space-x-2 text-stone-custom">
                  <span className="w-5 h-5 rounded-full bg-sand-300 text-lava-900 flex items-center justify-center shrink-0 font-bold">
                    <span className="text-[10px]">~</span>
                  </span>
                  <span>{row.picota2.text}</span>
                </div>
              ) : (
                <span>{row.picota2}</span>
              )}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
