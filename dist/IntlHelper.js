import { defineGlobals } from "./defineGlobals.js";
import { IntlContext } from "./IntlContext.js";
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
}
//# sourceMappingURL=IntlHelper.js.map