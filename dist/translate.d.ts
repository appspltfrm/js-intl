import { HtmlString } from "@appspltfrm/js-utils/core";
import { IntlContext } from "./IntlContext.js";
import { MessageRef } from "./MessageRef.js";
import { ValueKey } from "./ValueKey.js";
import { ValueRef } from "./ValueRef.js";
export type TranslateKeyType = ValueKey | MessageRef | ValueRef | [namespace: string, key: string];
interface TranslateOptions {
    formats?: any;
    defaultMessage?: "key" | "undefined" | ((namespace: string, key: string) => string | HtmlString);
}
export declare function translate(key: TranslateKeyType, values?: any, options?: TranslateOptions): string | HtmlString;
export declare function translate(context: IntlContext, key: TranslateKeyType, values?: any, options?: TranslateOptions): string | HtmlString;
export {};
