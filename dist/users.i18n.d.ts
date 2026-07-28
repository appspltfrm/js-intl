import type { IntlContext } from "./IntlContext.js";
export declare const usersI18n: import("./I18nFile.js").I18nFile<import("./I18nFile.js").I18nFileKeys>;
export declare const signIn_cmd: {
    (): string;
    (context: IntlContext): string;
}, signOut_cmd: {
    (): string;
    (context: IntlContext): string;
}, switchToThisAccount_cmd: {
    (): string;
    (context: IntlContext): string;
}, signInWithAnotherAccount_cmd: {
    (): string;
    (context: IntlContext): string;
}, manageAccounts_cmd: {
    (): string;
    (context: IntlContext): string;
};
