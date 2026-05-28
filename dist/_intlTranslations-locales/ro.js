import { TranslationsCollection } from "../TranslationsCollection.js";
const { HtmlValue, TextValue } = TranslationsCollection;
export default {
    "currencies": {
        ptsLongFormattedAmount: new TextValue(`{amount, plural, one {{amount, number, decimal} punct} other {{amount, number, decimal} puncte}}`, true),
        ptsShortFormattedAmount: new TextValue(`{amount, number, decimal} puncte`, true),
        pcsLongFormattedAmount: new TextValue(`{amount, plural, one {{amount, number, decimal} bucată} other {{amount, number, decimal} bucăți}}`, true),
        pcsShortFormattedAmount: new TextValue(`{amount, number, decimal} buc.`, true),
    },
    "ui": {
        apply_cmd: `Aplică`,
        cancel_cmd: `Anulează`,
        choose_ptr: `Alegeți…`,
        continue_cmd: `Continuă`,
        delete_ask: `Ștergeți?`,
        delete_cmd: `Șterge`,
        edit_cmd: `Editează`,
        error_lbl: `Eroare`,
        loadingTheData_ing: `Se încarcă datele…`,
        loading_ing: `Se încarcă…`,
        no_lbl: `Nu`,
        yes_lbl: `Da`,
        noDataMatchesSearch: `Nu există date care să corespundă criteriilor de căutare specificate.`,
        noDataToDisplay: `Nici date de afișat.`,
        ok_lbl: `OK`,
        processingTheData_ing: `Se procesează datele…`,
        redo_cmd: `Repetă`,
        save_cmd: `Salvează`,
        search_cmd: `Căutați`,
        searchFor_ptr: `Caută după…`,
        sendingTheData_ing: `Trimiterea datelor…`,
        skip_cmd: `Sari`,
        undo_cmd: `Anulare`,
    },
    "users": {
        signIn_cmd: `Conectare`,
        signOut_cmd: `Deconectare`,
        switchToThisAccount_cmd: `Comută la acest cont`,
        signInWithAnotherAccount_cmd: `Autentifică-te cu un alt cont`,
        manageAccounts_cmd: `Gestionează conturile`,
    },
    "validation": {
        invalidValue_err: `Valoarea este invalidă.`,
        valueMinCharsLength_err: new TextValue(`{length, plural, zero {Valoarea are prea puține caractere.} one {Valoarea trebuie să aibă cel puțin un caracter.} other {Valoarea trebuie să conțină cel puțin # caractere.}}`, true),
        requiredValue_err: `Valoarea este necesară.`,
        invalidHttpUrl_err: `Adresa URL furnizată este greşită. Rețineți că URL trebuie să fie complet și să contină http:// sau https://.`,
    },
};
//# sourceMappingURL=ro.js.map