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
export declare function translate<R extends string | HtmlString | any = any>(key: TranslateKeyType, values?: any, options?: TranslateOptions): R;
export declare function translate<R extends string | HtmlString | any = any>(context: IntlContext, key: TranslateKeyType, values?: any, options?: TranslateOptions): R;
export {};
