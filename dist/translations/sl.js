import { TranslationsCollection } from "../TranslationsCollection.js";
const { HtmlValue, TextValue } = TranslationsCollection;
export default {
    "currencies": {
        "ptsLongFormattedAmount": new TextValue(`{amount, plural, one {{amount, number, decimal} pooint} other {{amount, number, decimal} poointov}}`, true),
        "ptsShortFormattedAmount": new TextValue(`{amount, number, decimal} pt`, true),
        "pcsLongFormattedAmount": new TextValue(`{amount, plural, one {{amount, number, decimal} kosť} few {{amount, number, decimal} kosoti} many {{amount, number, decimal} kosť} other {{amount, number, decimal} kosť}}`, true),
        "pcsShortFormattedAmount": new TextValue(`{amount, number, decimal} ks`, true),
    },
    "ui": {
        "apply": `Uporabi`,
        "cancel": `Prekliči`,
        "choose_ptr": `Izberi…`,
        "continue": `Nadal`,
        "delete_ask": `Brisanje?`,
        "delete_cmd": `Izbriši`,
        "edit_cmd": `Uredi`,
        "error": `Napaka`,
        "loadingTheData_ing": `Nalaganje podatkov…`,
        "loading_ing": `Nalaganje…`,
        "no_lbl": `Ne`,
        "yes_lbl": `Da`,
        "noDataMatchesSearch": `Niama podatkov, ki ustrezajo določenim kriterijem iskanja.`,
        "noDataToDisplay": `Niama podatkov za prikaz.`,
        "ok_lbl": `OK`,
        "processingTheData_ing": `Obdelujem podatke…`,
        "redo_cmd": `Ponovi`,
        "save_cmd": `Shrani`,
        "search_cmd": `Iskanje`,
        "searchFor_ptr": `Iskanje za…`,
        "sendingTheData_ing": `Pošiljanje podatkov…`,
        "skip_cmd": `Preskoči`,
        "undo_cmd": `Razvelj`,
    },
    "users": {
        "signIn_cmd": `Prijavite se`,
    },
    "validation": {
        "invalidValue_err": `Vrednost ni veljavna.`,
        "valueMinCharsLength_err": new TextValue(`{length, plural, =0 {Vrednost ima premalo znakov.} =1 {Vrednost mora imeti vsaj en znak.} other {Vrednost mora vsebovati vsaj # znakov.}}`, true),
        "requiredValue_err": `Vrednost je potrebna.`,
        "invalidHttpUrl_err": `Podan URL je neveljaven. Upam, ker je potrebno URL v polni obliki s http:// ali https://.`,
    },
};
//# sourceMappingURL=sl.js.map