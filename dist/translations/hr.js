import { TranslationsCollection } from "../TranslationsCollection.js";
const { HtmlValue, TextValue } = TranslationsCollection;
export default {
    "currencies": {
        "ptsLongFormattedAmount": new TextValue(`{amount, plural, one {{amount, number, decimal} bodak} few {{amount, number, decimal} boda} many {{amount, number, decimal} bodaka} other {{amount, number, decimal} bodaka}}`, true),
        "ptsShortFormattedAmount": new TextValue(`{amount, number, decimal} pt`, true),
        "pcsLongFormattedAmount": new TextValue(`{amount, plural, one {{amount, number, decimal} komad} few {{amount, number, decimal} komada} many {{amount, number, decimal} komada} other {{amount, number, decimal} komada}}`, true),
        "pcsShortFormattedAmount": new TextValue(`{amount, number, decimal} kom.`, true),
    },
    "ui": {
        "apply": `Primijeni`,
        "cancel": `Odustani`,
        "choose_ptr": `Odaberi…`,
        "continue": `Nastaviți`,
        "delete_ask": `Brisanje?`,
        "delete_cmd": `Izbrisati`,
        "edit_cmd": `Uredi`,
        "error": `Pogreška`,
        "loadingTheData_ing": `Učitavanje podataka…`,
        "loading_ing": `Učitavanje…`,
        "no_lbl": `Nema`,
        "yes_lbl": `Da`,
        "noDataMatchesSearch": `Nema podataka koji odgovaraju navedenim kriterijima pretraživanja.`,
        "noDataToDisplay": `Nema podataka za prikaz.`,
        "ok_lbl": `OK`,
        "processingTheData_ing": `Obrada podataka…`,
        "redo_cmd": `Ponovi`,
        "save_cmd": `Spremi`,
        "search_cmd": `Pretraživanje`,
        "searchFor_ptr": `Pretraživanje za…`,
        "sendingTheData_ing": `Slanje podataka…`,
        "skip_cmd": `Preskoči`,
        "undo_cmd": `Undo`,
    },
    "users": {
        "signIn_cmd": `Prijavi se`,
    },
    "validation": {
        "invalidValue_err": `Vrijednost je neispravna.`,
        "valueMinCharsLength_err": new TextValue(`{length, plural, =0 {Vrijednost ima premalo znakova.} =1 {Vrijednost mora imati najmanje jedan znak.} other {Vrijednost mora sadržavati najmanje # znakova.}}`, true),
        "requiredValue_err": `Vrijednost je obavezna.`,
        "invalidHttpUrl_err": `Unijeli ste pogrešnu URL adresu. Zapamtite da URL mora biti potpuna i sadržavati http:// ili https://.`,
    },
};
//# sourceMappingURL=hr.js.map