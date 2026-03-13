import { TranslationsCollection } from "../TranslationsCollection.js";
const { HtmlValue, TextValue } = TranslationsCollection;
export default {
    "currencies": {
        "ptsLongFormattedAmount": new TextValue(`{amount, plural, one {{amount, number, decimal} poäng} other {{amount, number, decimal} poäng}}`, true),
        "ptsShortFormattedAmount": new TextValue(`{amount, number, decimal} poäng`, true),
        "pcsLongFormattedAmount": new TextValue(`{amount, plural, one {{amount, number, decimal} stück} other {{amount, number, decimal} stück}}`, true),
        "pcsShortFormattedAmount": new TextValue(`{amount, number, decimal} st.`, true),
    },
    "ui": {
        "apply": `Ansök`,
        "cancel": `Avbryt`,
        "choose_ptr": `Välj…`,
        "continue": `Fortsätt`,
        "delete_ask": `Ta bort?`,
        "delete_cmd": `Ta bort`,
        "edit_cmd": `Redigera`,
        "error": `Felayout`,
        "loadingTheData_ing": `Laddar data…`,
        "loading_ing": `Laddar…`,
        "no_lbl": `Nej`,
        "yes_lbl": `Ja`,
        "noDataMatchesSearch": `Ingen data som matchar angivna sökkriterier.`,
        "noDataToDisplay": `Ingen data att visa.`,
        "ok_lbl": `OK`,
        "processingTheData_ing": `Bearbetar data…`,
        "redo_cmd": `Återställ`,
        "save_cmd": `Spara`,
        "search_cmd": `Sök`,
        "searchFor_ptr": `Sök efter…`,
        "sendingTheData_ing": `Skickar data…`,
        "skip_cmd": `Hoppa över`,
        "undo_cmd": `Ångra`,
    },
    "users": {
        "signIn_cmd": `Logga in`,
    },
    "validation": {
        "invalidValue_err": `Värdet är ogiltigt.`,
        "valueMinCharsLength_err": new TextValue(`{length, plural, =0 {Värdet har för få tecken.} =1 {Värdet måste ha minst ett tecken.} other {Värdet måste innehålla minst # tecken.}}`, true),
        "requiredValue_err": `Värdet krävs.`,
        "invalidHttpUrl_err": `Angevar url är felaktig. Kom ihåg att url måste vara komplett och innehålla http:// eller https://.`,
    },
};
//# sourceMappingURL=sv.js.map