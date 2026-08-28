import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { BookingForm } from './BookingForm';

export const BookingModal = ({ isOpen, onClose, preselectedHouse = 'both', initialDates = null }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
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
        className="relative max-w-xl w-full my-8 bg-cream-50 rounded-3xl shadow-2xl overflow-hidden border border-sand-300 animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-sand-200/80 hover:bg-sand-300 text-lava-900 transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-2 sm:p-4">
          <BookingForm
            preselectedHouse={preselectedHouse}
            initialDates={initialDates}
            compact={false}
          />
        </div>
      </div>
    </div>
  );
};
