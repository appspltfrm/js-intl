// AUTO-GENERATED — do not edit. Source: ./validation.i18n.html

import {topLevelAwait} from "@appspltfrm/js-utils/core/topLevelAwait.js";
import {defineI18nFile} from "./defineI18nFile.js";

const importer = async (locale: string) => {
  switch (locale) {
    case "cs": return (await import("./i18n/locales/validation-i18n-locales/cs.js")).default;
    case "da": return (await import("./i18n/locales/validation-i18n-locales/da.js")).default;
    case "de": return (await import("./i18n/locales/validation-i18n-locales/de.js")).default;
    case "el": return (await import("./i18n/locales/validation-i18n-locales/el.js")).default;
    case "es": return (await import("./i18n/locales/validation-i18n-locales/es.js")).default;
    case "fi": return (await import("./i18n/locales/validation-i18n-locales/fi.js")).default;
    case "fr": return (await import("./i18n/locales/validation-i18n-locales/fr.js")).default;
    case "hr": return (await import("./i18n/locales/validation-i18n-locales/hr.js")).default;
    case "hu": return (await import("./i18n/locales/validation-i18n-locales/hu.js")).default;
    case "it": return (await import("./i18n/locales/validation-i18n-locales/it.js")).default;
    case "nl": return (await import("./i18n/locales/validation-i18n-locales/nl.js")).default;
    case "pl": return (await import("./i18n/locales/validation-i18n-locales/pl.js")).default;
    case "pt": return (await import("./i18n/locales/validation-i18n-locales/pt.js")).default;
    case "ro": return (await import("./i18n/locales/validation-i18n-locales/ro.js")).default;
    case "ru": return (await import("./i18n/locales/validation-i18n-locales/ru.js")).default;
    case "sk": return (await import("./i18n/locales/validation-i18n-locales/sk.js")).default;
    case "sl": return (await import("./i18n/locales/validation-i18n-locales/sl.js")).default;
    case "sv": return (await import("./i18n/locales/validation-i18n-locales/sv.js")).default;
    case "uk": return (await import("./i18n/locales/validation-i18n-locales/uk.js")).default;
    default: return (await import("./i18n/locales/validation-i18n-locales/en.js")).default;
  }
};

export const validationI18n = defineI18nFile(importer);

topLevelAwait(validationI18n.load());

export const {
  invalidValue_err,
  valueMinCharsLength_err,
  requiredValue_err,
  invalidHttpUrl_err,
} = validationI18n.keys as {
  /**
   * komunikat, gdy wartość jest nieprawidłowa
   */
  invalidValue_err(): string;
  /**
   * @param vars.length 
   */
  valueMinCharsLength_err(vars: {length: number}, overrideFormats?: any): string;
  requiredValue_err(): string;
  /**
   * Komunikat o błędzie, informujący o niepoprawnie wprowadzonym adresie URL strony www (czyli tylko protokoły http i https)
   */
  invalidHttpUrl_err(): string;
};
