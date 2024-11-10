import {SerializationOptions, Serializer} from "@appspltfrm/js-utils/json";
import {Country} from "./Country.js";

export class CountryStringSerializer extends Serializer {

    unserialize(json: any, options: SerializationOptions | undefined): any {

        if (this.isUndefinedOrNull(json)) {
            return json;
        }

        return Country.fromJSON(json);
    }

    serialize(object: any, options?: SerializationOptions): any {

        if (this.isUndefinedOrNull(object)) {
            return object;
        } else if (object instanceof Country) {
            return object.code;
        }

        return object.toJSON();
    }
}
