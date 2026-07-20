// AUTO-GENERATED — do not edit. Source: ./ui.i18n.html
import { topLevelAwait } from "@appspltfrm/js-utils/core/topLevelAwait.js";
import { defineI18nFile } from "./defineI18nFile.js";
const importer = async (locale) => {
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
export const { apply_cmd, cancel_cmd, choose_ptr, continue_cmd, delete_ask, delete_cmd, edit_cmd, error_lbl, loadingTheData_ing, tryAgain_cmd, loading_ing, no_lbl, yes_lbl, noDataMatchesSearch, noDataToDisplay, ok_lbl, processingTheData_ing, redo_cmd, save_cmd, done_cmd, search_cmd, searchFor_ptr, sendingTheData_ing, skip_cmd, undo_cmd, } = uiI18n.keys;
//# sourceMappingURL=ui.i18n.js.map