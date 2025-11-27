export class Currency {

	static readonly jsonTypeName = "intl/Currency";

    static readonly PTS = "PTS";

	static fromJSON(json: any) {

		if (typeof json === "string") {
			return new Currency(json);
		} else if (json && typeof json["code"] === "string") {
			return new Currency(json);
		} else {
			throw new Error("Cannot unserialize '" + json + "' to Currency instance");
		}
	}

	constructor(code: string);

	constructor(codeOrPrototype: string | Partial<Currency>) {

		if (typeof codeOrPrototype === "string") {
			this.code = codeOrPrototype;
		} else if (codeOrPrototype.code && typeof codeOrPrototype.code === "string") {
			this.code = codeOrPrototype.code;
		} else {
			throw new Error("Currency code must be given in order to create Currency instance");
		}
	}

	readonly code: string;

	toString(): string {
		return this.code;
	}

	toJSON() {
		return {"@type": Currency.jsonTypeName, code: this.code};
	}
}
