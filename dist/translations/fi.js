import { TranslationsCollection } from "../TranslationsCollection.js";
const { HtmlValue, TextValue } = TranslationsCollection;
export default {
    "currencies": {
        "ptsLongFormattedAmount": new TextValue(`{amount, plural, one {{amount, number, decimal} piste} other {{amount, number, decimal} pistettä}}`, true),
        "ptsShortFormattedAmount": new TextValue(`{amount, number, decimal} pts`, true),
        "pcsLongFormattedAmount": new TextValue(`{amount, plural, one {{amount, number, decimal} kappale} other {{amount, number, decimal} kappaletta}}`, true),
        "pcsShortFormattedAmount": new TextValue(`{amount, number, decimal} kpl`, true),
    },
    "ui": {
        "apply": `Käytä`,
        "cancel": `Peruuta`,
        "choose_ptr": `Valitse…`,
        "continue": `Jatka`,
        "delete_ask": `Poistetaan?`,
        "delete_cmd": `Poista`,
        "edit_cmd": `Muokkaa`,
        "error": `Virhe`,
        "loadingTheData_ing": `Ladataan tietoja…`,
        "loading_ing": `Ladataan…`,
        "no_lbl": `Ei`,
        "yes_lbl": `Kyllä`,
        "noDataMatchesSearch": `Ei ole tietoja, jotka vastaavat annettuja hakukriteerejä.`,
        "noDataToDisplay": `Ei näytettävää tietoa.`,
        "ok_lbl": `OK`,
        "processingTheData_ing": `Käsitellään tietoja…`,
        "redo_cmd": `Toisto`,
        "save_cmd": `Tallenna`,
        "search_cmd": `Haku`,
        "searchFor_ptr": `Hae hakusana…`,
        "sendingTheData_ing": `Lähetetään tietoja…`,
        "skip_cmd": `Ohita`,
        "undo_cmd": `Kumoa`,
    },
    "users": {
        "signIn_cmd": `Kirjaudu sisään`,
    },
    "validation": {
        "invalidValue_err": `Arvo ei ole kelvollinen.`,
        "valueMinCharsLength_err": new TextValue(`{length, plural, =0 {Arvo on liian lyhyt.} =1 {Arvon tulee olla vähintään yksi merkki.} other {Arvon tulee sisältää vähintään # merkkiä.}}`, true),
        "requiredValue_err": `Arvo on pakollinen.`,
        "invalidHttpUrl_err": `Annettu URL-osoite on virheellinen. Muista, että URL-osoite tulee olla täydellinen ja sisältää http:// tai https://.`,
    },
};
//# sourceMappingURL=fi.js.map