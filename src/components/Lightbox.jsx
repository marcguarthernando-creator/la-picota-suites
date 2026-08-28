import React, { useEffect, useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

export const Lightbox = ({ images, currentIndex, isOpen, onClose, onPrev, onNext }) => {
  const { lang } = useLanguage();

  const handleKeyDown = useCallback(
    (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    },
    [isOpen, onClose, onPrev, onNext]
  );

  useEffect(() => {
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
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !images || images.length === 0) return null;

  const currentImg = images[currentIndex] || images[0];
  const caption = currentImg.caption?.[lang] || currentImg.title?.[lang] || '';

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-lava-950/95 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      {/* Top Header Bar */}
      <div 
        className="absolute top-0 inset-x-0 p-4 sm:p-6 flex items-center justify-between z-10 text-cream-100/90"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center space-x-2 text-xs sm:text-sm tracking-widest uppercase">
          <ImageIcon className="w-4 h-4 text-sand-300" />
          <span>
            {currentIndex + 1} / {images.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-lava-800/80 hover:bg-lava-700 text-cream-100 transition-colors focus:outline-none"
          aria-label="Cerrar visor"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Container */}
      <div 
        className="relative max-w-6xl w-full max-h-[85vh] px-4 sm:px-12 flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative overflow-hidden rounded-xl shadow-2xl bg-lava-900 border border-sand-300/20 max-h-[75vh] flex items-center justify-center">
          <img
            src={currentImg.url}
            alt={caption || 'LA PICOTA SUITE'}
            className="max-h-[75vh] max-w-full object-contain select-none transition-all duration-300 animate-fade-in"
          />
        </div>

        {/* Caption */}
        {caption && (
          <p className="mt-4 text-center text-sm sm:text-base text-cream-200/90 font-light max-w-2xl px-4">
            {caption}
          </p>
        )}
      </div>

      {/* Navigation Controls */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-lava-800/70 hover:bg-lava-700 text-cream-100 transition-all hover:scale-110 focus:outline-none"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-lava-800/70 hover:bg-lava-700 text-cream-100 transition-all hover:scale-110 focus:outline-none"
            aria-label="Siguiente foto"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        </>
      )}
    </div>
  );
};
