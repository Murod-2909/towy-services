import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import ru from "./locales/ru.json";
import pl from "./locales/pl.json";

export const LANGUAGES = [
    { code: "en", label: "EN" },
    { code: "ru", label: "RU" },
    { code: "pl", label: "PL" },
];

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            ru: { translation: ru },
            pl: { translation: pl },
        },
        fallbackLng: "en",
        supportedLngs: ["en", "ru", "pl"],
        interpolation: { escapeValue: false },
        detection: {
            order: ["localStorage", "navigator"],
            caches: ["localStorage"],
            lookupLocalStorage: "towy_lang",
        },
    });

export default i18n;
