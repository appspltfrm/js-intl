var MessageRef_1;
import { __decorate, __metadata } from "tslib";
import { serialize, subtype } from "@appspltfrm/js-utils/json";
import { IntlRef } from "./IntlRef.js";
let MessageRef = class MessageRef extends IntlRef {
    static { MessageRef_1 = this; }
    static jsonTypeName = "intl/MessageRef";
    static fromJSON(json) {
        if (typeof json === "string") {
            const namespaceKey = json.trim().split("#");
            if (namespaceKey.length >= 2) {
                return new MessageRef_1(namespaceKey[0], namespaceKey[1]);
            }
            else {
                return new MessageRef_1(undefined, json);
            }
        }
        else if (Array.isArray(json) && json.length > 0) {
            const namespace = json.length > 1 ? json[0] : undefined;
            const key = (json.length == 1 && json[0]) || (json.length > 1 && json[1]);
            const values = json.length == 3 && json[2];
            const formats = json.length == 4 && json[3];
            if ((namespace === null || namespace === undefined || typeof namespace == "string") && typeof key == "string") {
                return new MessageRef_1(namespace, key, values, formats);
            }
        }
        else if (typeof json === "object" && typeof json.key === "string" && json.key) {
            return new MessageRef_1((typeof json.namespace === "string" && json.namespace) || undefined, json.key, typeof json.values === "object" ? json.values : undefined, json.formats);
        }
        throw new Error(`Cannot unserialize "${json}" as @appspltfrm/js-intl/MessageRef`);
    }
    constructor(namespaceOrKey, keyOrValues, valuesOrFormats, formats) {
        super("message");
        if (typeof keyOrValues === "string") {
            this.namespace = namespaceOrKey;
            this.key = keyOrValues;
            this.values = valuesOrFormats;
            this.formats = formats;
        }
        else {
            this.key = namespaceOrKey;
            this.values = keyOrValues;
            this.formats = valuesOrFormats;
        }
    }
    namespace;
    key;
    values;
    formats;
    toJSON() {
        const json = {
            "@type": MessageRef_1.jsonTypeName,
            key: this.key
        };
        if (this.namespace) {
            json.namespace = this.namespace;
        }
        if (this.values) {
            json.values = serialize(this.values);
        }
        return json;
    }
    toString() {
        return this.key;
    }
};
MessageRef = MessageRef_1 = __decorate([
    subtype(IntlRef, "refType", "message"),
    __metadata("design:paramtypes", [String, Object, Object, Object])
], MessageRef);
export { MessageRef };
//# sourceMappingURL=MessageRef.js.map