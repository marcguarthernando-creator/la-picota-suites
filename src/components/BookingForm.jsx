import React, { useState, useMemo, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CheckCircle2, MessageCircle, Send, Sparkles, Info } from 'lucide-react';

export const BookingForm = ({ 
  preselectedHouse = 'both', 
  initialDates = null, 
  onSuccessCallback = null, 
  compact = false 
}) => {
  const { lang, t } = useLanguage();

  const [formData, setFormData] = useState({
    house: preselectedHouse === 'la-picota-ii' || preselectedHouse === 'salmor' ? 'la-picota-ii' : (preselectedHouse || 'both'),
    checkIn: initialDates?.checkIn || '',
    checkOut: initialDates?.checkOut || '',
    adults: initialDates?.adults || 2,
    children: initialDates?.children || 0,
    name: '',
    email: '',
    phone: '',
    message: '',
    agreePrivacy: false,
  });

  useEffect(() => {
    if (preselectedHouse) {
      setFormData((prev) => ({
        ...prev,
        house: preselectedHouse === 'la-picota-ii' || preselectedHouse === 'salmor' ? 'la-picota-ii' : preselectedHouse
      }));
    }
  }, [preselectedHouse]);

  useEffect(() => {
    if (initialDates) {
      setFormData((prev) => ({
        ...prev,
        checkIn: initialDates.checkIn || prev.checkIn,
        checkOut: initialDates.checkOut || prev.checkOut,
        adults: initialDates.adults || prev.adults,
        house: initialDates.house || prev.house,
      }));
    }
  }, [initialDates]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Calculate nights
  const nights = useMemo(() => {
    if (!formData.checkIn || !formData.checkOut) return 0;
    const start = new Date(formData.checkIn);
    const end = new Date(formData.checkOut);
    const diff = (end - start) / (1000 * 60 * 60 * 24);
    return diff > 0 ? Math.round(diff) : 0;
  }, [formData.checkIn, formData.checkOut]);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = lang === 'es' ? 'Por favor introduce tu nombre.' : 'Please enter your name.';
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = lang === 'es' ? 'Introduce un correo válido.' : 'Please enter a valid email address.';
    }
    if (!formData.phone.trim()) {
      errs.phone = lang === 'es' ? 'Introduce un teléfono de contacto.' : 'Please enter a phone number.';
    }
    if (!formData.checkIn) {
      errs.checkIn = lang === 'es' ? 'Selecciona fecha de entrada.' : 'Select check-in date.';
    }
    if (!formData.checkOut) {
      errs.checkOut = lang === 'es' ? 'Selecciona fecha de salida.' : 'Select check-out date.';
    } else if (nights <= 0) {
      errs.checkOut = lang === 'es' ? 'La salida debe ser posterior a la entrada.' : 'Check-out must be after check-in.';
    } else if (nights < 3) {
      errs.checkOut = lang === 'es' ? 'La estancia mínima recomendada es de 3 noches.' : 'Minimum stay is 3 nights.';
    }
    if (!formData.agreePrivacy) {
      errs.agreePrivacy = lang === 'es' ? 'Debes aceptar la política de privacidad.' : 'You must accept the privacy policy.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onSuccessCallback) {
        onSuccessCallback(formData);
      }
    }, 800);
  };

  // Generate WhatsApp message with form details
  const getWhatsAppPrefilledUrl = () => {
    const houseLabel =
      formData.house === 'la-picota'
        ? 'CASA LA PICOTA'
        : formData.house === 'la-picota-ii'
        ? 'LA PICOTA II'
        : 'LA PICOTA SUITE (Cualquiera / Indiferente)';

    const text = `*Consulta de Disponibilidad - LA PICOTA SUITE*
----------------------------------
*Alojamiento:* ${houseLabel}
*Entrada:* ${formData.checkIn || 'Pendiente'}
*Salida:* ${formData.checkOut || 'Pendiente'} (${nights > 0 ? `${nights} noches` : ''})
*Huéspedes:* ${formData.adults} adultos, ${formData.children} niños
*Nombre:* ${formData.name}
*Email:* ${formData.email}
*Teléfono:* ${formData.phone}
*Mensaje:* ${formData.message || 'Sin peticiones adicionales'}`;

    return `https://wa.me/34638672576?text=${encodeURIComponent(text)}`;
  };

  const todayStr = new Date().toISOString().split('T')[0];

  if (isSubmitted) {
    return (
      <div className="bg-cream-50 p-6 sm:p-8 rounded-3xl border border-sand-400 shadow-2xl text-center animate-fade-in">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
        </div>
        
        <h3 className="font-serif text-2xl sm:text-3xl text-lava-950 mb-3">
          {t('bookingForm.successTitle')}
        </h3>
        
        <p className="text-stone-custom text-sm sm:text-base max-w-md mx-auto mb-6 leading-relaxed font-normal">
          {t('bookingForm.successMsg')}
        </p>

        {/* Summary Card */}
        <div className="bg-white rounded-2xl p-5 text-left max-w-md mx-auto mb-6 text-xs sm:text-sm text-lava-950 space-y-2 border border-sand-400 shadow-sm">
          <p>
            <span className="font-bold text-lava-950">Alojamiento:</span>{' '}
            {formData.house === 'la-picota' ? 'CASA LA PICOTA' : formData.house === 'la-picota-ii' ? 'LA PICOTA II' : 'Indiferente'}
          </p>
          <p>
            <span className="font-bold text-lava-950">Fechas:</span> {formData.checkIn} → {formData.checkOut} ({nights} {nights === 1 ? t('bookingForm.nightCount') : t('bookingForm.nightsCount')})
          </p>
          <p>
            <span className="font-bold text-lava-950">Huéspedes:</span> {formData.adults} {t('bookingForm.adults')}{formData.children > 0 ? `, ${formData.children} ${t('bookingForm.children')}` : ''}
          </p>
        </div>

        {/* Direct WhatsApp Action */}
        <div className="border-t border-sand-300 pt-6 space-y-3">
          <p className="text-xs text-stone-custom font-medium">
            {t('bookingForm.successWhatsAppPrompt')}
          </p>
          
          <a
            href={getWhatsAppPrefilledUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-2 w-full sm:w-auto px-8 py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold rounded-full text-sm shadow-md transition-all duration-200 hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 fill-white stroke-none" />
            <span>{t('bookingForm.sendToWhatsAppBtn')}</span>
          </a>

          <div>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  house: 'both',
                  checkIn: '',
                  checkOut: '',
                  adults: 2,
                  children: 0,
                  name: '',
                  email: '',
                  phone: '',
                  message: '',
                  agreePrivacy: false,
                });
              }}
              className="text-xs text-lava-950 font-bold underline hover:text-ocean-700 mt-4 block mx-auto"
            >
              {t('bookingForm.sendAnother')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-cream-50 p-6 sm:p-8 rounded-3xl border border-sand-400 shadow-2xl space-y-6">
      
      {!compact && (
        <div className="border-b border-sand-300 pb-4">
          <span className="inline-flex items-center space-x-1 text-xs font-bold uppercase tracking-widest text-olive-700 mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('bookingCTA.badge')}</span>
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-lava-950">
            {t('bookingForm.title')}
          </h3>
          <p className="text-stone-custom text-xs sm:text-sm mt-1 font-normal">
            {t('bookingForm.subtitle')}
          </p>
        </div>
      )}

      {/* Accommodation Selector */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-lava-950 mb-2">
          {t('bookingForm.houseSelect')} <span className="text-red-600">*</span>
        </label>
        <select
          name="house"
          value={formData.house}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white border border-sand-400 rounded-xl text-sm font-bold text-lava-950 focus:ring-2 focus:ring-ocean-700 focus:outline-none transition-all cursor-pointer shadow-sm"
        >
          <option value="both">{t('bookingForm.houseOptions.both')}</option>
          <option value="la-picota">{t('bookingForm.houseOptions.casaLaPicota')}</option>
          <option value="la-picota-ii">{t('bookingForm.houseOptions.laPicota2')}</option>
        </select>
      </div>

      {/* Dates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-lava-950 mb-2">
            {t('bookingForm.checkIn')} <span className="text-red-600">*</span>
          </label>
          <div className="relative">
            <input
              type="date"
              name="checkIn"
              min={todayStr}
              value={formData.checkIn}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-white border rounded-xl text-sm font-bold text-lava-950 focus:ring-2 focus:ring-ocean-700 focus:outline-none transition-all shadow-sm ${
                errors.checkIn ? 'border-red-500 bg-red-50/40' : 'border-sand-400'
              }`}
            />
          </div>
          {errors.checkIn && <p className="text-xs text-red-600 font-bold mt-1">{errors.checkIn}</p>}
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-lava-950 mb-2">
            {t('bookingForm.checkOut')} <span className="text-red-600">*</span>
          </label>
          <div className="relative">
            <input
              type="date"
              name="checkOut"
              min={formData.checkIn || todayStr}
              value={formData.checkOut}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-white border rounded-xl text-sm font-bold text-lava-950 focus:ring-2 focus:ring-ocean-700 focus:outline-none transition-all shadow-sm ${
                errors.checkOut ? 'border-red-500 bg-red-50/40' : 'border-sand-400'
              }`}
            />
          </div>
          {errors.checkOut && <p className="text-xs text-red-600 font-bold mt-1">{errors.checkOut}</p>}
        </div>
      </div>

      {/* Estimated Nights Pill */}
      {nights > 0 && (
        <div className="flex items-center space-x-2 bg-sand-200 px-4 py-2.5 rounded-xl text-xs text-lava-950 border border-sand-400">
          <Info className="w-4 h-4 text-ocean-700 shrink-0" />
          <span>
            {t('bookingForm.estimatedStay')}: <strong className="font-bold">{nights} {nights === 1 ? t('bookingForm.nightCount') : t('bookingForm.nightsCount')}</strong>
          </span>
        </div>
      )}

      {/* Guests (Adults & Children) */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-lava-950 mb-2">
            {t('bookingForm.adults')}
          </label>
          <select
            name="adults"
            value={formData.adults}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white border border-sand-400 rounded-xl text-sm font-bold text-lava-950 focus:ring-2 focus:ring-ocean-700 focus:outline-none cursor-pointer shadow-sm"
          >
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? 'adulto' : 'adultos'}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-lava-950 mb-2">
            {t('bookingForm.children')}
          </label>
          <select
            name="children"
            value={formData.children}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white border border-sand-400 rounded-xl text-sm font-bold text-lava-950 focus:ring-2 focus:ring-ocean-700 focus:outline-none cursor-pointer shadow-sm"
          >
            {[0, 1, 2, 3].map((num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? 'niño' : 'niños'}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Contact Details (Name, Email, Phone) */}
      <div className="space-y-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-lava-950 mb-2">
            {t('bookingForm.name')} <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder={t('bookingForm.namePlaceholder')}
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-white border rounded-xl text-sm font-bold text-lava-950 focus:ring-2 focus:ring-ocean-700 focus:outline-none shadow-sm ${
              errors.name ? 'border-red-500 bg-red-50/40' : 'border-sand-400'
            }`}
          />
          {errors.name && <p className="text-xs text-red-600 font-bold mt-1">{errors.name}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-lava-950 mb-2">
              {t('bookingForm.email')} <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder={t('bookingForm.emailPlaceholder')}
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-white border rounded-xl text-sm font-bold text-lava-950 focus:ring-2 focus:ring-ocean-700 focus:outline-none shadow-sm ${
                errors.email ? 'border-red-500 bg-red-50/40' : 'border-sand-400'
              }`}
            />
            {errors.email && <p className="text-xs text-red-600 font-bold mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-lava-950 mb-2">
              {t('bookingForm.phone')} <span className="text-red-600">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              placeholder={t('bookingForm.phonePlaceholder')}
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-white border rounded-xl text-sm font-bold text-lava-950 focus:ring-2 focus:ring-ocean-700 focus:outline-none shadow-sm ${
                errors.phone ? 'border-red-500 bg-red-50/40' : 'border-sand-400'
              }`}
            />
            {errors.phone && <p className="text-xs text-red-600 font-bold mt-1">{errors.phone}</p>}
          </div>
        </div>

        {/* Message / Special Requests */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-lava-950 mb-2">
            {t('bookingForm.message')}
          </label>
          <textarea
            name="message"
            rows="3"
            placeholder={t('bookingForm.messagePlaceholder')}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white border border-sand-400 rounded-xl text-sm font-medium text-lava-950 focus:ring-2 focus:ring-ocean-700 focus:outline-none resize-none shadow-sm"
          ></textarea>
        </div>
      </div>

      {/* Privacy Agreement Checkbox */}
      <div>
        <label className="flex items-start space-x-3 cursor-pointer">
          <input
            type="checkbox"
            name="agreePrivacy"
            checked={formData.agreePrivacy}
            onChange={handleChange}
            className="mt-1 h-4 w-4 text-ocean-700 rounded border-sand-400 focus:ring-ocean-700 cursor-pointer"
          />
          <span className="text-xs text-stone-custom leading-relaxed font-medium">
            {t('bookingForm.privacyAgreement')}
          </span>
        </label>
        {errors.agreePrivacy && <p className="text-xs text-red-600 font-bold mt-1">{errors.agreePrivacy}</p>}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center space-x-2 py-4 bg-lava-950 hover:bg-ocean-700 active:bg-black text-cream-100 font-bold rounded-full text-sm sm:text-base tracking-wide shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5 disabled:opacity-50"
        >
          {isSubmitting ? (
            <span>{t('bookingForm.submitting')}</span>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>{t('bookingForm.submit')}</span>
            </>
          )}
        </button>
      </div>

      <p className="text-[11px] text-center text-stone-custom font-semibold">
        Sin cargos automáticos · Respuesta personalizada en menos de 24h
      </p>
    </form>
  );
};
