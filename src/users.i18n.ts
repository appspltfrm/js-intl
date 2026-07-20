// AUTO-GENERATED — do not edit. Source: ./users.i18n.html

import {topLevelAwait} from "@appspltfrm/js-utils/core/topLevelAwait.js";
import {defineI18nFile} from "./defineI18nFile.js";

const importer = async (locale: string) => {
  switch (locale) {
    case "cs": return (await import("./i18n/locales/users-i18n-locales/cs.js")).default;
    case "da": return (await import("./i18n/locales/users-i18n-locales/da.js")).default;
    case "de": return (await import("./i18n/locales/users-i18n-locales/de.js")).default;
    case "el": return (await import("./i18n/locales/users-i18n-locales/el.js")).default;
    case "es": return (await import("./i18n/locales/users-i18n-locales/es.js")).default;
    case "fi": return (await import("./i18n/locales/users-i18n-locales/fi.js")).default;
    case "fr": return (await import("./i18n/locales/users-i18n-locales/fr.js")).default;
    case "hr": return (await import("./i18n/locales/users-i18n-locales/hr.js")).default;
    case "hu": return (await import("./i18n/locales/users-i18n-locales/hu.js")).default;
    case "it": return (await import("./i18n/locales/users-i18n-locales/it.js")).default;
    case "nl": return (await import("./i18n/locales/users-i18n-locales/nl.js")).default;
    case "pl": return (await import("./i18n/locales/users-i18n-locales/pl.js")).default;
    case "pt": return (await import("./i18n/locales/users-i18n-locales/pt.js")).default;
    case "ro": return (await import("./i18n/locales/users-i18n-locales/ro.js")).default;
    case "ru": return (await import("./i18n/locales/users-i18n-locales/ru.js")).default;
    case "sk": return (await import("./i18n/locales/users-i18n-locales/sk.js")).default;
    case "sl": return (await import("./i18n/locales/users-i18n-locales/sl.js")).default;
    case "sv": return (await import("./i18n/locales/users-i18n-locales/sv.js")).default;
    case "uk": return (await import("./i18n/locales/users-i18n-locales/uk.js")).default;
    default: return (await import("./i18n/locales/users-i18n-locales/en.js")).default;
  }
};

export const usersI18n = defineI18nFile(importer);

topLevelAwait(usersI18n.load());

export const {
  signIn_cmd,
  signOut_cmd,
  switchToThisAccount_cmd,
  signInWithAnotherAccount_cmd,
  manageAccounts_cmd,
} = usersI18n.keys as {
  signIn_cmd(): string;
  signOut_cmd(): string;
  switchToThisAccount_cmd(): string;
  signInWithAnotherAccount_cmd(): string;
  manageAccounts_cmd(): string;
};
