import {TranslationsCollection} from "../TranslationsCollection.js";

const {HtmlValue, TextValue} = TranslationsCollection;

export default {
    "currencies": {
        "ptsLongFormattedAmount": new TextValue(`{amount, plural, one {{amount, number, decimal} Punkt} other {{amount, number, decimal} Punkty}}`, true),
        "ptsShortFormattedAmount": new TextValue(`{amount, number, decimal} Punkte`, true),
        "pcsLongFormattedAmount": new TextValue(`{amount, plural, one {{amount, number, decimal} Stück} other {{amount, number, decimal} Stück}}`, true),
        "pcsShortFormattedAmount": new TextValue(`{amount, number, decimal} St.`, true),
    },
    "ui": {
        "apply": `Bewerben`,
        "cancel": `Abbrechen`,
        "choose_ptr": `Wählen…`,
        "continue": `Weitermachen`,
        "delete_ask": `Löschen?`,
        "delete_cmd": `Löschen`,
        "edit_cmd": `Bearbeiten`,
        "error": `Fehler`,
        "loadingTheData_ing": `Laden der Daten…`,
        "loading_ing": `Laden…`,
        "no_lbl": `Nein`,
        "yes_lbl": `Ja`,
        "noDataMatchesSearch": `Keine Daten entsprechen den angegebenen Suchkriterien.`,
        "noDataToDisplay": `Keine Daten zum Anzeigen.`,
        "ok_lbl": `OK`,
        "processingTheData_ing": `Verarbeite die Daten…`,
        "redo_cmd": `Wiederherstellen`,
        "save_cmd": `Speichern`,
        "search_cmd": `Suche`,
        "searchFor_ptr": `Suche nach…`,
        "sendingTheData_ing": `Sending the data…`,
        "skip_cmd": `Überspringen`,
        "undo_cmd": `Rückgängig machen`,
    },
    "users": {
        "signIn_cmd": `Anmelden`,
    },
    "validation": {
        "invalidValue_err": `Der Wert ist ungültig.`,
        "valueMinCharsLength_err": new TextValue(`{length, plural, =0 {Der Wert hat zu wenige Zeichen.} =1 {Der Wert muss mindestens ein Zeichen enthalten.} other {Der Wert muss mindestens # Zeichen enthalten.}}`, true),
        "requiredValue_err": `Der Wert ist erforderlich.`,
        "invalidHttpUrl_err": `Die angegebene URL ist ungültig. Stellen Sie sicher, dass die URL vollständig ist und http:// oder https:// enthält.`,
    },
}
