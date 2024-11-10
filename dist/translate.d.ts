import { IntlContext } from "./IntlContext.js";
import { MessageRef } from "./MessageRef.js";
import { ValueKey } from "./ValueKey.js";
import { ValueRef } from "./ValueRef.js";
type KeyType = ValueKey | MessageRef | ValueRef | [namespace: string, key: string];
interface TranslateOptions {
    formats?: any;
    defaultMessage?: "key" | "undefined" | ((namespace: string, key: string) => string);
}
export declare function translate(key: KeyType, values?: any, options?: TranslateOptions): string;
export declare function translate(context: IntlContext, key: KeyType, values?: any, options?: TranslateOptions): string;
export {};
