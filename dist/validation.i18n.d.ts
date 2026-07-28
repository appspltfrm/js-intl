import type { IntlContext } from "./IntlContext.js";
export declare const validationI18n: import("./I18nFile.js").I18nFile<import("./I18nFile.js").I18nFileKeys>;
export declare const invalidValue_err: {
    (): string;
    (context: IntlContext): string;
}, valueMinCharsLength_err: {
    (vars: {
        length: number;
    }, overrideFormats?: any): string;
    (context: IntlContext, vars: {
        length: number;
    }, overrideFormats?: any): string;
}, requiredValue_err: {
    (): string;
    (context: IntlContext): string;
}, invalidHttpUrl_err: {
    (): string;
    (context: IntlContext): string;
};
