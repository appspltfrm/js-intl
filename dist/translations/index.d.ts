import { TranslationsCollection } from "../TranslationsCollection.js";
type ItemsMap = {
    "currencies": {
        /**
         * @param vars.amount
         */
        "ptsLongFormattedAmount": (vars: {
            amount: number;
        }, overrideFormats?: any) => string;
        /**
         * @param vars.amount
         */
        "ptsShortFormattedAmount": (vars: {
            amount: number;
        }, overrideFormats?: any) => string;
        /**
         * @param vars.amount
         */
        "pcsLongFormattedAmount": (vars: {
            amount: number;
        }, overrideFormats?: any) => string;
        /**
         * Formatowanie liczby sztuk (np. jakiejś rzeczy), ale słowo "sztuka" jest zastąpione
wersję skróconą, czyli "szt.", chodzi o to, aby było zrozumiałe, ale zajmowało jak najmniej
miejsca.
         *
         * @param vars.amount
         */
        "pcsShortFormattedAmount": (vars: {
            amount: number;
        }, overrideFormats?: any) => string;
    };
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
    };
    "users": {
        "signIn_cmd": () => string;
    };
    "validation": {
        /**
         * komunikat, gdy wartość jest nieprawidłowa
         */
        "invalidValue_err": () => string;
        /**
         * @param vars.length
         */
        "valueMinCharsLength_err": (vars: {
            length: number;
        }, overrideFormats?: any) => string;
        "requiredValue_err": () => string;
        /**
         * Komunikat o błędzie, informujący o niepoprawnie wprowadzonym adresie URL strony www (czyli tylko protokoły http i https)
         */
        "invalidHttpUrl_err": () => string;
    };
};
declare const _default: TranslationsCollection<ItemsMap>;
export default _default;
