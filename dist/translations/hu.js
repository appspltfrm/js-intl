import { TranslationsCollection } from "../TranslationsCollection.js";
const { HtmlValue, TextValue } = TranslationsCollection;
export default {
    "currencies": {
        "ptsLongFormattedAmount": new TextValue(`{amount, plural, one {{amount, number, decimal} pont} other {{amount, number, decimal} pontok}}`, true),
        "ptsShortFormattedAmount": new TextValue(`{amount, number, decimal} pont`, true),
        "pcsLongFormattedAmount": new TextValue(`{amount, plural, one {{amount, number, decimal} darab} other {{amount, number, decimal} darab}}`, true),
        "pcsShortFormattedAmount": new TextValue(`{amount, number, decimal} db`, true),
    },
    "ui": {
        "apply": `Alkalmazás`,
        "cancel": `Mégsem`,
        "choose_ptr": `Válasszon…`,
        "continue": `Folytasd`,
        "delete_ask": `Törlés?`,
        "delete_cmd": `Törlés`,
        "edit_cmd": `Szerkesztés`,
        "error": `Hiba`,
        "loadingTheData_ing": `Adatok betöltése…`,
        "loading_ing": `Betöltés…`,
        "no_lbl": `Nincs`,
        "yes_lbl": `Igen`,
        "noDataMatchesSearch": `Nincs olyan adat, amely megfelel a megadott keresési feltételeknek.`,
        "noDataToDisplay": `Nincs megjeleníthető adat.`,
        "ok_lbl": `OK`,
        "processingTheData_ing": `Feldolgozás adatai…`,
        "redo_cmd": `Újra`,
        "save_cmd": `Mentés`,
        "search_cmd": `Keresés`,
        "searchFor_ptr": `Keresés…`,
        "sendingTheData_ing": `Adatok küldése…`,
        "skip_cmd": `Kihagyás`,
        "undo_cmd": `Vissza`,
    },
    "users": {
        "signIn_cmd": `Bejelentkez`,
    },
    "validation": {
        "invalidValue_err": `Az érték érvénytelen.`,
        "valueMinCharsLength_err": new TextValue(`{length, plural, =0 {A megadott érték túl rövid.} =1 {Az érték legalább egy karakterből állnia kell.} other {Az érték legalább # karaktert kell tartalmaznia.}}`, true),
        "requiredValue_err": `Az érték szükséges.`,
        "invalidHttpUrl_err": `A megadott URL helytelen. Jó tudnito, hogy a URL teljesnek kell lennie és tartalmaznia kell http:// vagy https://.`,
    },
};
//# sourceMappingURL=hu.js.map