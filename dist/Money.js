import { BigNumber } from "bignumber.js";
import { Currency } from "./Currency.js";
function toBigNumber(value) {
    if (value instanceof BigNumber) {
        return value;
    }
    else if (typeof value === "number") {
        return new BigNumber(value);
    }
    else if (typeof value === "string") {
        return new BigNumber(value);
    }
    else {
        throw new Error("Value '" + value + "' cannot be converted to BigNumber.");
    }
}
export class Money {
    static jsonTypeName = "intl/Money";
    static fromJSON(json) {
        if (typeof json === "string") {
            return new Money(json.substr(0, 3), json.substr(3));
        }
        else if (Array.isArray(json)) {
            if (json.length === 2 && typeof json[0] === "string" && (typeof json[1] === "string" || typeof json[1] === "number")) {
                const currency = json[0];
                let amount = json[1];
                return new Money(json[0], json[1]);
            }
        }
        else if (json && json.currency && json.amount) {
            return new Money(json.currency, json.amount);
        }
        throw new Error("Cannot unserialize '" + json + "' to Money");
    }
    constructor(currencyOrPrototype, amount) {
        if (currencyOrPrototype instanceof Currency || typeof currencyOrPrototype === "string") {
            this.currency = currencyOrPrototype instanceof Currency ? currencyOrPrototype : new Currency(currencyOrPrototype);
            this.amount = toBigNumber(amount);
        }
        else if (currencyOrPrototype) {
            this.amount = toBigNumber(currencyOrPrototype.amount);
            this.currency = currencyOrPrototype.currency instanceof Currency ? currencyOrPrototype.currency : new Currency(currencyOrPrototype.currency);
        }
    }
    currency;
    amount;
    plus(amount) {
        return new Money(this.currency, this.amount.plus(amount));
    }
    minus(amount) {
        return new Money(this.currency, this.amount.minus(amount));
    }
    times(amount) {
        return new Money(this.currency, this.amount.times(amount));
    }
    dividedBy(amount) {
        return new Money(this.currency, this.amount.dividedBy(amount));
    }
    decimalPlaces(dp, roundingMode) {
        return new Money(this.currency, this.amount.decimalPlaces(dp, roundingMode));
    }
    comparedTo(money) {
        return this.compareTo(money);
    }
    compareTo(money) {
        if (typeof money === "number")
            return this.amount.comparedTo(money);
        else if (money instanceof BigNumber)
            return this.amount.comparedTo(money);
        else if (money)
            return this.amount.comparedTo(money.amount);
        else
            throw new Error("Cannot compare empty value");
    }
    toJSON() {
        return { "@type": Money.jsonTypeName, currency: this.currency.code, amount: this.amount.toString() };
    }
    toString() {
        return this.currency.code + this.amount.toString();
    }
}
//# sourceMappingURL=Money.js.map