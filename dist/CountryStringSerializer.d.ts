import type { SerializationOptions } from "@appspltfrm/js-utils/json/SerializationOptions.js";
import { Serializer } from "@appspltfrm/js-utils/json/Serializer.js";
export declare class CountryStringSerializer extends Serializer {
    unserialize(json: any, options: SerializationOptions | undefined): any;
    serialize(object: any, options?: SerializationOptions): any;
}
