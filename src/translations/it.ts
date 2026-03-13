import {TranslationsCollection} from "../TranslationsCollection.js";

const {HtmlValue, TextValue} = TranslationsCollection;

export default {
    "currencies": {
        "ptsLongFormattedAmount": new TextValue(`{amount, plural, one {{amount, number, decimal} punto} other {{amount, number, decimal} punti}}`, true),
        "ptsShortFormattedAmount": new TextValue(`{amount, number, decimal} punti`, true),
        "pcsLongFormattedAmount": new TextValue(`{amount, plural, one {{amount, number, decimal} pezzo} other {{amount, number, decimal} pezzi}}`, true),
        "pcsShortFormattedAmount": new TextValue(`{amount, number, decimal} pz.`, true),
    },
    "ui": {
        "apply": `Applica`,
        "cancel": `Annulla`,
        "choose_ptr": `Scegli…`,
        "continue": `Continua`,
        "delete_ask": `Eliminare?`,
        "delete_cmd": `Elimina`,
        "edit_cmd": `Modifica`,
        "error": `Errore`,
        "loadingTheData_ing": `Caricamento dei dati…`,
        "loading_ing": `Caricamento…`,
        "no_lbl": `Nessuno`,
        "yes_lbl": `Sì`,
        "noDataMatchesSearch": `Nessun dato corrisponde ai criteri di ricerca specificati.`,
        "noDataToDisplay": `Nessun dato da visualizzare.`,
        "ok_lbl": `OK`,
        "processingTheData_ing": `Elaborazione dei dati…`,
        "redo_cmd": `Ripeti`,
        "save_cmd": `Salva`,
        "search_cmd": `Ricerca`,
        "searchFor_ptr": `Ricerca di…`,
        "sendingTheData_ing": `Invio dei dati…`,
        "skip_cmd": `Salta`,
        "undo_cmd": `Anuluj`,
    },
    "users": {
        "signIn_cmd": `Accedi`,
    },
    "validation": {
        "invalidValue_err": `Il valore non è valido.`,
        "valueMinCharsLength_err": new TextValue(`{length, plural, =0 {Il valore ha troppi pochi caratteri.} =1 {Il valore deve avere almeno un carattere.} other {Il valore deve contenere almeno # caratteri.}}`, true),
        "requiredValue_err": `Il valore è richiesto.`,
        "invalidHttpUrl_err": `L'URL fornito non è corretto. Ricorda che l'URL deve essere completo e contenere http:// o https://.`,
    },
}
