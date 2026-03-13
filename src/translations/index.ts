import {HtmlString} from "@appspltfrm/js-utils/core";
import {TranslationsCollection} from "../TranslationsCollection.js";

const importer = async (locale: string) => {
    switch(locale) {
        case "cs": return (await import("./cs.js")).default;
        case "da": return (await import("./da.js")).default;
        case "de": return (await import("./de.js")).default;
        case "el": return (await import("./el.js")).default;
        case "en": return (await import("./en.js")).default;
        case "es": return (await import("./es.js")).default;
        case "fi": return (await import("./fi.js")).default;
        case "fr": return (await import("./fr.js")).default;
        case "hr": return (await import("./hr.js")).default;
        case "hu": return (await import("./hu.js")).default;
        case "it": return (await import("./it.js")).default;
        case "nl": return (await import("./nl.js")).default;
        case "pl": return (await import("./pl.js")).default;
        case "pt": return (await import("./pt.js")).default;
        case "ro": return (await import("./ro.js")).default;
        case "ru": return (await import("./ru.js")).default;
        case "sk": return (await import("./sk.js")).default;
        case "sl": return (await import("./sl.js")).default;
        case "sv": return (await import("./sv.js")).default;
        case "uk": return (await import("./uk.js")).default;
        default: return {}
    }
}

type ItemsMap = {
    "currencies": {
        /**
         * @param vars.amount 
         */
        "ptsLongFormattedAmount": (vars: {amount: number}, overrideFormats?: any) => string;
        /**
         * @param vars.amount 
         */
        "ptsShortFormattedAmount": (vars: {amount: number}, overrideFormats?: any) => string;
        /**
         * @param vars.amount 
         */
        "pcsLongFormattedAmount": (vars: {amount: number}, overrideFormats?: any) => string;
        /**
         * Formatowanie liczby sztuk (np. jakiejś rzeczy), ale słowo "sztuka" jest zastąpione
wersję skróconą, czyli "szt.", chodzi o to, aby było zrozumiałe, ale zajmowało jak najmniej
miejsca.
         *
         * @param vars.amount 
         */
        "pcsShortFormattedAmount": (vars: {amount: number}, overrideFormats?: any) => string;
    },
    "ui": {
        "apply": () => string;
        "cancel": () => string;
        "choose_ptr": () => string;
        "continue": () => string;
        "delete_ask": () => string;
        "delete_cmd": () => string;
        "edit_cmd": () => string;
        "error": () => string;
        "loadingTheData_ing": () => string;
        "loading_ing": () => string;
        "no_lbl": () => string;
        "yes_lbl": () => string;
        "noDataMatchesSearch": () => string;
        "noDataToDisplay": () => string;
        /**
         * Bez względu jaki język, zawsze "OK", głównie do wyświetlania w oknach dialogowych jako
potwierdzenie lub po prostu przycisk zamykający.
         */
        "ok_lbl": () => string;
        "processingTheData_ing": () => string;
        /**
         * Komenda wyświetla w toolbarze edytora/inputu, która pozwala ponowić wycofaną operację.
Tłumaczenie też ma tylko jedno słowo (o ile język na to pozwala), bez względu czego dotyczy redo/ponowienie.
         */
        "redo_cmd": () => string;
        "save_cmd": () => string;
        "search_cmd": () => string;
        "searchFor_ptr": () => string;
        "sendingTheData_ing": () => string;
        "skip_cmd": () => string;
        "undo_cmd": () => string;
    },
    "users": {
        "signIn_cmd": () => string;
    },
    "validation": {
        /**
         * komunikat, gdy wartość jest nieprawidłowa
         */
        "invalidValue_err": () => string;
        /**
         * @param vars.length 
         */
        "valueMinCharsLength_err": (vars: {length: number}, overrideFormats?: any) => string;
        "requiredValue_err": () => string;
        /**
         * Komunikat o błędzie, informujący o niepoprawnie wprowadzonym adresie URL strony www (czyli tylko protokoły http i https)
         */
        "invalidHttpUrl_err": () => string;
    },
}

export default TranslationsCollection.defineCollection<ItemsMap>("shared", importer);
