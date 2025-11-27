export declare class Currency {
    static readonly jsonTypeName = "intl/Currency";
    static readonly PTS = "PTS";
    static fromJSON(json: any): Currency;
    constructor(code: string);
    readonly code: string;
    toString(): string;
    toJSON(): {
        "@type": string;
        code: string;
    };
}
