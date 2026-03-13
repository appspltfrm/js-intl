import { TranslationsCollection } from "../TranslationsCollection.js";
const { HtmlValue, TextValue } = TranslationsCollection;
export default {
    "currencies": {
        "ptsLongFormattedAmount": new TextValue(`{amount, plural, one {{amount, number, decimal} point} other {{amount, number, decimal} points}}`, true),
        "ptsShortFormattedAmount": new TextValue(`{amount, number, decimal} pmr`, true),
        "pcsLongFormattedAmount": new TextValue(`{amount, plural, one {{amount, number, decimal} styk} other {{amount, number, decimal} stykke}}`, true),
        "pcsShortFormattedAmount": new TextValue(`{amount, number, decimal} stk.`, true),
    },
    "ui": {
        "apply": `Anvend`,
        "cancel": `Annullér`,
        "choose_ptr": `Vælg…`,
        "continue": `Fortsæt`,
        "delete_ask": `Slet?`,
        "delete_cmd": `Slet`,
        "edit_cmd": `Redigér`,
        "error": `Fejl`,
        "loadingTheData_ing": `Indlæser data…`,
        "loading_ing": `Indlæser…`,
        "no_lbl": `Ingen`,
        "yes_lbl": `Ja`,
        "noDataMatchesSearch": `Ingen data, der matcher de angivne søgekriterier.`,
        "noDataToDisplay": `Ingen data at vise.`,
        "ok_lbl": `OK`,
        "processingTheData_ing": `Behandling af data…`,
        "redo_cmd": `Gentag`,
        "save_cmd": `Gemind`,
        "search_cmd": `Søg`,
        "searchFor_ptr": `Søg efter…`,
        "sendingTheData_ing": `Sender dataene…`,
        "skip_cmd": `Overspring`,
        "undo_cmd": `Fortryd`,
    },
    "users": {
        "signIn_cmd": `Log ind`,
    },
    "validation": {
        "invalidValue_err": `Værdien er ugyldig.`,
        "valueMinCharsLength_err": new TextValue(`{length, plural, =0 {Værdien har for få tegn.} =1 {Værdien skal have mindst ét tegn.} other {Værdien skal indeholde mindst #{0} tegn.}}`, true),
        "requiredValue_err": `Værdien er påkrævet.`,
        "invalidHttpUrl_err": `Den inde Angivne URL er ikke korrekt. Husk, at URL skal være komplet og indeholde http:// eller https://.`,
    },
};
//# sourceMappingURL=da.js.map