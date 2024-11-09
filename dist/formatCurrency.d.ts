import { CurrencyAndNumber } from "./CurrencyAndNumber";
import { IntlContext } from "./IntlContext";
import { Money } from "./Money";
type ValueType = Money | CurrencyAndNumber;
type PredefinedOptionsOrOptionsType = string | Intl.NumberFormatOptions;
export declare function formatCurrency(value: ValueType, predefinedOptionsOrOptions?: string | Intl.NumberFormatOptions, additionalOptions?: Intl.NumberFormatOptions): any;
export declare function formatCurrency(context: IntlContext, value: ValueType, predefinedOptionsOrOptions?: PredefinedOptionsOrOptionsType, additionalOptions?: Intl.NumberFormatOptions): any;
export {};
