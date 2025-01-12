import { BigNumber } from "bignumber.js";
import { DecimalFormatRef } from "./DecimalFormatRef.js";
import { IntlContext } from "./IntlContext.js";
type ValueType = number | BigNumber | DecimalFormatRef;
type PredefinedOptionsType = string | Intl.NumberFormatOptions;
export declare function formatDecimal(value: ValueType, predefinedOptionsOrOptions?: string | Intl.NumberFormatOptions, additionalOptions?: Intl.NumberFormatOptions): any;
export declare function formatDecimal(context: IntlContext, value: ValueType, predefinedOptionsOrOptions?: PredefinedOptionsType, additionalOptions?: Intl.NumberFormatOptions): any;
export {};
