import {defineGlobals} from "./defineGlobals.js";
import {IntlContext} from "./IntlContext.js";
import {IntlStore} from "./IntlStore.js";

defineGlobals();

function loadPolyfillsLocale() {

  if (INTL_POLYFILL && INTL_POLYFILL.length && IntlPolyfill) {
    for (const a of INTL_POLYFILL) {
      IntlPolyfill.__addLocaleData(a);
    }

    INTL_POLYFILL = [];
  }

  if (INTL_RELATIVE_POLYFILL && INTL_RELATIVE_POLYFILL.length && Intl["RelativeTimeFormat"] && (Intl["RelativeTimeFormat"] as any)["__addLocaleData"]) {
    for (const a of INTL_RELATIVE_POLYFILL) {
      (Intl["RelativeTimeFormat"] as any)["__addLocaleData"](a);
    }

    INTL_RELATIVE_POLYFILL = [];
  }
}

loadPolyfillsLocale();

export class IntlHelper extends IntlContext {

  constructor(defaultLocale?: string, defaultNamespace?: string) {
    super();

    this.locale = defaultLocale!;
    this.defaultNamespace$ = defaultNamespace!;

    loadPolyfillsLocale();
  }

  /**
     * Path or url to a directory, where intl resources are stored.
     */
  declare public resourcesLocation: string;

  public setResourcesLocation(location: string) {
    this.resourcesLocation = location;
  }

  private useCache: boolean = true;

  private defaultNamespace$: string;

  get defaultNamespace() {
    return this.defaultNamespace$;
  }

  public setDefaultNamespace(namespace: string) {
    this.defaultNamespace$ = namespace;
  }

  private namespaceAliases: {[alias: string]: string} = {};

  public addNamespaceAlias(namespace: string, alias: string) {
    this.namespaceAliases[alias] = namespace;
  }

  /**
     * Selected locale. By default it takes browser locale.
     */
  private _locale!: string;

  public get locale(): string {
    return this._locale;
  }

  public set locale(locale: string) {
    this._locale = locale || INTL_LOCALE || INTL_DEFAULT_LOCALE || "en-US";

    this._locales = [];

    let segments = this._locale.split("-");

    for (let i = 0; i < segments.length; i++) {
      this._locales.push(segments.slice(0, i + 1).join("-"));
    }
  }

  public setLocale(locale: string): this {
    this.locale = locale;
    return this;
  }

  /**
     * Selected locale's segments
     */
  private _locales!: string[];

  public get locales(): string[] {

    if (this._locales) {
      return this._locales.slice();
    }

    return [];
  }

  public value<T = string>(value: IntlStore<T>): T | undefined {

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
