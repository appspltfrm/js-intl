import { I18nFile, I18nFileImporter, I18nFileKeys } from "./I18nFile.js";
/**
 * Creates the runtime handle used by generated `*.i18n.ts` modules.
 * Every created file is registered, so {@link loadI18nFiles} can reload
 * all of them when the locale changes.
 *
 * Locale data is cached per base language subtag ("pl-PL" → "pl"), the same
 * granularity as the generated locale modules the importer resolves.
 * Key functions accept an optional {@link IntlContext} as the first argument;
 * without it the global context is used. A locale whose data is not cached
 * yet falls back to the default locale synchronously and loads its own data
 * in the background, so later calls return the right language.
 */
export declare function defineI18nFile<Keys extends I18nFileKeys = I18nFileKeys>(importer: I18nFileImporter): I18nFile<Keys>;
