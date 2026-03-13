import {TranslationsCollection} from "../TranslationsCollection.js";

const {HtmlValue, TextValue} = TranslationsCollection;

export default {
    "currencies": {
        "ptsLongFormattedAmount": new TextValue(`{amount, plural, one {{amount, number, decimal} punct} other {{amount, number, decimal} puncte}}`, true),
        "ptsShortFormattedAmount": new TextValue(`{amount, number, decimal} puncte`, true),
        "pcsLongFormattedAmount": new TextValue(`{amount, plural, one {{amount, number, decimal} bucată} other {{amount, number, decimal} bucăți}}`, true),
        "pcsShortFormattedAmount": new TextValue(`{amount, number, decimal} buc.`, true),
    },
    "ui": {
        "apply": `Aplică`,
        "cancel": `Anulează`,
        "choose_ptr": `Alegeți…`,
        "continue": `Continuă`,
        "delete_ask": `Ștergeți?`,
        "delete_cmd": `Șterge`,
        "edit_cmd": `Editează`,
        "error": `Eroare`,
        "loadingTheData_ing": `Se încarcă datele…`,
        "loading_ing": `Se încarcă…`,
        "no_lbl": `Nu`,
        "yes_lbl": `Da`,
        "noDataMatchesSearch": `Nu există date care să corespundă criteriilor de căutare specificate.`,
        "noDataToDisplay": `Nici date de afișat.`,
        "ok_lbl": `OK`,
        "processingTheData_ing": `Se procesează datele…`,
        "redo_cmd": `Repetă`,
        "save_cmd": `Salvează`,
        "search_cmd": `Căutați`,
        "searchFor_ptr": `Caută după…`,
        "sendingTheData_ing": `Trimiterea datelor…`,
        "skip_cmd": `Sari`,
        "undo_cmd": `Anulare`,
    },
    "users": {
        "signIn_cmd": `Conectare`,
    },
    "validation": {
        "invalidValue_err": `Valoarea este invalidă.`,
        "valueMinCharsLength_err": new TextValue(`{length, plural, zero {Valoarea are prea puține caractere.} one {Valoarea trebuie să aibă cel puțin un caracter.} other {Valoarea trebuie să conțină cel puțin # caractere.}}`, true),
        "requiredValue_err": `Valoarea este necesară.`,
        "invalidHttpUrl_err": `Adresa URL furnizată este greşită. Rețineți că URL trebuie să fie complet și să contină http:// sau https://.`,
    },
}
