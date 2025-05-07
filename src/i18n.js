// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import zh from './locales/zh.json';

i18n
  .use(initReactI18next)  
  .init({
    resources: {
      en: { translation: en },
      zh: { translation: zh },
    },
    lng: 'zh',  
    fallbackLng: 'en', // When no lang
    interpolation: {
      escapeValue: false, // React avoid XSS
    },
  });

export default i18n;
