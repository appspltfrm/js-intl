import { HtmlString } from "@appspltfrm/js-utils/core";
import { defineGlobals } from "./defineGlobals.js";
import { formatDecimal } from "./formatDecimal.js";
import { formatMessage } from "./formatMessage.js";
import { formatNumber } from "./formatNumber.js";
import { formatRelativeTime } from "./formatRelativeTime.js";
import { formatTimeOrDateOrDateTime } from "./formatTimeOrDateOrDateTime.js";
import { IntlContext } from "./IntlContext.js";
import { translate } from "./translate.js";
defineGlobals();
function loadPolyfillsLocale() {
    if (INTL_POLYFILL && INTL_POLYFILL.length && IntlPolyfill) {
        for (const a of INTL_POLYFILL) {
            IntlPolyfill.__addLocaleData(a);
        }
        INTL_POLYFILL = [];
    }
    if (INTL_RELATIVE_POLYFILL && INTL_RELATIVE_POLYFILL.length && Intl["RelativeTimeFormat"] && Intl["RelativeTimeFormat"]["__addLocaleData"]) {
        for (const a of INTL_RELATIVE_POLYFILL) {
            Intl["RelativeTimeFormat"]["__addLocaleData"](a);
        }
        INTL_RELATIVE_POLYFILL = [];
    }
}
loadPolyfillsLocale();
export class IntlHelper extends IntlContext {
    constructor(defaultLocale, defaultNamespace) {
        super();
        this.locale = defaultLocale;
        this.defaultNamespace$ = defaultNamespace;
        loadPolyfillsLocale();
    }
    setResourcesLocation(location) {
        this.resourcesLocation = location;
    }
    useCache = true;
    defaultNamespace$;
    get defaultNamespace() {
        return this.defaultNamespace$;
    }
    setDefaultNamespace(namespace) {
        this.defaultNamespace$ = namespace;
    }
    namespaceAliases = {};
    addNamespaceAlias(namespace, alias) {
        this.namespaceAliases[alias] = namespace;
    }
    /**
     * Selected locale. By default it takes browser locale.
     */
    _locale;
    get locale() {
        return this._locale;
    }
    set locale(locale) {
        this._locale = locale || INTL_LOCALE || INTL_DEFAULT_LOCALE || "en-US";
        this._locales = [];
        let segments = this._locale.split("-");
        for (let i = 0; i < segments.length; i++) {
            this._locales.push(segments.slice(0, i + 1).join("-"));
        }
    }
    setLocale(locale) {
        this.locale = locale;
        return this;
    }
    /**
     * Selected locale's segments
     */
    _locales;
    get locales() {
        if (this._locales) {
            return this._locales.slice();
        }
        return [];
    }
    value(value) {
        if (!value) {
            return;
        }
        for (let locale of this._locales) {
            if (value[locale]) {
                return value[locale];
            }
        }
    }
    messageFormat(message, values, formats) {
        return formatMessage(this, message, values, formats);
    }
    message(key, values, formats) {
        const message = translate(this, Array.isArray(key) ? (key.length > 0 ? key[0] : "") : key, values, { formats });
        if (typeof message === "string" || message instanceof HtmlString) {
            return message;
        }
        else if (message) {
            throw new Error("External message, use asyncMessage()");
        }
        else {
            return undefined;
        }
    }
    relativeFormat(dateTime, options) {
        return formatRelativeTime(this, dateTime, options);
    }
    dateFormat(dateTime, predefinedOptionsOrOptions, options) {
        return formatTimeOrDateOrDateTime(this, "date", dateTime, predefinedOptionsOrOptions, options);
    }
    timeFormat(dateTime, predefinedOptionsOrOptions, options) {
        return formatTimeOrDateOrDateTime(this, "time", dateTime, predefinedOptionsOrOptions, options);
    }
    dateTimeFormat(dateTime, predefinedOptionsOrOptions, options) {
        return formatTimeOrDateOrDateTime(this, "dateTime", dateTime, predefinedOptionsOrOptions, options);
    }
    currencyFormat(value, predefinedOptionsOrOptions, additionalOptions) {
        return formatNumber(this, "currency", value, predefinedOptionsOrOptions, additionalOptions);
    }
    decimalFormat(value, predefinedOptionsOrOptions, additionalOptions) {
        return formatDecimal(this, value, predefinedOptionsOrOptions, additionalOptions);
    }
    percentFormat(value, predefinedOptionsOrOptions, additionalOptions) {
        return formatNumber(this, "percent", value, predefinedOptionsOrOptions, additionalOptions);
    }
}
//# sourceMappingURL=IntlHelper.js.map