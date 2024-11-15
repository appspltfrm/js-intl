import { MessageRef } from "./MessageRef.js";
export declare class Country {
    private static readonly _iso;
    private static readonly _codes;
    static readonly jsonTypeName = "intl/Country";
    static fromJSON(json: string | Partial<Country>): Country;
    static codes(): string[];
    static countries(): Country[];
    constructor(code: string);
    constructor(code: Partial<Country>);
    readonly code: string;
    readonly name: MessageRef;
    get alpha2(): string;
    get alpha3(): string;
    equals(country: Country): boolean;
    toString(): string;
    toJSON(): {
        "@type": string;
        code: string;
    };
}
