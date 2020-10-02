// Vendor
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// Translations
import en from '../locales/en/translations.json';
import fr from '../locales/fr/translations.json';


import LanguageDetector from 'i18next-browser-languagedetector';
// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    load: 'languageOnly',
    debug: false,
    keySeparator: false,
    nsSeparator: ":",
    useSuspense: false,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    react: {
      wait: false
    },
    resources: {en, fr}
  });


export default i18n;
