import {Currency} from "./Currency.js";
import {formatCurrency} from "./formatCurrency.js";

export function currencyLocalizedName(currency: string | Currency) {
    return formatCurrency([currency, 2], {currencyDisplay: "name", maximumSignificantDigits: 1, minimumSignificantDigits: 1}).replace(/\w*\d\w*/, "");
}
