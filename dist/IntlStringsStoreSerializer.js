import { ObjectAsMapSerializer, serialize, unserialize } from "@appspltfrm/js-utils/json";
export class IntlStringsStoreSerializer extends ObjectAsMapSerializer {
    allowPlainValue;
    constructor(allowPlainValue) {
        super(String);
        this.allowPlainValue = allowPlainValue;
    }
    serialize(value, options) {
        if (this.allowPlainValue && typeof value === "string") {
            return serialize(value, options);
        }
        else {
            return super.serialize(value, options);
        }
    }
    unserialize(value, options) {
        if (this.allowPlainValue && typeof value === "string") {
            return unserialize(value, String, options);
        }
        else {
            return super.serialize(value, options);
        }
    }
}
//# sourceMappingURL=IntlStringsStoreSerializer.js.map