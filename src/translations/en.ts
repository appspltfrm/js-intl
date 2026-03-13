import {TranslationsCollection} from "../TranslationsCollection.js";

const {HtmlValue, TextValue} = TranslationsCollection;

export default {
    "currencies": {
        "ptsLongFormattedAmount": new TextValue(`{amount, plural, one {{amount, number, decimal} point} other {{amount, number, decimal} points}}`, true),
        "ptsShortFormattedAmount": new TextValue(`{amount, number, decimal} pts`, true),
        "pcsLongFormattedAmount": new TextValue(`{amount, plural, one {{amount, number, decimal} piece} other {{amount, number, decimal} pieces}}`, true),
        "pcsShortFormattedAmount": new TextValue(`{amount, number, decimal} pcs`, true),
    },
    "ui": {
        "apply": `Apply`,
        "cancel": `Cancel`,
        "choose_ptr": `Choose…`,
        "continue": `Continue`,
        "delete_ask": `Delete?`,
        "delete_cmd": `Delete`,
        "edit_cmd": `Edit`,
        "error": `Error`,
        "loadingTheData_ing": `Loading the data…`,
        "loading_ing": `Loading…`,
        "no_lbl": `No`,
        "yes_lbl": `Yes`,
        "noDataMatchesSearch": `No data that matches specified search criteria.`,
        "noDataToDisplay": `No data to be displayed.`,
        "ok_lbl": `OK`,
        "processingTheData_ing": `Processing the data…`,
        "redo_cmd": `Redo`,
        "save_cmd": `Save`,
        "search_cmd": `Search`,
        "searchFor_ptr": `Search for…`,
        "sendingTheData_ing": `Sending the data…`,
        "skip_cmd": `Skip`,
        "undo_cmd": `Undo`,
    },
    "users": {
        "signIn_cmd": `Sign in`,
    },
    "validation": {
        "invalidValue_err": `The value is invalid.`,
        "valueMinCharsLength_err": new TextValue(`{length, plural, =0 {The value has too few characters.} =1 {The value must have at least one character.} other {The value must contain at least # characters.}}`, true),
        "requiredValue_err": `The value is required.`,
        "invalidHttpUrl_err": `Provided url is incorrect. Remember that url must be complete and contain http:// or https://.`,
    },
}
