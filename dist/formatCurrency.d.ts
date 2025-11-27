import { CurrencyAndNumber } from "./CurrencyAndNumber.js";
import { IntlContext } from "./IntlContext.js";
import { Money } from "./Money.js";
type ValueType = Money | CurrencyAndNumber;
type PredefinedOptionsOrOptionsType = string | Intl.NumberFormatOptions;
export declare function formatCurrency(value: ValueType, predefinedOptionsOrOptions?: string | Intl.NumberFormatOptions, additionalOptions?: Intl.NumberFormatOptions): string;
export declare function formatCurrency(context: IntlContext, value: ValueType, predefinedOptionsOrOptions?: PredefinedOptionsOrOptionsType, additionalOptions?: Intl.NumberFormatOptions): string;
export {};
