import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import * as en from '../lib/lang/en';
import * as ru from '../lib/lang/ru';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      ru: {
        translation: en,
      },
      en: {
        translation: en,
      },
    },
  });

export default i18n;
