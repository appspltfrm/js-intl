import { BigNumber } from "bignumber.js";
import { CurrencyAndNumber } from "./CurrencyAndNumber.js";
import { IntlContext } from "./IntlContext.js";
import { Money } from "./Money.js";
export type NumberFormatType = "currency" | "percent" | "decimal";
export declare function formatNumber(context: IntlContext, mode: NumberFormatType, value: number | Money | BigNumber | CurrencyAndNumber, predefinedOptionsOrOptions?: string | Intl.NumberFormatOptions, additionalOptions?: Intl.NumberFormatOptions): string;
