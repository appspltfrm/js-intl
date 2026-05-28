import { ObjectAsMapSerializer } from "@appspltfrm/js-utils/json/ObjectAsMapSerializer.js";
import type { SerializationOptions } from "@appspltfrm/js-utils/json/SerializationOptions.js";
export declare class IntlStringsStoreSerializer extends ObjectAsMapSerializer {
    private readonly allowPlainValue?;
    constructor(allowPlainValue?: boolean | undefined);
    serialize(value: any, options?: SerializationOptions): any;
    unserialize(value: any, options?: SerializationOptions): any;
}
