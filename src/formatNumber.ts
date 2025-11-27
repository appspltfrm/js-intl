import BigNumber from "bignumber.js";
import {Currency} from "./Currency.js";
import {CurrencyAndNumber} from "./CurrencyAndNumber.js";
import {formatMessage} from "./formatMessage.js";
import {getValue} from "./getValue.js";
import {IntlContext} from "./IntlContext.js";
import {Money} from "./Money.js";

export type NumberFormatType = "currency" | "percent" | "decimal";

export function formatNumber(context: IntlContext, mode: NumberFormatType, value: number | Money | BigNumber | CurrencyAndNumber, predefinedOptionsOrOptions?: string | Intl.NumberFormatOptions, additionalOptions?: Intl.NumberFormatOptions): string {

    const options: Intl.NumberFormatOptions = Object.assign({}, typeof predefinedOptionsOrOptions === "string" ? context.findPredefinedFormatOptions(predefinedOptionsOrOptions) : predefinedOptionsOrOptions, additionalOptions);

    if (mode == "currency") {
        options.style = "currency";
    } else if (mode == "percent") {
        options.style = "percent";
    } else {
        options.style = "decimal";
    }

    if (value instanceof Money) {

        if (mode == "currency") {
            options.currency = value.currency.code;
        }

        value = value.amount.toNumber();

    } else if (value instanceof BigNumber) {
        value = value.toNumber();

    } else if (Array.isArray(value) && value) {

        if (mode == "currency") {

            if (value[0] instanceof Currency) {
                options.currency = value[0].code;

            } else if (value[0]) {
                options.currency = value[0];
            }
        }

        if (value[1] instanceof BigNumber) {
            value = value[1].toNumber();
        } else {
            value = value[1];
        }
    }

    const format = new Intl.NumberFormat(context.locales, options);

    if (options.currency === Currency.PTS && options.style === "currency" && options.currencyDisplay === "name") {
        options.currency = undefined;
        options.style = "decimal";
        return formatMessage(context, getValue(context, "@appspltfrm/js-intl#ptsCurrencyFormattedAmount") as string, {amount: value as number}, {number: options});
    }

    return format.format(value as number);
}
