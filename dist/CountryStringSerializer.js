import { Serializer } from "@appspltfrm/js-utils/json";
import { Country } from "./Country.js";
export class CountryStringSerializer extends Serializer {
    unserialize(json, options) {
        if (this.isUndefinedOrNull(json)) {
            return json;
        }
        return Country.fromJSON(json);
    }
    serialize(object, options) {
        if (this.isUndefinedOrNull(object)) {
            return object;
        }
        else if (object instanceof Country) {
            return object.code;
        }
        return object.toJSON();
    }
}
//# sourceMappingURL=CountryStringSerializer.js.map