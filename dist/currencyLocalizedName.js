import { formatCurrency } from "./formatCurrency.js";
export function currencyLocalizedName(currency) {
    return formatCurrency([currency, 2], { currencyDisplay: "name", maximumSignificantDigits: 1, minimumSignificantDigits: 1 }).replace(/\W*\d+\W*/, "");
}
//# sourceMappingURL=currencyLocalizedName.js.map