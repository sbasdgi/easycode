import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { translationsFa, errorsFa, messagesFa, sidebarFa } from './locales/fa';
import { translationsEn, errorsEn, messagesEn, sidebarEn } from './locales/en';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'fa',
    debug: true,
    fallbackLng: 'fa',
    interpolation: {
      escapeValue: false
    },
    resources: {
      en: { translations: translationsEn, errors: errorsEn, messages: messagesEn, sidebar: sidebarEn },
      fa: { translations: translationsFa, errors: errorsFa, messages: messagesFa, sidebar: sidebarFa }
    }
  });

export default i18n;
