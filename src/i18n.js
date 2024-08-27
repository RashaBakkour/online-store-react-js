import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from './componants/locale/en.json';
import translationAR from './componants/locale/ar.json'
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: translationEN
  },
  ar: {
    translation: translationAR
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) 
  .init({
    resources,
    lng: "en", 

    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;