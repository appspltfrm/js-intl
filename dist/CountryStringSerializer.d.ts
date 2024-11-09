import { SerializationOptions, Serializer } from "@appspltfrm/js-utils/json";
export declare class CountryStringSerializer extends Serializer {
    unserialize(json: any, options: SerializationOptions | undefined): any;
    serialize(object: any, options?: SerializationOptions): any;
}
