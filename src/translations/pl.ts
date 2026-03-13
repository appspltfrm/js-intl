import {TranslationsCollection} from "../TranslationsCollection.js";

const {HtmlValue, TextValue} = TranslationsCollection;

export default {
    "currencies": {
        "ptsLongFormattedAmount": new TextValue(`{amount, plural, one {{amount, number, decimal} punkt} few {{amount, number, decimal} punkty} other {{amount, number, decimal} punktów}}`, true),
        "ptsShortFormattedAmount": new TextValue(`{amount, number, decimal} pkt.`, true),
        "pcsLongFormattedAmount": new TextValue(`{amount, plural, one {{amount, number, decimal} sztuka} few {{amount, number, decimal} sztuki} other {{amount, number, decimal} sztuk}}`, true),
        "pcsShortFormattedAmount": new TextValue(`{amount, number, decimal} szt.`, true),
    },
    "ui": {
        "apply": `Stosuj`,
        "cancel": `Anuluj`,
        "choose_ptr": `Wybierz…`,
        "continue": `Kontynuuj`,
        "delete_ask": `Usuń?`,
        "delete_cmd": `Usuń`,
        "edit_cmd": `Edytuj`,
        "error": `Błąd`,
        "loadingTheData_ing": `Ładowanie danych…`,
        "loading_ing": `Ładowanie…`,
        "no_lbl": `Brak`,
        "yes_lbl": `Tak`,
        "noDataMatchesSearch": `Brak danych odpowiadających określonym kryteriom wyszukiwania.`,
        "noDataToDisplay": `Brak danych do wyświetlenia.`,
        "ok_lbl": `OK`,
        "processingTheData_ing": `Przetwarzanie danych…`,
        "redo_cmd": `Ponów`,
        "save_cmd": `Zapisz`,
        "search_cmd": `Wyszukiwanie`,
        "searchFor_ptr": `Wyszukaj frazę…`,
        "sendingTheData_ing": `Wysyłanie danych…`,
        "skip_cmd": `Pomiń`,
        "undo_cmd": `Cofnij`,
    },
    "users": {
        "signIn_cmd": `Zaloguj się`,
    },
    "validation": {
        "invalidValue_err": `Wartość jest nieprawidłowa.`,
        "valueMinCharsLength_err": new TextValue(`{length, plural, =0 {Wartość ma za mało znaków.} =1 {Wartość musi mieć co najmniej jeden znak.} few {Wartość musi zawierać co najmniej # znaki.} other {Wartość musi zawierać co najmniej # znaków.}}`, true),
        "requiredValue_err": `Wartość jest wymagana.`,
        "invalidHttpUrl_err": `Podany adres URL jest nieprawidłowy. Pamiętaj, że adres URL musi być pełny i zawierać http:// lub https://.`,
    },
}
