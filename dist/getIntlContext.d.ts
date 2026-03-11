import { IntlContext } from "./IntlContext.js";
declare let fn: () => IntlContext;
export declare function getIntlContext(): IntlContext;
export declare function setIntlContextGetter(f: typeof fn): void;
export {};
