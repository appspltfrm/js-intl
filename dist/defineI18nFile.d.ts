import { I18nFile, I18nFileImporter, I18nFileKeys } from "./I18nFile.js";
/**
 * Creates the runtime handle used by generated `*.i18n.ts` modules.
 * Every created file is registered, so {@link loadI18nFiles} can reload
 * all of them when the locale changes.
 */
export declare function defineI18nFile<Keys extends I18nFileKeys = I18nFileKeys>(importer: I18nFileImporter): I18nFile<Keys>;
