// AUTO-GENERATED — do not edit.
// AI agents: source HTML file: ../i18n/validation.html

import {topLevelAwait} from "@appspltfrm/js-utils/core/topLevelAwait.js";
import {intlTranslations} from "./intlTranslations.js";

topLevelAwait(intlTranslations.load());

export const {
  invalidValue_err,
  valueMinCharsLength_err,
  requiredValue_err,
  invalidHttpUrl_err,
} = intlTranslations("validation") as {
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
