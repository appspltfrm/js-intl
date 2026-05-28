import { IntlContext } from "./IntlContext.js";
import { IntlStore } from "./IntlStore.js";
export declare class IntlHelper extends IntlContext {
    constructor(defaultLocale?: string, defaultNamespace?: string);
    /**
       * Path or url to a directory, where intl resources are stored.
       */
    resourcesLocation: string;
    setResourcesLocation(location: string): void;
    private useCache;
    private defaultNamespace$;
    get defaultNamespace(): string;
    setDefaultNamespace(namespace: string): void;
    private namespaceAliases;
    addNamespaceAlias(namespace: string, alias: string): void;
    /**
       * Selected locale. By default it takes browser locale.
       */
    private _locale;
    get locale(): string;
    set locale(locale: string);
    setLocale(locale: string): this;
    /**
       * Selected locale's segments
       */
    private _locales;
    get locales(): string[];
    value<T = string>(value: IntlStore<T>): T | undefined;
}
