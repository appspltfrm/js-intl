export class Currency {
    static jsonTypeName = "intl/Currency";
    static PTS = "PTS";
    static fromJSON(json) {
        if (typeof json === "string") {
            return new Currency(json);
        }
        else if (json && typeof json["code"] === "string") {
            return new Currency(json);
        }
        else {
            throw new Error("Cannot unserialize '" + json + "' to Currency instance");
        }
    }
    constructor(codeOrPrototype) {
        if (typeof codeOrPrototype === "string") {
            this.code = codeOrPrototype;
        }
        else if (codeOrPrototype.code && typeof codeOrPrototype.code === "string") {
            this.code = codeOrPrototype.code;
        }
        else {
            throw new Error("Currency code must be given in order to create Currency instance");
        }
    }
    code;
    toString() {
        return this.code;
    }
    toJSON() {
        return { "@type": Currency.jsonTypeName, code: this.code };
    }
}
//# sourceMappingURL=Currency.js.map