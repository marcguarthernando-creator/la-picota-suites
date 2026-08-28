import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, Shield, FileText, Cookie } from 'lucide-react';

export const LegalModal = ({ isOpen, onClose, type = 'aviso-legal' }) => {
  const { lang } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-lava-950/80 backdrop-blur-sm overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full my-8 bg-cream-50 rounded-3xl shadow-2xl p-6 sm:p-10 border border-sand-300 max-h-[85vh] overflow-y-auto animate-fade-in-up text-lava-900"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-sand-200/80 hover:bg-sand-300 text-lava-900 transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'aviso-legal' && (
          <div className="space-y-4 text-xs sm:text-sm text-stone-custom leading-relaxed">
            <div className="flex items-center space-x-2 text-lava-900 mb-2">
              <FileText className="w-5 h-5 text-ocean-700" />
              <h2 className="font-serif text-2xl sm:text-3xl">
                {lang === 'es' ? 'Aviso Legal' : 'Legal Notice'}
              </h2>
            </div>
            <p>
              {lang === 'es'
                ? 'En cumplimiento de la Ley 34/2002 de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI), se informa que este sitio web es propiedad de la gestión de LA PICOTA SUITE (CASA LA PICOTA & LA PICOTA II), con domicilio en Los Llanillos, Frontera, El Hierro, Islas Canarias.'
                : 'In compliance with applicable electronic commerce regulations, this website is operated by LA PICOTA SUITE management (CASA LA PICOTA & LA PICOTA II), based in Los Llanillos, Frontera, El Hierro, Canary Islands.'}
            </p>
            <h3 className="font-semibold text-lava-900 text-sm sm:text-base pt-2">
              {lang === 'es' ? 'Propiedad Intelectual e Industrial' : 'Intellectual Property'}
            </h3>
            <p>
              {lang === 'es'
                ? 'Todos los contenidos de este sitio web, incluyendo textos, fotografías, logotipos, gráficos e identidad visual de LA PICOTA SUITE, están protegidos por las leyes de propiedad intelectual e industrial.'
                : 'All contents of this website including texts, photography, logos, graphic design, and brand identity of LA PICOTA SUITE are protected by intellectual property laws.'}
            </p>
          </div>
        )}

        {type === 'privacidad' && (
          <div className="space-y-4 text-xs sm:text-sm text-stone-custom leading-relaxed">
            <div className="flex items-center space-x-2 text-lava-900 mb-2">
              <Shield className="w-5 h-5 text-olive-600" />
              <h2 className="font-serif text-2xl sm:text-3xl">
                {lang === 'es' ? 'Política de Privacidad (RGPD)' : 'Privacy Policy (GDPR)'}
              </h2>
            </div>
            <p>
              {lang === 'es'
                ? 'De conformidad con el Reglamento General de Protección de Datos (UE 2016/679) y la Ley Orgánica 3/2018 (LOPDGDD), te informamos de que los datos personales facilitados a través de los formularios de solicitud de disponibilidad o WhatsApp serán tratados con la exclusiva finalidad de gestionar tu consulta y tramitar tu estancia vacacional en LA PICOTA SUITE.'
                : 'In accordance with the General Data Protection Regulation (EU 2016/679), personal information submitted through availability inquiry forms or WhatsApp will only be processed for managing your inquiries and arranging your holiday stay at LA PICOTA SUITE.'}
            </p>
            <h3 className="font-semibold text-lava-900 text-sm sm:text-base pt-2">
              {lang === 'es' ? 'Tus Derechos' : 'Your Rights'}
            </h3>
            <p>
              {lang === 'es'
                ? 'Puedes ejercer tus derechos de acceso, rectificación, supresión y limitación de tus datos en cualquier momento comunicándote directamente con nosotros a través de nuestro teléfono o canal de WhatsApp.'
                : 'You may exercise your rights of access, rectification, erasure, and restriction of your personal data at any time by contacting us directly.'}
            </p>
          </div>
        )}

        {type === 'cookies' && (
          <div className="space-y-4 text-xs sm:text-sm text-stone-custom leading-relaxed">
            <div className="flex items-center space-x-2 text-lava-900 mb-2">
              <Cookie className="w-5 h-5 text-sand-600" />
              <h2 className="font-serif text-2xl sm:text-3xl">
                {lang === 'es' ? 'Política de Cookies' : 'Cookie Policy'}
              </h2>
            </div>
            <p>
              {lang === 'es'
                ? 'Este sitio web utiliza únicamente cookies técnicas indispensables para recordar tu idioma preferido (español o inglés) y garantizar una navegación fluida. No utilizamos cookies publicitarias ni de seguimiento invasivo de terceros.'
                : 'This website only uses essential technical cookies to remember your language preference (Spanish or English) and provide smooth navigation. We do not use third-party tracking or advertising cookies.'}
            </p>
          </div>
        )}

        <div className="mt-8 pt-4 border-t border-sand-300 text-right">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-lava-900 text-cream-100 text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-ocean-700 transition-colors"
          >
            {lang === 'es' ? 'Cerrar' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
