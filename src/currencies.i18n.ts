// AUTO-GENERATED — do not edit. Source: ./currencies.i18n.html

import {topLevelAwait} from "@appspltfrm/js-utils/core/topLevelAwait.js";
import {defineI18nFile} from "./defineI18nFile.js";

const importer = async (locale: string) => {
  switch (locale) {
    case "cs": return (await import("./i18n/locales/currencies-i18n-locales/cs.js")).default;
    case "da": return (await import("./i18n/locales/currencies-i18n-locales/da.js")).default;
    case "de": return (await import("./i18n/locales/currencies-i18n-locales/de.js")).default;
    case "el": return (await import("./i18n/locales/currencies-i18n-locales/el.js")).default;
    case "es": return (await import("./i18n/locales/currencies-i18n-locales/es.js")).default;
    case "fi": return (await import("./i18n/locales/currencies-i18n-locales/fi.js")).default;
    case "fr": return (await import("./i18n/locales/currencies-i18n-locales/fr.js")).default;
    case "hr": return (await import("./i18n/locales/currencies-i18n-locales/hr.js")).default;
    case "hu": return (await import("./i18n/locales/currencies-i18n-locales/hu.js")).default;
    case "it": return (await import("./i18n/locales/currencies-i18n-locales/it.js")).default;
    case "nl": return (await import("./i18n/locales/currencies-i18n-locales/nl.js")).default;
    case "pl": return (await import("./i18n/locales/currencies-i18n-locales/pl.js")).default;
    case "pt": return (await import("./i18n/locales/currencies-i18n-locales/pt.js")).default;
    case "ro": return (await import("./i18n/locales/currencies-i18n-locales/ro.js")).default;
    case "ru": return (await import("./i18n/locales/currencies-i18n-locales/ru.js")).default;
    case "sk": return (await import("./i18n/locales/currencies-i18n-locales/sk.js")).default;
    case "sl": return (await import("./i18n/locales/currencies-i18n-locales/sl.js")).default;
    case "sv": return (await import("./i18n/locales/currencies-i18n-locales/sv.js")).default;
    case "uk": return (await import("./i18n/locales/currencies-i18n-locales/uk.js")).default;
    default: return (await import("./i18n/locales/currencies-i18n-locales/en.js")).default;
  }
};

export const currenciesI18n = defineI18nFile(importer);

topLevelAwait(currenciesI18n.load());

export const {
  ptsLongFormattedAmount,
  ptsShortFormattedAmount,
  pcsLongFormattedAmount,
  pcsShortFormattedAmount,
} = currenciesI18n.keys as {
  /**
   * @param vars.amount 
   */
  ptsLongFormattedAmount(vars: {amount: number}, overrideFormats?: any): string;
  /**
   * @param vars.amount 
   */
  ptsShortFormattedAmount(vars: {amount: number}, overrideFormats?: any): string;
  /**
   * @param vars.amount 
   */
  pcsLongFormattedAmount(vars: {amount: number}, overrideFormats?: any): string;
  /**
   * Formatowanie liczby sztuk (np. jakiejś rzeczy), ale słowo "sztuka" jest zastąpione
wersję skróconą, czyli "szt.", chodzi o to, aby było zrozumiałe, ale zajmowało jak najmniej
miejsca.
   *
   * @param vars.amount 
   */
  pcsShortFormattedAmount(vars: {amount: number}, overrideFormats?: any): string;
};
