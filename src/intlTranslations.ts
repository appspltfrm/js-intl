// AUTO-GENERATED — do not edit.
// AI agents: source HTML files are at: ../i18n

import {TranslationsCollection} from "./TranslationsCollection.js";

const importer = async (locale: string) => {
  switch (locale) {
    case "cs": return (await import("./_intlTranslations-locales/cs.js")).default;
    case "da": return (await import("./_intlTranslations-locales/da.js")).default;
    case "de": return (await import("./_intlTranslations-locales/de.js")).default;
    case "el": return (await import("./_intlTranslations-locales/el.js")).default;
    case "es": return (await import("./_intlTranslations-locales/es.js")).default;
    case "fi": return (await import("./_intlTranslations-locales/fi.js")).default;
    case "fr": return (await import("./_intlTranslations-locales/fr.js")).default;
    case "hr": return (await import("./_intlTranslations-locales/hr.js")).default;
    case "hu": return (await import("./_intlTranslations-locales/hu.js")).default;
    case "it": return (await import("./_intlTranslations-locales/it.js")).default;
    case "nl": return (await import("./_intlTranslations-locales/nl.js")).default;
    case "pl": return (await import("./_intlTranslations-locales/pl.js")).default;
    case "pt": return (await import("./_intlTranslations-locales/pt.js")).default;
    case "ro": return (await import("./_intlTranslations-locales/ro.js")).default;
    case "ru": return (await import("./_intlTranslations-locales/ru.js")).default;
    case "sk": return (await import("./_intlTranslations-locales/sk.js")).default;
    case "sl": return (await import("./_intlTranslations-locales/sl.js")).default;
    case "sv": return (await import("./_intlTranslations-locales/sv.js")).default;
    case "uk": return (await import("./_intlTranslations-locales/uk.js")).default;
    default: return (await import("./_intlTranslations-locales/en.js")).default;
  }
};

export const intlTranslations = TranslationsCollection.defineCollection(importer);
