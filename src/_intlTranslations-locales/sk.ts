import {TranslationsCollection} from "../TranslationsCollection.js";

const {HtmlValue, TextValue} = TranslationsCollection;

export default {
  "currencies": {
    ptsLongFormattedAmount: new TextValue(`{amount, plural, one {{amount, number, decimal} bodok} few {{amount, number, decimal} bodyoky} many {{amount, number, decimal} bodokov} other {{amount, number, decimal} bodokov}}`, true),
    ptsShortFormattedAmount: new TextValue(`{amount, number, decimal} bodov`, true),
    pcsLongFormattedAmount: new TextValue(`{amount, plural, one {{amount, number, decimal} kuska} few {{amount, number, decimal} kusky} many {{amount, number, decimal} kusiek} other {{amount, number, decimal} kusiek}}`, true),
    pcsShortFormattedAmount: new TextValue(`{amount, number, decimal} ks`, true),
  },
  "ui": {
    apply_cmd: `Použiť`,
    cancel_cmd: `Zrušiť`,
    choose_ptr: `Vybrať…`,
    continue_cmd: `Pokračovať`,
    delete_ask: `Vymazať?`,
    delete_cmd: `Vymazať`,
    edit_cmd: `Úpravy`,
    error_lbl: `Chyba`,
    loadingTheData_ing: `Načítanie dát…`,
    tryAgain_cmd: `Skúsiť znova`,
    loading_ing: `Načítava sa…`,
    no_lbl: `Žiadne`,
    yes_lbl: `Áno`,
    noDataMatchesSearch: `Žiadne údaje nezodpovedajú zadaným kritériam vyhľadávania.`,
    noDataToDisplay: `Žiadne údaje na zobrazenie.`,
    ok_lbl: `OK`,
    processingTheData_ing: `Spracovávanie údajov…`,
    redo_cmd: `Opätovanie`,
    save_cmd: `Uložiť`,
    search_cmd: `Vyhľadávanie`,
    searchFor_ptr: `Vyhľadávanie podľa…`,
    sendingTheData_ing: `Odosielanie dát…`,
    skip_cmd: `Preskočiť`,
    undo_cmd: `Vrátiť späť`,
  },
  "users": {
    signIn_cmd: `Prijava`,
    signOut_cmd: `Odhlásiť sa`,
    switchToThisAccount_cmd: `Prepnúť sa na tento účet`,
    signInWithAnotherAccount_cmd: `Prihlásiť sa pomocou iného účtu`,
    manageAccounts_cmd: `Spravovať účty`,
  },
  "validation": {
    invalidValue_err: `Wartość je nieprawidłowa.`,
    valueMinCharsLength_err: new TextValue(`{length, plural, =0 {Hodnota má príliš málo znakov.} =1 {Hodnota musí mať aspoň jeden znak.} other {Hodnota musí obsahovať aspoň # znakov.}}`, true),
    requiredValue_err: `Hodnota je vyžadovaná.`,
    invalidHttpUrl_err: `Zadaný URL je neplatný. Pripomeňte si, že URL musí byť úplné a obsahovať http:// alebo https://.`,
  },
};
