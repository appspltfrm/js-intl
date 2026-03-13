import {formatMessage, getIntlContext, type IntlContext} from "@appspltfrm/js-intl";
import {HtmlString} from "@appspltfrm/js-utils/core";

export interface TranslationsCollection<Items extends TranslationsCollection.Items> {
    (): Items["index"];
    <T extends keyof Items>(context: IntlContext): Items["index"];
    <T extends keyof Items>(item: T): Items[T];
    <T extends keyof Items>(item: T, context: IntlContext): Items[T];

    load(): Promise<this>;
    load(context: IntlContext): Promise<this>;

    loaded(): boolean;
    loaded(context: IntlContext): boolean;
}

export namespace TranslationsCollection {

    export type Items = {[item: string]: {[key: string]: Function}};

    export abstract class Value {
        constructor(public readonly value: string, public readonly icu: boolean = false) {
        }

        readonly type!: "text" | "html";
    }

    export class TextValue extends Value {
        readonly type = "text";
    }

    export class HtmlValue extends Value {
        readonly type = "html";
    }

    export function defineCollection<Items extends TranslationsCollection.Items>(name: string, importer: (locale: string) => Promise<{[item: string]: {[key: string]: any}}>): TranslationsCollection<Items> {

        const items: {[item: string]: any} = {};
        const cache: {[locale: string]: {[item: string]: {[key: string]: any}}} = {};

        const load = async (context?: IntlContext) => {

            if (!context) {
                context = getIntlContext();
            }

            if (!cache[context.locale]) {
                cache[context.locale] = await importer(context.locale);
            }

            return collection;
        }

        function getItem() {
            const useContext = typeof arguments[0] === "object" ? arguments[0] : arguments[1];
            const item = typeof arguments[0] === "string" ? arguments[0] : "index";

            if (items[item]) {
                return items[item];
            } else {
                load(useContext);

                return items[item] = new Proxy({} as any, {
                    get: (target, p: string, receiver: any) => {
                        const context = useContext ? useContext : getIntlContext();
                        const value = (cache[context.locale] as Items)?.[item]?.[p];
                        return (vars: any, overrideFormats?: any) => {
                            if (typeof value === "string") {
                                return value;
                            } else if (value instanceof TranslationsCollection.Value) {
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
                        }
                    }
                })
            }
        }

        const collection = getItem as TranslationsCollection<Items>;

        collection.loaded = (context?: IntlContext) => context ? !!cache[context.locale] : Object.keys(cache).length > 0;
        collection.load = load.bind(collection);

        return collection;
    }
}
