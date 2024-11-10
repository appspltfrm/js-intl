import { BigNumber } from "bignumber.js";
import { Currency } from "./Currency.js";
export type CurrencyAndNumber = [currency: string | Currency, amount: number | BigNumber];
