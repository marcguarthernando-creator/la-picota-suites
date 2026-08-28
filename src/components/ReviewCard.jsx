import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Star, CheckCircle2, Quote } from 'lucide-react';

export const ReviewCard = ({ review }) => {
  const { lang, t } = useLanguage();

  return (
    <div className="bg-cream-50 rounded-2xl p-6 sm:p-7 border border-sand-400 shadow-md flex flex-col justify-between relative hover:shadow-xl transition-all duration-300">
      
      {/* Quotation Icon Decor */}
      <Quote className="w-8 h-8 text-sand-400 absolute top-5 right-5 opacity-40" />

      <div>
        {/* Rating Stars */}
        <div className="flex items-center space-x-1 mb-3">
          {[...Array(review.rating || 5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
          ))}
        </div>

        {/* Quote Content */}
        <p className="text-lava-950 text-sm sm:text-base italic leading-relaxed mb-6 font-normal">
          "{review.quote[lang] || review.quote['es']}"
        </p>
      </div>

      {/* Reviewer Details */}
      <div className="border-t border-sand-300 pt-4 flex items-center justify-between">
        <div>
          <h5 className="font-bold text-lava-950 text-sm">
            {review.author}
          </h5>
          <p className="text-xs text-stone-custom font-medium">
            {review.origin} · {review.date}
          </p>
        </div>

        <div className="text-right">
          <span className="inline-block text-[11px] font-bold px-2.5 py-1 rounded-full bg-sand-200 text-lava-950 border border-sand-300">
            {review.house}
          </span>
          <div className="flex items-center justify-end space-x-1 text-[10px] text-olive-700 font-bold mt-1">
            <CheckCircle2 className="w-3 h-3 stroke-[2.5]" />
            <span>{t('reviews.verified')}</span>
          </div>
        </div>
      </div>

    </div>
  );
};
