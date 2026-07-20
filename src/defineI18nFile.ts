import {HtmlString} from "@appspltfrm/js-utils/core/HtmlString.js";
import {registerI18nFile} from "./_i18nFilesRegistry.js";
import {formatMessage} from "./formatMessage.js";
import {getIntlContext} from "./getIntlContext.js";
import {I18nFile, I18nFileData, I18nFileImporter, I18nFileKeys, TranslationValue} from "./I18nFile.js";
import {IntlContext} from "./IntlContext.js";

/**
 * Creates the runtime handle used by generated `*.i18n.ts` modules.
 * Every created file is registered, so {@link loadI18nFiles} can reload
 * all of them when the locale changes.
 */
export function defineI18nFile<Keys extends I18nFileKeys = I18nFileKeys>(importer: I18nFileImporter): I18nFile<Keys> {

  const cache: {[locale: string]: I18nFileData} = {};

  const load = async (context?: IntlContext) => {
    if (!context) {
      context = getIntlContext();
    }
    if (!cache[context.locale]) {
      cache[context.locale] = await importer(context.locale);
    }
    return file;
  };

  const keys = new Proxy({} as Keys, {
    get: (_target, p: string) => {
      return (vars?: any, overrideFormats?: any) => {
        const context = getIntlContext();
        const value = cache[context.locale]?.[p];
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
      };
    }
  });

  const file: I18nFile<Keys> = {
    keys,
    load: load as I18nFile<Keys>["load"],
    loaded: (context?: IntlContext) => context ? !!cache[context.locale] : Object.keys(cache).length > 0
  };

  registerI18nFile(file);

  return file;
}
