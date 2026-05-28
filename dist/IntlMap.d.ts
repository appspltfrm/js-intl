import type { SerializationOptions } from "@appspltfrm/js-utils/json/SerializationOptions.js";
export declare class IntlMap<Value = any> extends Map<string, Value> {
    readonly defaultLocale: string;
    static readonly jsonTypeName = "@appspltfrm/IntlMap";
    static fromJSON(value: any, options?: SerializationOptions): IntlMap<any>;
    constructor(defaultLocale: string);
    defaultValue(): Value | undefined;
    toJSON(options?: string | SerializationOptions): {
        "@type": string;
        defaultLocale: string;
        entries: any;
    };
}
