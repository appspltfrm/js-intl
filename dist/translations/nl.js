import { TranslationsCollection } from "../TranslationsCollection.js";
const { HtmlValue, TextValue } = TranslationsCollection;
export default {
    "currencies": {
        "ptsLongFormattedAmount": new TextValue(`{amount, plural, one {{amount, number, decimal} punt} other {{amount, number, decimal} punten}}`, true),
        "ptsShortFormattedAmount": new TextValue(`{amount, number, decimal} pt`, true),
        "pcsLongFormattedAmount": new TextValue(`{amount, plural, one {{amount, number, decimal} stuk} other {{amount, number, decimal} stukken}}`, true),
        "pcsShortFormattedAmount": new TextValue(`{amount, number, decimal} st`, true),
    },
    "ui": {
        "apply": `Toepassen`,
        "cancel": `Annuleer`,
        "choose_ptr": `Kies op...`,
        "continue": `Doorgaan`,
        "delete_ask": `Verwijderen?`,
        "delete_cmd": `Verwijderen`,
        "edit_cmd": `Bewerk`,
        "error": `Fout`,
        "loadingTheData_ing": `Het laden van de gegevens…`,
        "loading_ing": `Laden…`,
        "no_lbl": `Nee`,
        "yes_lbl": `Ja`,
        "noDataMatchesSearch": `Geen gegevens die voldoen aan de opgegeven zoekcriteria.`,
        "noDataToDisplay": `Geen gegevens om weer te geven.`,
        "ok_lbl": `OK`,
        "processingTheData_ing": `Verwerken van de gegevens…`,
        "redo_cmd": `Opnieuw`,
        "save_cmd": `Opslaan`,
        "search_cmd": `Zoek`,
        "searchFor_ptr": `Zoek naar…`,
        "sendingTheData_ing": `Verzend de gegevens…`,
        "skip_cmd": `Overslaan`,
        "undo_cmd": `Ongedaan maken`,
    },
    "users": {
        "signIn_cmd": `Aanmelden`,
    },
    "validation": {
        "invalidValue_err": `De waarde is ongeldig.`,
        "valueMinCharsLength_err": new TextValue(`{length, plural, =0 {De waarde heeft te weinig tekens.} =1 {De waarde moet minstens één teken bevatten.} other {De waarde moet minstens # tekens bevatten.}}`, true),
        "requiredValue_err": `De waarde is verplicht.`,
        "invalidHttpUrl_err": `De opgegeven URL is niet correct. Onthoud dat een URL volledig moet zijn en http:// of https:// bevat.`,
    },
};
//# sourceMappingURL=nl.js.map