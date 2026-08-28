import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { surroundingsSpots } from '../data/content';
import { MapSection } from '../components/MapSection';
import { 
  Compass, 
  Car, 
  Plane, 
  Utensils, 
} from 'lucide-react';

export const Entorno = ({ onNavigate, onOpenBooking }) => {
  const { lang, t } = useLanguage();

  return (
    <div className="pt-28 pb-20 space-y-16 sm:space-y-24">
      
      {/* 1. HERO BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden min-h-[45vh] sm:min-h-[55vh] flex items-center justify-center text-center p-6 sm:p-12 shadow-2xl border border-sand-400">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=85"
            alt="Valle de El Golfo · El Hierro"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-lava-950/75" />

          <div className="relative z-10 max-w-3xl space-y-4 text-cream-100">
            <span className="inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-full bg-lava-950/80 backdrop-blur-md border border-sand-300/40 text-sand-200 text-xs uppercase tracking-widest font-bold shadow-md">
              <Compass className="w-3.5 h-3.5 text-sand-300" />
              <span>Reserva de la Biosfera · UNESCO</span>
            </span>

            <h1 className="font-serif text-4xl sm:text-6xl text-cream-50 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              {lang === 'es' ? 'El Hierro y Los Llanillos' : 'El Hierro & Los Llanillos'}
            </h1>

            <p className="text-cream-100 text-sm sm:text-base font-normal max-w-xl mx-auto leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
              {lang === 'es'
                ? 'Un refugio atlántico donde el tiempo se detiene entre coladas de lava basáltica, piscinas naturales esculpidas por el océano y cielos limpios.'
                : 'An Atlantic haven where time stands still among basalt lava flows, ocean-sculpted tidal pools, and untamed skies.'}
            </p>
          </div>
        </div>
      </section>


      {/* 2. LOS LLANILLOS Y EL VALLE DE EL GOLFO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-olive-700 font-bold block">
              {lang === 'es' ? 'El Lugar' : 'The Location'}
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-lava-950 leading-tight">
              {lang === 'es' ? 'Los Llanillos: la calma al pie del gran risco' : 'Los Llanillos: calm at the foot of the cliffs'}
            </h2>

            <div className="space-y-4 text-stone-custom text-sm sm:text-base leading-relaxed font-normal">
              <p>
                {lang === 'es'
                  ? 'Los Llanillos es un apacible núcleo rural ubicado en el municipio de Frontera, en pleno Valle de El Golfo. Este impresionante valle nació hace más de 100.000 años tras un colosal deslizamiento gravitacional que dejó al descubierto un anfiteatro natural de roca volcánica de más de 1.000 metros de altura.'
                  : 'Los Llanillos is a peaceful rural hamlet nestled in the municipality of Frontera, within the monumental El Golfo Valley. This dramatic valley was formed over 100,000 years ago following a massive geological landslide, unveiling a breathtaking 1,000-meter vertical volcanic wall.'}
              </p>
              <p>
                {lang === 'es'
                  ? 'Su orientación al oeste le otorga un clima excepcionalmente templado y luminoso durante todo el año, convirtiéndolo en el punto base perfecto para desconectar, pasear entre viñedos y bañarse en sus piscinas de lava.'
                  : 'Its western exposure provides an exceptionally mild and luminous climate year-round, making it the supreme home base to unwind, stroll through vineyards, and bathe in natural lava pools.'}
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-sand-400 aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
                alt="Charco Azul · El Hierro"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-lava-950/90 backdrop-blur-md p-4 rounded-2xl text-cream-100 border border-sand-300/30 text-xs shadow-lg">
                <p className="font-bold text-sm text-cream-50">Charco Azul · Los Llanillos</p>
                <p className="text-stone-300 font-medium">A solo 8 minutos de LA PICOTA SUITE</p>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* 3. EXPERIENCES & SPOTS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs uppercase tracking-widest text-olive-700 font-bold">
            {lang === 'es' ? 'Rutas y Descubrimientos' : 'Routes & Discoveries'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-lava-950">
            {lang === 'es' ? 'Lugares imprescindibles en la isla' : 'Essential sights across the island'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {surroundingsSpots.map((spot) => (
            <div
              key={spot.id}
              className="bg-cream-50 rounded-3xl overflow-hidden border border-sand-400 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={spot.image}
                  alt={spot.title[lang]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-lava-950/90 backdrop-blur-md px-3.5 py-1 rounded-full text-[11px] font-bold text-cream-100 border border-sand-300/30 shadow-md">
                  {spot.category[lang]}
                </div>
                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-full text-[11px] font-bold text-lava-950 border border-sand-400 shadow-md">
                  {spot.distance[lang]}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-lava-950 mb-2">
                    {spot.title[lang]}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-custom leading-relaxed font-normal">
                    {spot.desc[lang]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* 4. PRACTICAL TIPS FOR TRAVELERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-sand-100 rounded-3xl p-8 sm:p-12 border border-sand-400 shadow-xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-olive-700 font-bold">
              {lang === 'es' ? 'Consejos de Viaje' : 'Traveler Advice'}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-lava-950">
              {lang === 'es' ? 'Cómo disfrutar al máximo de El Hierro' : 'How to make the most of El Hierro'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-lava-950">
            
            <div className="bg-cream-50 p-6 rounded-2xl border border-sand-400 space-y-3 shadow-md">
              <div className="w-10 h-10 rounded-full bg-ocean-100 text-ocean-700 flex items-center justify-center">
                <Car className="w-5 h-5 stroke-[2.5]" />
              </div>
              <h4 className="font-bold text-base text-lava-950">
                {lang === 'es' ? 'Alquiler de coche' : 'Car Rental'}
              </h4>
              <p className="text-xs sm:text-sm text-stone-custom leading-relaxed font-normal">
                {lang === 'es'
                  ? 'Es fundamental disponer de vehículo propio para moverse con agilidad y acceder a los miradores y piscinas naturales de la isla.'
                  : 'Renting a vehicle is essential to comfortably access viewpoints, secluded coves, and mountain trails across the island.'}
              </p>
            </div>

            <div className="bg-cream-50 p-6 rounded-2xl border border-sand-400 space-y-3 shadow-md">
              <div className="w-10 h-10 rounded-full bg-sand-200 text-sand-700 flex items-center justify-center">
                <Plane className="w-5 h-5 stroke-[2.5]" />
              </div>
              <h4 className="font-bold text-base text-lava-950">
                {lang === 'es' ? 'Vuelos y Ferries' : 'Flights & Ferries'}
              </h4>
              <p className="text-xs sm:text-sm text-stone-custom leading-relaxed font-normal">
                {lang === 'es'
                  ? 'Conexión diaria por avión (Binter/Canaryfly desde Tenerife Norte y Gran Canaria) y ferry desde el Puerto de Los Cristianos.'
                  : 'Daily flights from Tenerife North & Gran Canaria, plus fast ferries from Los Cristianos (Tenerife) directly to Puerto de La Estaca.'}
              </p>
            </div>

            <div className="bg-cream-50 p-6 rounded-2xl border border-sand-400 space-y-3 shadow-md">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <Utensils className="w-5 h-5 stroke-[2.5]" />
              </div>
              <h4 className="font-bold text-base text-lava-950">
                {lang === 'es' ? 'Sabores Locales' : 'Local Flavors'}
              </h4>
              <p className="text-xs sm:text-sm text-stone-custom leading-relaxed font-normal">
                {lang === 'es'
                  ? 'No dejes de probar las quesadillas tradicionales, el queso herreño curado con mojo rojo y los vinos blancos secos de Frontera.'
                  : 'Do not miss traditional handmade quesadillas, artisan smoked goat cheese with mojo sauces, and volcanic white wines.'}
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* 5. INTERACTIVE MAP SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MapSection />
      </div>

    </div>
  );
};
