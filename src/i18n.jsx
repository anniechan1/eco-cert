// src/i18n.js
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Import your translations
import translationEN from './locales/en/translation.json'
import translationDE from './locales/de/translation.json'

// the translations
const resources = {
  en: { translation: translationEN },
  de: { translation: translationDE }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false // React already does escaping
    }
  })

export default i18n




// // src/i18n.js
// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import Backend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';

// i18n
//   .use(Backend) // Loads translations from public/locales/{lang}/translation.json
//   .use(LanguageDetector) // Detects the language from the browser
//   .use(initReactI18next) // Passes i18n down to react-i18next
//   .init({
//     fallbackLng: 'en', // Default language
//     debug: true,
//     interpolation: {
//       escapeValue: false, // React already escapes values
//     },
//     react: {
//       useSuspense: false,
//     },
//   });

// export default i18n;
