import {SerializationOptions, Serializer} from "@appspltfrm/js-utils/json";
import {Currency} from "./Currency.js";

export class CurrencyStringSerializer extends Serializer {

    unserialize(json: any, options: SerializationOptions | undefined): any {

        if (this.isUndefinedOrNull(json)) {
            return json;
        }

        return Currency.fromJSON(json);
    }

    serialize(object: any, options?: SerializationOptions): any {

        if (this.isUndefinedOrNull(object)) {
            return object;
        } else if (object instanceof Currency) {
            return object.code;
        }

        return object.toJSON();
    }
}
