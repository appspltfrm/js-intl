import { HtmlString } from "@appspltfrm/js-utils/core/HtmlString.js";
import { registerI18nFile } from "./_i18nFilesRegistry.js";
import { formatMessage } from "./formatMessage.js";
import { getIntlContext } from "./getIntlContext.js";
import { TranslationValue } from "./I18nFile.js";
/**
 * Creates the runtime handle used by generated `*.i18n.ts` modules.
 * Every created file is registered, so {@link loadI18nFiles} can reload
 * all of them when the locale changes.
 */
export function defineI18nFile(importer) {
    const cache = {};
    const load = async (context) => {
        if (!context) {
            context = getIntlContext();
        }
        if (!cache[context.locale]) {
            cache[context.locale] = await importer(context.locale);
        }
        return file;
    };
    const keys = new Proxy({}, {
        get: (_target, p) => {
            return (vars, overrideFormats) => {
                const context = getIntlContext();
                const value = cache[context.locale]?.[p];
                if (typeof value === "string") {
                    return value;
                }
                else if (value instanceof TranslationValue) {
                    let str = value.value;
                    if (value.icu) {
                        str = formatMessage(context, str, vars, overrideFormats);
                    }
                    if (value.type === "html") {
                        return new HtmlString(str);
                    }
                    else {
                        return str;
                    }
                }
            };
        }
    });
    const file = {
        keys,
        load: load,
        loaded: (context) => context ? !!cache[context.locale] : Object.keys(cache).length > 0
    };
    registerI18nFile(file);
    return file;
}
//# sourceMappingURL=defineI18nFile.js.map