import { Serializer } from "@appspltfrm/js-utils/json";
import { Money } from "./Money.js";
export class MoneyStringSerializer extends Serializer {
    unserialize(json, options) {
        if (this.isUndefinedOrNull(json)) {
            return json;
        }
        return Money.fromJSON(json);
    }
    serialize(object, options) {
        if (this.isUndefinedOrNull(object)) {
            return object;
        }
        else if (object instanceof Money) {
            return object.toString();
        }
        return object.toJSON();
    }
}
//# sourceMappingURL=MoneyStringSerializer.js.map