// AUTO-GENERATED — do not edit. Source: ./ui.i18n.html

import {topLevelAwait} from "@appspltfrm/js-utils/core/topLevelAwait.js";
import {defineI18nFile} from "./defineI18nFile.js";
import type {IntlContext} from "./IntlContext.js";

const importer = async (locale: string) => {
  switch (locale) {
    case "cs": return (await import("./i18n/locales/ui-i18n-locales/cs.js")).default;
    case "da": return (await import("./i18n/locales/ui-i18n-locales/da.js")).default;
    case "de": return (await import("./i18n/locales/ui-i18n-locales/de.js")).default;
    case "el": return (await import("./i18n/locales/ui-i18n-locales/el.js")).default;
    case "es": return (await import("./i18n/locales/ui-i18n-locales/es.js")).default;
    case "fi": return (await import("./i18n/locales/ui-i18n-locales/fi.js")).default;
    case "fr": return (await import("./i18n/locales/ui-i18n-locales/fr.js")).default;
    case "hr": return (await import("./i18n/locales/ui-i18n-locales/hr.js")).default;
    case "hu": return (await import("./i18n/locales/ui-i18n-locales/hu.js")).default;
    case "it": return (await import("./i18n/locales/ui-i18n-locales/it.js")).default;
    case "nl": return (await import("./i18n/locales/ui-i18n-locales/nl.js")).default;
    case "pl": return (await import("./i18n/locales/ui-i18n-locales/pl.js")).default;
    case "pt": return (await import("./i18n/locales/ui-i18n-locales/pt.js")).default;
    case "ro": return (await import("./i18n/locales/ui-i18n-locales/ro.js")).default;
    case "ru": return (await import("./i18n/locales/ui-i18n-locales/ru.js")).default;
    case "sk": return (await import("./i18n/locales/ui-i18n-locales/sk.js")).default;
    case "sl": return (await import("./i18n/locales/ui-i18n-locales/sl.js")).default;
    case "sv": return (await import("./i18n/locales/ui-i18n-locales/sv.js")).default;
    case "uk": return (await import("./i18n/locales/ui-i18n-locales/uk.js")).default;
    default: return (await import("./i18n/locales/ui-i18n-locales/en.js")).default;
  }
};

export const uiI18n = defineI18nFile(importer);

topLevelAwait(uiI18n.load());

export const {
  apply_cmd,
  cancel_cmd,
  choose_ptr,
  continue_cmd,
  delete_ask,
  delete_cmd,
  edit_cmd,
  error_lbl,
  loadingTheData_ing,
  tryAgain_cmd,
  loading_ing,
  no_lbl,
  yes_lbl,
  noDataMatchesSearch,
  noDataToDisplay,
  ok_lbl,
  processingTheData_ing,
  redo_cmd,
  save_cmd,
  done_cmd,
  search_cmd,
  searchFor_ptr,
  sendingTheData_ing,
  skip_cmd,
  undo_cmd,
} = uiI18n.keys as {
  apply_cmd(): string;
  apply_cmd(context: IntlContext): string;
  cancel_cmd(): string;
  cancel_cmd(context: IntlContext): string;
  choose_ptr(): string;
  choose_ptr(context: IntlContext): string;
  continue_cmd(): string;
  continue_cmd(context: IntlContext): string;
  delete_ask(): string;
  delete_ask(context: IntlContext): string;
  delete_cmd(): string;
  delete_cmd(context: IntlContext): string;
  edit_cmd(): string;
  edit_cmd(context: IntlContext): string;
  error_lbl(): string;
  error_lbl(context: IntlContext): string;
  loadingTheData_ing(): string;
  loadingTheData_ing(context: IntlContext): string;
  tryAgain_cmd(): string;
  tryAgain_cmd(context: IntlContext): string;
  loading_ing(): string;
  loading_ing(context: IntlContext): string;
  /**
   * Opposite of Yes
   */
  no_lbl(): string;
  no_lbl(context: IntlContext): string;
  yes_lbl(): string;
  yes_lbl(context: IntlContext): string;
  noDataMatchesSearch(): string;
  noDataMatchesSearch(context: IntlContext): string;
  noDataToDisplay(): string;
  noDataToDisplay(context: IntlContext): string;
  /**
   * Bez względu jaki język, zawsze "OK", głównie do wyświetlania w oknach dialogowych jako
potwierdzenie lub po prostu przycisk zamykający.
   */
  ok_lbl(): string;
  ok_lbl(context: IntlContext): string;
  processingTheData_ing(): string;
  processingTheData_ing(context: IntlContext): string;
  /**
   * Komenda wyświetla w toolbarze edytora/inputu, która pozwala ponowić wycofaną operację.
Tłumaczenie też ma tylko jedno słowo (o ile język na to pozwala), bez względu czego dotyczy redo/ponowienie.
   */
  redo_cmd(): string;
  redo_cmd(context: IntlContext): string;
  save_cmd(): string;
  save_cmd(context: IntlContext): string;
  done_cmd(): string;
  done_cmd(context: IntlContext): string;
  search_cmd(): string;
  search_cmd(context: IntlContext): string;
  searchFor_ptr(): string;
  searchFor_ptr(context: IntlContext): string;
  sendingTheData_ing(): string;
  sendingTheData_ing(context: IntlContext): string;
  skip_cmd(): string;
  skip_cmd(context: IntlContext): string;
  undo_cmd(): string;
  undo_cmd(context: IntlContext): string;
};
