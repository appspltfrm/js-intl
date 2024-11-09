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
    let INTL_VALUES_VERSIONS: {
        [namespace: string]: {
            name: string;
            messages: {
                [locale: string]: {
                    [key: string]: any;
                };
            };
        }[];
    };
    /**
     * @deprecated
     */
    let INTL_MESSAGES: any;
    /**
     * @deprecated
     */
    let INTL_MESSAGES_VERSIONS: {
        [namespace: string]: {
            name: string;
            messages: {
                [locale: string]: {
                    [key: string]: any;
                };
            };
        }[];
    };
}
export declare function defineGlobals(): void;
