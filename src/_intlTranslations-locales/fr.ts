import {TranslationsCollection} from "../TranslationsCollection.js";

const {HtmlValue, TextValue} = TranslationsCollection;

export default {
  "currencies": {
    ptsLongFormattedAmount: new TextValue(`{amount, plural, one {{amount, number, decimal} point} other {{amount, number, decimal} points}}`, true),
    ptsShortFormattedAmount: new TextValue(`{amount, number, decimal} pts`, true),
    pcsLongFormattedAmount: new TextValue(`{amount, plural, one {{amount, number, decimal} pièce} other {{amount, number, decimal} pièces}}`, true),
    pcsShortFormattedAmount: new TextValue(`{amount, number, decimal} pce`, true),
  },
  "ui": {
    apply_cmd: `Appliquer`,
    cancel_cmd: `Annuler`,
    choose_ptr: `Choisissez…`,
    continue_cmd: `Poursuivre`,
    delete_ask: `Supprimer ?`,
    delete_cmd: `Supprimer`,
    edit_cmd: `Modifier`,
    error_lbl: `Erreur`,
    loadingTheData_ing: `Chargement des données…`,
    tryAgain_cmd: `Réessayer`,
    loading_ing: `Chargement en cours…`,
    no_lbl: `Non`,
    yes_lbl: `Oui`,
    noDataMatchesSearch: `Aucune donnée ne correspond aux critères de recherche spécifiés.`,
    noDataToDisplay: `Aucune donnée à afficher.`,
    ok_lbl: `OK`,
    processingTheData_ing: `Traitement des données…`,
    redo_cmd: `Rétablir`,
    save_cmd: `Sauvegarder`,
    search_cmd: `Recherche`,
    searchFor_ptr: `Recherche en cours…`,
    sendingTheData_ing: `Envoi des données…`,
    skip_cmd: `Ignorer`,
    undo_cmd: `Annuler`,
  },
  "users": {
    signIn_cmd: `Se connecter`,
    signOut_cmd: `Se déconnecter`,
    switchToThisAccount_cmd: `Passer à ce compte`,
    signInWithAnotherAccount_cmd: `Se connecter avec un autre compte`,
    manageAccounts_cmd: `Gérer les comptes`,
  },
  "validation": {
    invalidValue_err: `La valeur est invalide.`,
    valueMinCharsLength_err: new TextValue(`{length, plural, =0 {La valeur a trop peu de caractères.} =1 {La valeur doit avoir au moins un caractère.} other {La valeur doit contenir au moins # caractères.}}`, true),
    requiredValue_err: `La valeur est obligatoire.`,
    invalidHttpUrl_err: `L'URL fournie est incorrecte. N'oubliez pas que l'URL doit être complète et contenir http:// ou https://.`,
  },
};
