import { DateTimezone, HtmlString, Timestamp, TimeZoneDate } from "@appspltfrm/js-utils/core";
import { BigNumber } from "bignumber.js";
import { CurrencyAndNumber } from "./CurrencyAndNumber.js";
import { DecimalFormatRef } from "./DecimalFormatRef.js";
import { IntlContext } from "./IntlContext.js";
import { IntlStore } from "./IntlStore.js";
import { MessageRef } from "./MessageRef.js";
import { Money } from "./Money.js";
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
    value<T = string>(value: IntlStore<T>): T;
    messageFormat(message: string, values: {
        [key: string]: any;
    }, formats?: any): string | HtmlString;
    message(strings: TemplateStringsArray, ...values: any): string | HtmlString;
    message(key: string | MessageRef, values?: any, formats?: any): string | HtmlString;
    relativeFormat(dateTime: number | Date | DateTimezone | Timestamp, options?: any): string;
    dateFormat(dateTime: number | Date | DateTimezone | TimeZoneDate | Timestamp, options?: Intl.DateTimeFormatOptions): string;
    timeFormat(dateTime: number | Date | DateTimezone | TimeZoneDate | Timestamp, options?: Intl.DateTimeFormatOptions): string;
    dateTimeFormat(dateTime: number | Date | DateTimezone | TimeZoneDate | Timestamp, options?: Intl.DateTimeFormatOptions): string;
    currencyFormat(value: Money | CurrencyAndNumber, predefinedOptions: string, additionalOptions?: Intl.NumberFormatOptions): any;
    currencyFormat(value: Money | CurrencyAndNumber, options?: Intl.NumberFormatOptions): any;
    decimalFormat(value: number | BigNumber | DecimalFormatRef, predefinedOptionsOrOptions?: string | Intl.NumberFormatOptions, additionalOptions?: Intl.NumberFormatOptions): any;
    percentFormat(value: number | BigNumber, predefinedOptionsOrOptions?: string | Intl.NumberFormatOptions, additionalOptions?: Intl.NumberFormatOptions): string;
}
