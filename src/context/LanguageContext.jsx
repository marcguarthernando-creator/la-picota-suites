import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('picota_suite_lang');
    if (saved && (saved === 'es' || saved === 'en')) return saved;
    if (typeof window !== 'undefined' && navigator.language?.startsWith('es')) {
      return 'es';
    }
    return 'es';
  });

  useEffect(() => {
    localStorage.setItem('picota_suite_lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = () => {
    setLang(prev => (prev === 'es' ? 'en' : 'es'));
  };

  const t = (key) => {
    const keys = key.split('.');
    let result = translations[lang];
    for (const k of keys) {
      if (result && result[k] !== undefined) {
        result = result[k];
      } else {
        let fallback = translations['es'];
        for (const fk of keys) {
          if (fallback && fallback[fk] !== undefined) {
            fallback = fallback[fk];
          } else {
            return key;
          }
        }
        return fallback || key;
      }
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
