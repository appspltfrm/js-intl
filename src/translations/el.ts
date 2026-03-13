import {TranslationsCollection} from "../TranslationsCollection.js";

const {HtmlValue, TextValue} = TranslationsCollection;

export default {
    "currencies": {
        "ptsLongFormattedAmount": new TextValue(`{amount, plural, one {{amount, number, decimal} πόντος} other {{amount, number, decimal} πόντοι}}`, true),
        "ptsShortFormattedAmount": new TextValue(`{amount, number, decimal} πτ`, true),
        "pcsLongFormattedAmount": new TextValue(`{amount, plural, one {{amount, number, decimal} τμ} other {{amount, number, decimal} τμ}}`, true),
        "pcsShortFormattedAmount": new TextValue(`{amount, number, decimal} τμ.`, true),
    },
    "ui": {
        "apply": `Εφαρμογή`,
        "cancel": `Ακύρωση`,
        "choose_ptr": `Επιλέξτε…`,
        "continue": `Συνέχεια`,
        "delete_ask": `Διαγραφή;`,
        "delete_cmd": `Διαγραφή`,
        "edit_cmd": `Επεξεργασία`,
        "error": `Σφάλμα`,
        "loadingTheData_ing": `Φόρτωση δεδομένων…`,
        "loading_ing": `Φόρτωση…`,
        "no_lbl": `Όχι`,
        "yes_lbl": `Ναι`,
        "noDataMatchesSearch": `Δεν υπάρχουν δεδομένα που να ταιριάζουν με τα κριτήρια αναζήτησης.`,
        "noDataToDisplay": `Δεν υπάρχουν δεδομένα προς εμφάνιση.`,
        "ok_lbl": `OK`,
        "processingTheData_ing": `Επεξεργασία των δεδομένων…`,
        "redo_cmd": `Επανάληψη`,
        "save_cmd": `Αποθήκευση`,
        "search_cmd": `Αναζήτηση`,
        "searchFor_ptr": `Αναζήτηση για…`,
        "sendingTheData_ing": `Αποστολή των δεδομένων…`,
        "skip_cmd": `Παράλειψη`,
        "undo_cmd": `Αναίρεση`,
    },
    "users": {
        "signIn_cmd": `Είσοδος`,
    },
    "validation": {
        "invalidValue_err": `Η τιμή είναι άκυρη.`,
        "valueMinCharsLength_err": new TextValue(`{length, plural, =0 {Η τιμή δεν έχει αρκετά χαρακτήρες.} =1 {Η τιμή πρέπει να έχει τουλάχιστον ένα χαρακτήρα.} other {Η τιμή πρέπει να περιέχει τουλάχιστον # χαρακτήρες.}}`, true),
        "requiredValue_err": `Η τιμή είναι απαραίτητη.`,
        "invalidHttpUrl_err": `Ο δοσμένος URL είναι λάθος. Αναμνήστε ότι ο URL πρέπει να είναι ολοκληρωμένος και να περιλάμβανε http:// ή https://.`,
    },
}
