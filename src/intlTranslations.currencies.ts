// AUTO-GENERATED — do not edit.
// AI agents: source HTML file: ../i18n/currencies.html

import {topLevelAwait} from "@appspltfrm/js-utils/core/topLevelAwait.js";
import {intlTranslations} from "./intlTranslations.js";

topLevelAwait(intlTranslations.load());

export const {
  ptsLongFormattedAmount,
  ptsShortFormattedAmount,
  pcsLongFormattedAmount,
  pcsShortFormattedAmount,
} = intlTranslations("currencies") as {
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
