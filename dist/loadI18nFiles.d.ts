import { IntlContext } from "./IntlContext.js";
/**
 * Loads locale data of every {@link I18nFile} created so far — call after
 * a locale switch so all already-imported translations are available.
 */
export declare function loadI18nFiles(context?: IntlContext | string): Promise<void>;
