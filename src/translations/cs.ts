import {TranslationsCollection} from "../TranslationsCollection.js";

const {HtmlValue, TextValue} = TranslationsCollection;

export default {
    "currencies": {
        "ptsLongFormattedAmount": new TextValue(`{amount, plural, one {{amount, number, decimal} bod} few {{amount, number, decimal} body} many {{amount, number, decimal} bodů} other {{amount, number, decimal} bodů}}`, true),
        "ptsShortFormattedAmount": new TextValue(`{amount, number, decimal} bodů`, true),
        "pcsLongFormattedAmount": new TextValue(`{amount, plural, one {{amount, number, decimal} kuska} few {{amount, number, decimal} kuski} many {{amount, number, decimal} kuski} other {{amount, number, decimal} kuski}}`, true),
        "pcsShortFormattedAmount": new TextValue(`{amount, number, decimal} ks`, true),
    },
    "ui": {
        "apply": `Použít`,
        "cancel": `Zrušit`,
        "choose_ptr": `Vyberte…`,
        "continue": `Pokračovat`,
        "delete_ask": `Smazat?`,
        "delete_cmd": `Smazat`,
        "edit_cmd": `Upravit`,
        "error": `Chyba`,
        "loadingTheData_ing": `Načítání dat…`,
        "loading_ing": `Načítání…`,
        "no_lbl": `Ne`,
        "yes_lbl": `Ano`,
        "noDataMatchesSearch": `Žádná data neodpovídá zadaným kritériím vyhledávání.`,
        "noDataToDisplay": `Žádná data k zobrazení.`,
        "ok_lbl": `OK`,
        "processingTheData_ing": `Zpracovávání dat…`,
        "redo_cmd": `Znovu`,
        "save_cmd": `Uložit`,
        "search_cmd": `Vyhledávání`,
        "searchFor_ptr": `Vyhledat podle…`,
        "sendingTheData_ing": `Odesílání dat…`,
        "skip_cmd": `Přeskočit`,
        "undo_cmd": `Zpět`,
    },
    "users": {
        "signIn_cmd": `Přihlásit se`,
    },
    "validation": {
        "invalidValue_err": `Hodnota není platná.`,
        "valueMinCharsLength_err": new TextValue(`{length, plural, =0 {Hodnota má příliš málo znaků.} =1 {Hodnota musí mít alespoň jeden znak.} other {Hodnota musí obsahovat alespoň # znaků.}}`, true),
        "requiredValue_err": `Hodnota je povinná.`,
        "invalidHttpUrl_err": `Zadané URL je neplatné. Pamatujte, že URL musí být kompletné a obsahovat http:// nebo https://.`,
    },
}
