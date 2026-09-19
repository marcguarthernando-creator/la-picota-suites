import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Compass, Waves, Mountain, Clock, Car } from 'lucide-react';
import { surroundingsSpots } from '../data/content';

export const MapSection = ({ onSelectSpot = null }) => {
  const { lang, t } = useLanguage();
  const [activeSpot, setActiveSpot] = useState(surroundingsSpots[0]);

  return (
    <section className="bg-lava-950 text-cream-100 py-16 sm:py-24 rounded-3xl overflow-hidden relative border border-lava-800 shadow-2xl">
      
      {/* Background Volcanic Texture Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-ocean-900/40 via-lava-900 to-lava-950 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-lava-900 text-sand-300 border border-sand-400/30 mb-3 shadow-md">
            <Compass className="w-3.5 h-3.5 text-sand-300" />
            <span>Los Llanillos · El Hierro</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-cream-50 mb-4">
            {lang === 'es' ? 'Ubicación en el Valle de El Golfo' : 'Location in El Golfo Valley'}
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-normal">
            {lang === 'es'
              ? 'Un enclave protegido con el mejor microclima de la isla, a pocos minutos de las piscinas naturales de La Maceta y El Charco Azul.'
              : 'A sheltered enclave with the best microclimate on the island, just minutes from the natural pools of La Maceta and Charco Azul.'}
          </p>
        </div>

        {/* Interactive Grid: Stylized Map Card + Spot Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Stylized Visual Map Representation */}
          <div className="lg:col-span-7 bg-lava-900 rounded-3xl p-6 sm:p-8 border border-lava-700/80 shadow-2xl relative overflow-hidden">
            
            {/* Visual Island Map Vector Illustration */}
            <div className="relative h-72 sm:h-96 w-full rounded-2xl bg-gradient-to-b from-[#141C22] to-[#0D1217] border border-ocean-800/60 overflow-hidden flex items-center justify-center p-4 shadow-inner">
              
              {/* Ocean Wave lines */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="waves" width="60" height="30" patternUnits="userSpaceOnUse">
                      <path d="M 0 15 Q 15 5 30 15 T 60 15" fill="none" stroke="#5B7C93" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#waves)" />
                </svg>
              </div>

              {/* El Hierro Island Shape representation */}
              <div className="relative z-10 w-4/5 h-4/5 max-w-sm flex items-center justify-center">
                <svg viewBox="0 0 300 240" className="w-full h-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]">
                  {/* Island Contour */}
                  <path
                    d="M 50 120 C 60 70, 120 40, 180 50 C 230 60, 270 100, 260 150 C 240 200, 180 220, 120 200 C 70 180, 40 150, 50 120 Z"
                    fill="#262622"
                    stroke="#D7C7AE"
                    strokeWidth="1.8"
                    strokeDasharray="4 2"
                  />

                  {/* El Golfo Crescent Ridge */}
                  <path
                    d="M 70 90 Q 120 120 180 85"
                    fill="none"
                    stroke="#7C8A6F"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />

                  {/* Main Marker: LA PICOTA SUITE */}
                  <g className="cursor-pointer">
                    <circle cx="105" cy="95" r="10" fill="#D7C7AE" fillOpacity="0.4" className="animate-ping" />
                    <circle cx="105" cy="95" r="6" fill="#D7C7AE" />
                    <circle cx="105" cy="95" r="2.5" fill="#141412" />
                    <text x="120" y="98" fill="#FAF9F6" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
                      LA PICOTA SUITE
                    </text>
                    <text x="120" y="112" fill="#D7C7AE" fontSize="9" fontWeight="bold" fontFamily="sans-serif">
                      Los Llanillos
                    </text>
                  </g>

                  {/* Charco Azul Marker */}
                  <g className="cursor-pointer" onClick={() => setActiveSpot(surroundingsSpots[0])}>
                    <circle cx="85" cy="80" r="4.5" fill="#5B7C93" />
                    <text x="45" y="72" fill="#E6ECF1" fontSize="9" fontWeight="bold" fontFamily="sans-serif">
                      Charco Azul
                    </text>
                  </g>

                  {/* La Maceta Marker */}
                  <g className="cursor-pointer" onClick={() => setActiveSpot(surroundingsSpots[1])}>
                    <circle cx="135" cy="75" r="4.5" fill="#5B7C93" />
                    <text x="145" y="70" fill="#E6ECF1" fontSize="9" fontWeight="bold" fontFamily="sans-serif">
                      La Maceta
                    </text>
                  </g>

                  {/* Jinama Viewpoint Marker */}
                  <g className="cursor-pointer" onClick={() => setActiveSpot(surroundingsSpots[2])}>
                    <circle cx="140" cy="115" r="4.5" fill="#7C8A6F" />
                    <text x="150" y="125" fill="#E9EBE6" fontSize="9" fontWeight="bold" fontFamily="sans-serif">
                      Mirador Jinama
                    </text>
                  </g>

                  {/* Airport & Port Indicator */}
                  <g>
                    <circle cx="245" cy="110" r="4" fill="#A3A39D" />
                    <text x="190" y="105" fill="#E5E5E3" fontSize="8" fontWeight="bold" fontFamily="sans-serif">
                      Aeropuerto / Puerto (35 min)
                    </text>
                  </g>
                </svg>
              </div>

              {/* Badge Legend */}
              <div className="absolute bottom-3 left-3 bg-lava-950/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-sand-300/30 text-[10px] text-cream-100 font-bold">
                <span className="inline-block w-2 h-2 rounded-full bg-sand-300 mr-1.5" />
                <span>Los Llanillos · Valle de El Golfo</span>
              </div>
            </div>

            {/* Practical Distances Info */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-5 pt-5 border-t border-lava-700/80 text-xs">
              <div className="flex items-center space-x-2.5 text-stone-300">
                <Waves className="w-4 h-4 text-ocean-300 shrink-0 stroke-[2.5]" />
                <div>
                  <p className="font-bold text-cream-50">5 min</p>
                  <p className="text-[10px] text-stone-400 font-medium">Charco Azul</p>
                </div>
              </div>
              <div className="flex items-center space-x-2.5 text-stone-300">
                <Car className="w-4 h-4 text-sand-300 shrink-0 stroke-[2.5]" />
                <div>
                  <p className="font-bold text-cream-50">35 min</p>
                  <p className="text-[10px] text-stone-400 font-medium">Aeropuerto VDE</p>
                </div>
              </div>
              <div className="flex items-center space-x-2.5 text-stone-300">
                <Mountain className="w-4 h-4 text-olive-300 shrink-0 stroke-[2.5]" />
                <div>
                  <p className="font-bold text-cream-50">8 min</p>
                  <p className="text-[10px] text-stone-400 font-medium">Frontera centro</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Selected Spot Card & Spot Switcher */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="bg-lava-900 rounded-3xl p-6 border border-lava-700/80 shadow-xl animate-fade-in">
              <div className="relative h-48 rounded-2xl overflow-hidden mb-4 border border-lava-700/50">
                <img
                  src={activeSpot.image}
                  alt={activeSpot.title[lang] || activeSpot.title['es']}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-lava-950/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-cream-100 border border-sand-300/30">
                  {activeSpot.category[lang] || activeSpot.category['es']}
                </div>
                <div className="absolute bottom-3 right-3 bg-lava-950/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-sand-300 border border-sand-300/30 flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>{activeSpot.distance[lang] || activeSpot.distance['es']}</span>
                </div>
              </div>

              <h4 className="font-serif text-xl sm:text-2xl text-cream-50 mb-2 font-bold">
                {activeSpot.title[lang] || activeSpot.title['es']}
              </h4>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
                {activeSpot.desc[lang] || activeSpot.desc['es']}
              </p>
            </div>

            {/* Mini Selector Tabs for spots */}
            <div className="grid grid-cols-3 gap-2">
              {surroundingsSpots.slice(0, 6).map((spot) => (
                <button
                  key={spot.id}
                  onClick={() => setActiveSpot(spot)}
                  className={`p-2.5 rounded-2xl text-left text-xs transition-all border ${
                    activeSpot.id === spot.id
                      ? 'bg-sand-300 text-lava-950 font-bold border-sand-300 shadow-md'
                      : 'bg-lava-900/80 text-stone-300 border-lava-700 hover:bg-lava-800 hover:text-cream-100 font-medium'
                  }`}
                >
                  <p className="truncate font-bold">{spot.title[lang] || spot.title['es']}</p>
                  <p className="text-[10px] opacity-90 truncate font-semibold">{spot.distance[lang] || spot.distance['es']}</p>
                </button>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
