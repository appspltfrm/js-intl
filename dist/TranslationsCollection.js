import { formatMessage, getIntlContext } from "@appspltfrm/js-intl";
import { HtmlString } from "@appspltfrm/js-utils/core";
export var TranslationsCollection;
(function (TranslationsCollection) {
    class Value {
        value;
        icu;
        constructor(value, icu = false) {
            this.value = value;
            this.icu = icu;
        }
        type;
    }
    TranslationsCollection.Value = Value;
    class TextValue extends Value {
        type = "text";
    }
    TranslationsCollection.TextValue = TextValue;
    class HtmlValue extends Value {
        type = "html";
    }
    TranslationsCollection.HtmlValue = HtmlValue;
    function defineCollection(name, importer) {
        const items = {};
        const cache = {};
        const load = async (context) => {
            if (!context) {
                context = getIntlContext();
            }
            if (!cache[context.locale]) {
                cache[context.locale] = await importer(context.locale);
            }
            return collection;
        };
        function getItem() {
            const useContext = typeof arguments[0] === "object" ? arguments[0] : arguments[1];
            const item = typeof arguments[0] === "string" ? arguments[0] : "index";
            if (items[item]) {
                return items[item];
            }
            else {
                load(useContext);
                return items[item] = new Proxy({}, {
                    get: (target, p, receiver) => {
                        const context = useContext ? useContext : getIntlContext();
                        const value = cache[context.locale]?.[item]?.[p];
                        return (vars, overrideFormats) => {
                            if (typeof value === "string") {
                                return value;
                            }
                            else if (value instanceof TranslationsCollection.Value) {
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
            }
        }
        const collection = getItem;
        collection.loaded = (context) => context ? !!cache[context.locale] : Object.keys(cache).length > 0;
        collection.load = load.bind(collection);
        return collection;
    }
    TranslationsCollection.defineCollection = defineCollection;
})(TranslationsCollection || (TranslationsCollection = {}));
//# sourceMappingURL=TranslationsCollection.js.map