import { type IntlContext } from "@appspltfrm/js-intl";
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
export declare namespace TranslationsCollection {
    type Items = {
        [item: string]: {
            [key: string]: Function;
        };
    };
    abstract class Value {
        readonly value: string;
        readonly icu: boolean;
        constructor(value: string, icu?: boolean);
        readonly type: "text" | "html";
    }
    class TextValue extends Value {
        readonly type = "text";
    }
    class HtmlValue extends Value {
        readonly type = "html";
    }
    function defineCollection<Items extends TranslationsCollection.Items>(name: string, importer: (locale: string) => Promise<{
        [item: string]: {
            [key: string]: any;
        };
    }>): TranslationsCollection<Items>;
}
