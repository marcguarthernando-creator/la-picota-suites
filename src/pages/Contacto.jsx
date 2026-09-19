import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BookingForm } from '../components/BookingForm';
import { InstagramIcon } from '../components/Icons';
import { 
  Phone, 
  MapPin, 
  MessageCircle, 
  Calendar, 
  ShieldCheck, 
  CheckCircle2 
} from 'lucide-react';

export const Contacto = ({ onOpenBooking }) => {
  const { lang, t } = useLanguage();

  return (
    <div className="pt-28 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center space-x-1 text-xs uppercase tracking-widest text-olive-700 font-bold">
          <Calendar className="w-3.5 h-3.5" />
          <span>{t('nav.contact')}</span>
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-lava-950">
          {lang === 'es' ? 'Consulta de Reserva y Contacto' : 'Booking Request & Contact'}
        </h1>
        <p className="text-stone-custom text-sm sm:text-base leading-relaxed font-normal">
          {lang === 'es'
            ? 'Planifica tu estancia en CASA LA PICOTA o LA PICOTA II. Respondemos personalmente a cada solicitud para garantizar una experiencia a medida.'
            : 'Plan your stay at CASA LA PICOTA or LA PICOTA II. We personally reply to every inquiry to ensure a tailored, serene experience.'}
        </p>
      </div>

      {/* Main Grid: Form + Info Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Form */}
        <div className="lg:col-span-7">
          <BookingForm compact={false} />
        </div>

        {/* Right Column: Contact Cards & Practical Steps */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Direct WhatsApp Card */}
          <div className="bg-emerald-50/90 p-6 sm:p-8 rounded-3xl border-2 border-emerald-300 shadow-xl space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-md shrink-0">
                <MessageCircle className="w-6 h-6 fill-white stroke-none" />
              </div>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-lava-950 font-bold">
                  {lang === 'es' ? 'Atención Inmediata WhatsApp' : 'Immediate WhatsApp Chat'}
                </h3>
                <p className="text-xs text-stone-custom font-bold">
                  {lang === 'es' ? 'Respuesta directa todos los días' : 'Daily direct host support'}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-custom leading-relaxed font-normal">
              {lang === 'es'
                ? '¿Deseas consultar disponibilidad para fechas concretas de forma rápida? Escríbenos directamente y te atenderemos al instante.'
                : 'Want to check availability quickly for specific dates? Write to us directly and we will assist you immediately.'}
            </p>

            <a
              href="https://wa.me/34646293385"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 w-full py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold rounded-full text-xs uppercase tracking-wider transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-white stroke-none" />
              <span>+34 646 29 33 85</span>
            </a>
          </div>

          {/* Location & Details Card */}
          <div className="bg-cream-50 p-6 sm:p-8 rounded-3xl border border-sand-400 shadow-xl space-y-5 text-lava-950">
            <h3 className="font-serif text-2xl text-lava-950 border-b border-sand-300 pb-3 font-bold">
              {lang === 'es' ? 'Datos de Ubicación' : 'Location & Channels'}
            </h3>

            <div className="space-y-4 text-xs sm:text-sm text-stone-custom">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-ocean-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-lava-950 block font-bold">
                    {lang === 'es' ? 'Ubicación' : 'Location'}
                  </strong>
                  <span className="font-normal text-stone-custom">Los Llanillos, 38911 Frontera, Valle de El Golfo, El Hierro, Islas Canarias</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-ocean-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-lava-950 block font-bold">
                    {lang === 'es' ? 'Teléfono de Contacto' : 'Phone Contact'}
                  </strong>
                  <a href="tel:+34646293385" className="text-lava-950 hover:text-ocean-700 font-bold underline">
                    +34 646 29 33 85
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <InstagramIcon className="w-5 h-5 text-ocean-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-lava-950 block font-bold">
                    Instagram Oficial
                  </strong>
                  <a
                    href="https://www.instagram.com/lapicotasuite?stkn=MmhzNWJzOTF5bWky&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lava-950 hover:text-ocean-700 font-bold underline"
                  >
                    @lapicotasuite
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* How the Process Works */}
          <div className="bg-sand-100 p-6 sm:p-8 rounded-3xl border border-sand-400 space-y-4 shadow-md">
            <h4 className="font-bold text-lava-950 text-sm sm:text-base flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-olive-700" />
              <span>{lang === 'es' ? '¿Cómo funciona la reserva?' : 'How does booking work?'}</span>
            </h4>

            <ul className="space-y-2.5 text-xs text-stone-custom font-normal">
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5 stroke-[2.5]" />
                <span>
                  {lang === 'es'
                    ? '1. Envías tu consulta con fechas y número de huéspedes.'
                    : '1. Submit your inquiry with dates and guest count.'}
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5 stroke-[2.5]" />
                <span>
                  {lang === 'es'
                    ? '2. Verificamos el calendario y te confirmamos disponibilidad y tarifa final.'
                    : '2. We review availability and confirm your final rate and terms.'}
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5 stroke-[2.5]" />
                <span>
                  {lang === 'es'
                    ? '3. Formalizas tu estancia y te enviamos las instrucciones de llegada a Los Llanillos.'
                    : '3. Finalize your stay and receive full check-in directions to Los Llanillos.'}
                </span>
              </li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  );
};
