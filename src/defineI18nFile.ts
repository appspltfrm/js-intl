import {HtmlString} from "@appspltfrm/js-utils/core/HtmlString.js";
import {registerI18nFile} from "./_i18nFilesRegistry.js";
import {defineGlobals} from "./defineGlobals.js";
import {formatMessage} from "./formatMessage.js";
import {getIntlContext} from "./getIntlContext.js";
import {I18nFile, I18nFileData, I18nFileImporter, I18nFileKeys, TranslationValue} from "./I18nFile.js";
import {IntlContext} from "./IntlContext.js";

defineGlobals();

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
export function defineI18nFile<Keys extends I18nFileKeys = I18nFileKeys>(importer: I18nFileImporter): I18nFile<Keys> {

  const cache: {[lang: string]: I18nFileData} = {};
  const pending: {[lang: string]: Promise<void>} = {};

  const baseLang = (locale: string) => locale.split("-")[0].toLowerCase();

  const langOf = (context?: IntlContext | string) => baseLang(typeof context === "string" ? context : (context ?? getIntlContext()).locale);

  const defaultLang = () => baseLang(INTL_DEFAULT_LOCALE || "en");

  const load = async (context?: IntlContext | string) => {
    const lang = langOf(context);
    if (!cache[lang]) {
      if (!(lang in pending)) {
        pending[lang] = importer(lang)
          .then((data) => {
            cache[lang] = data;
          })
          .finally(() => {
            delete pending[lang];
          });
      }
      await pending[lang];
    }
    return file;
  };

  const keys = new Proxy({} as Keys, {
    get: (_target, p: string) => {
      return (contextOrVars?: any, varsOrFormats?: any, formats?: any) => {
        const knownContext = contextOrVars instanceof IntlContext;
        const context: IntlContext = knownContext ? contextOrVars : getIntlContext();
        const vars = knownContext ? varsOrFormats : contextOrVars;
        const overrideFormats = knownContext ? formats : varsOrFormats;

        let data = cache[langOf(context)];
        if (!data) {
          load(context).catch(() => undefined);
          data = cache[defaultLang()];
        }

        const value = data?.[p];
        if (typeof value === "string") {
          return value;
        } else if (value instanceof TranslationValue) {
          let str = value.value;
          if (value.icu) {
            str = formatMessage(context, str, vars, overrideFormats);
          }
          if (value.type === "html") {
            return new HtmlString(str);
          } else {
            return str;
          }
        }
        return p;
      };
    }
  });

  const file: I18nFile<Keys> = {
    keys,
    load: load as I18nFile<Keys>["load"],
    loaded: (context?: IntlContext | string) => context !== undefined ? !!cache[langOf(context)] : Object.keys(cache).length > 0
  };

  registerI18nFile(file);

  return file;
}
