import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Calendar, Home, Search } from 'lucide-react';

export const QuickSearchBar = ({ onSearch }) => {
  const { lang, t } = useLanguage();

  const todayStr = new Date().toISOString().split('T')[0];

  const [searchState, setSearchState] = useState({
    checkIn: '',
    checkOut: '',
    adults: 2,
    children: 0,
    house: 'both'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchState);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto -mt-10 sm:-mt-14 relative z-20 px-4 sm:px-6">
      <form
        onSubmit={handleSubmit}
        className="bg-cream-50 p-4 sm:p-5 rounded-3xl border border-sand-400 shadow-[0_20px_50px_rgba(20,20,18,0.2)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3.5 items-center"
      >
        
        {/* Check-In */}
        <div className="lg:col-span-3 bg-white px-4 py-3 rounded-2xl border border-sand-400 hover:border-ocean-700 transition-colors shadow-sm">
          <label className="text-[10px] uppercase tracking-wider font-bold text-stone-custom mb-1 flex items-center space-x-1.5">
            <Calendar className="w-3.5 h-3.5 text-ocean-700 shrink-0" />
            <span>{t('quickSearch.checkIn')}</span>
          </label>
          <input
            type="date"
            min={todayStr}
            value={searchState.checkIn}
            onChange={(e) => setSearchState((prev) => ({ ...prev, checkIn: e.target.value }))}
            className="w-full text-xs font-bold text-lava-950 bg-transparent focus:outline-none cursor-pointer"
          />
        </div>

        {/* Check-Out */}
        <div className="lg:col-span-3 bg-white px-4 py-3 rounded-2xl border border-sand-400 hover:border-ocean-700 transition-colors shadow-sm">
          <label className="text-[10px] uppercase tracking-wider font-bold text-stone-custom mb-1 flex items-center space-x-1.5">
            <Calendar className="w-3.5 h-3.5 text-ocean-700 shrink-0" />
            <span>{t('quickSearch.checkOut')}</span>
          </label>
          <input
            type="date"
            min={searchState.checkIn || todayStr}
            value={searchState.checkOut}
            onChange={(e) => setSearchState((prev) => ({ ...prev, checkOut: e.target.value }))}
            className="w-full text-xs font-bold text-lava-950 bg-transparent focus:outline-none cursor-pointer"
          />
        </div>

        {/* House Selection */}
        <div className="lg:col-span-3 bg-white px-4 py-3 rounded-2xl border border-sand-400 hover:border-ocean-700 transition-colors shadow-sm">
          <label className="text-[10px] uppercase tracking-wider font-bold text-stone-custom mb-1 flex items-center space-x-1.5">
            <Home className="w-3.5 h-3.5 text-ocean-700 shrink-0" />
            <span>{t('quickSearch.house')}</span>
          </label>
          <select
            value={searchState.house}
            onChange={(e) => setSearchState((prev) => ({ ...prev, house: e.target.value }))}
            className="w-full text-xs font-bold text-lava-950 bg-transparent focus:outline-none cursor-pointer"
          >
            <option value="both">{t('quickSearch.allHouses')}</option>
            <option value="la-picota">CASA LA PICOTA (4 pax · Piscina)</option>
            <option value="la-picota-ii">LA PICOTA II (2 pax · Parejas)</option>
          </select>
        </div>

        {/* CTA Button */}
        <div className="sm:col-span-2 lg:col-span-3">
          <button
            type="submit"
            className="w-full h-full py-4 px-5 bg-lava-950 hover:bg-ocean-700 active:bg-black text-cream-100 font-bold rounded-2xl text-xs uppercase tracking-wider transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 transform hover:-translate-y-0.5"
          >
            <Search className="w-4 h-4" />
            <span>{t('quickSearch.cta')}</span>
          </button>
        </div>

      </form>
    </div>
  );
};
