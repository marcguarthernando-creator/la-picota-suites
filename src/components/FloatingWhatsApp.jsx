import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp = ({ currentPath, currentHouseId }) => {
  const { lang, t } = useLanguage();
  const [showTooltip, setShowTooltip] = useState(true);

  const phoneNumber = '34646293385';

  let messageKey = 'whatsapp.messages.general';
  if (currentPath === 'house' && currentHouseId === 'la-picota') {
    messageKey = 'whatsapp.messages.casaLaPicota';
  } else if (currentPath === 'house' && (currentHouseId === 'la-picota-ii' || currentHouseId === 'salmor')) {
    messageKey = 'whatsapp.messages.laPicota2';
  }

  const messageText = t(messageKey);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageText)}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center flex-col sm:flex-row-reverse space-y-2 sm:space-y-0 sm:space-x-3 sm:space-x-reverse group">
      
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(37,211,102,0.4)]"
      >
        {/* Pulsing Beacon Ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none" />
        
        <MessageCircle className="w-7 h-7 fill-white stroke-none drop-shadow" />
      </a>

      {/* Floating Tooltip Bubble */}
      {showTooltip && (
        <div className="hidden md:flex items-center bg-cream-50 text-lava-900 border border-sand-300 text-xs px-3.5 py-2 rounded-full shadow-lg space-x-2 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-[#25D366]" />
          <span className="font-medium text-stone-700">
            {t('whatsapp.floatingTooltip')}
          </span>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-stone-400 hover:text-stone-700 p-0.5 rounded-full"
            aria-label="Cerrar tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}
    </div>
  );
};
