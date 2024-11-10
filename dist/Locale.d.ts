import type { IntlBundleItem } from "./BundleGenerator/BundleGenerator.js";
import { MessageRef } from "./MessageRef.js";
export declare const localeIntlBundleItem: IntlBundleItem;
/**
 * https://en.wikipedia.org/wiki/IETF-language-tag
 */
export declare class Locale {
    private static _codes;
    private static _languages;
    static readonly jsonTypeName = "intl/Locale";
    static fromJSON(json: any): Locale;
    constructor(code: string);
    readonly code: string;
    readonly name: MessageRef;
    toString(): string;
    toJSON(): {
        "@type": string;
        code: string;
    };
}
