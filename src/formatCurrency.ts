import {CurrencyAndNumber} from "./CurrencyAndNumber.js";
import {defineGlobals} from "./defineGlobals.js";
import {formatNumber} from "./formatNumber.js";
import {IntlContext} from "./IntlContext.js";
import {Money} from "./Money.js";

defineGlobals();

type ValueType = Money | CurrencyAndNumber;
type PredefinedOptionsOrOptionsType = string | Intl.NumberFormatOptions;

export function formatCurrency(value: ValueType, predefinedOptionsOrOptions?: string | Intl.NumberFormatOptions, additionalOptions?: Intl.NumberFormatOptions);

export function formatCurrency(context: IntlContext, value: ValueType, predefinedOptionsOrOptions?: PredefinedOptionsOrOptionsType, additionalOptions?: Intl.NumberFormatOptions);

export function formatCurrency() {

    const knownContext = arguments[0] instanceof IntlContext ? 1 : 0;
    const context: IntlContext = knownContext ? arguments[0] : INTL_DEFAULT_CONTEXT;
    const value: ValueType = arguments[0 + knownContext];
    const predefinedOptions: PredefinedOptionsOrOptionsType = arguments[1 + knownContext];
    const additionalOptions: Intl.NumberFormatOptions = arguments[2 + knownContext];

    return formatNumber(context, "currency", value, predefinedOptions, additionalOptions);
}
