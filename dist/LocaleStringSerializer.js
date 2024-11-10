import { Serializer } from "@appspltfrm/js-utils/json";
import { Locale } from "./Locale.js";
export class LocaleStringSerializer extends Serializer {
    unserialize(json, options) {
        if (this.isUndefinedOrNull(json)) {
            return json;
        }
        return Locale.fromJSON(json);
    }
    serialize(object, options) {
        if (this.isUndefinedOrNull(object)) {
            return object;
        }
        else if (object instanceof Locale) {
            return object.code;
        }
        return object.toJSON();
    }
}
//# sourceMappingURL=LocaleStringSerializer.js.map