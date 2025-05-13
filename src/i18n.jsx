// eslint-disable-next-line no-unused-vars

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





