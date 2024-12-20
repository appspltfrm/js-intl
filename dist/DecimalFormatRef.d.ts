import { BigNumber } from "bignumber.js";
import { IntlRef } from "./IntlRef.js";
export declare class DecimalFormatRef extends IntlRef {
    static readonly jsonTypeName = "intl/DecimalFormatRef";
    static fromJSON(json: any): DecimalFormatRef;
    constructor(value: number | BigNumber, options?: Intl.NumberFormatOptions);
    constructor(value: number | BigNumber, predefined: string, options?: Intl.NumberFormatOptions);
    readonly value: BigNumber;
    readonly options?: Intl.NumberFormatOptions;
    readonly predefined?: string;
    toJSON(): any;
}
