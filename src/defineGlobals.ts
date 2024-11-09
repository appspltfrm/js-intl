declare global {
    let INTL_DEFAULT_CONTEXT: any;
    let INTL_LOCALE: string;
    let INTL_DEFAULT_LOCALE: string;
    let INTL_SUPPORTED_LOCALE: string[] | string;
    let INTL_LOCALE_URL_PATH: boolean | string;
    let INTL_LOCALE_URL_PARAM: string;
    let INTL_LOCALE_STORAGE_KEY: string;
    let INTL_LOCALE_MATRIX_PATH: string;
    let INTL_LOCALE_MATRIX_PARAM: string;
    let INTL_POLYFILL: any[];
    let INTL_RELATIVE_POLYFILL: any[];
    let IntlPolyfill: any;
    let INTL_VALUES: any;
    let INTL_VALUES_VERSIONS: {[namespace: string]: {name: string, messages: {[locale: string]: {[key: string]: any}}}[]};

    /**
     * @deprecated
     */
    let INTL_MESSAGES: any;

    /**
     * @deprecated
     */
    let INTL_MESSAGES_VERSIONS: {[namespace: string]: {name: string, messages: {[locale: string]: {[key: string]: any}}}[]};
}

let defined = false;

export function defineGlobals() {

    if (defined) {
        return;
    }

    for (const v of ["INTL_DEFAULT_CONTEXT", "INTL_LOCALE", "INTL_DEFAULT_LOCALE", "INTL_SUPPORTED_LOCALE", "INTL_LOCALE_URL_PARAM", "INTL_LOCALE_URL_PATH", "INTL_LOCALE_MATRIX_PATH", "INTL_LOCALE_MATRIX_PARAM", "INTL_LOCALE_STORAGE_KEY", "INTL_POLYFILL", "INTL_RELATIVE_POLYFILL", "IntlPolyfill", "INTL_VALUES", "INTL_VALUES_VERSIONS", "INTL_MESSAGES", "INTL_MESSAGES_VERSIONS"]) {
        if (typeof window !== "undefined" && !window[v]) {
            window[v] = undefined;
        }

        if (typeof global !== "undefined" && !global[v]) {
            global[v] = undefined;
        }
    }

    defined = true;
}
