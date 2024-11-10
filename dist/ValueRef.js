var ValueRef_1;
import { __decorate, __metadata } from "tslib";
import { subtype } from "@appspltfrm/js-utils/json";
import { IntlRef } from "./IntlRef.js";
let ValueRef = class ValueRef extends IntlRef {
    static { ValueRef_1 = this; }
    static jsonTypeName = "intl/ValueRef";
    static fromJSON(json) {
        if (typeof json === "string") {
            const namespaceKey = json.trim().split("#");
            if (namespaceKey.length >= 2) {
                return new ValueRef_1(namespaceKey[0], namespaceKey[1]);
            }
            else {
                return new ValueRef_1(undefined, json);
            }
        }
        else if (Array.isArray(json) && json.length > 0) {
            const namespace = json.length > 1 ? json[0] : undefined;
            const key = (json.length == 1 && json[0]) || (json.length > 1 && json[1]);
            if ((namespace === null || namespace === undefined || typeof namespace == "string") && typeof key == "string") {
                return new ValueRef_1(namespace, key);
            }
        }
        else if (typeof json === "object" && typeof json.key === "string" && json.key) {
            return new ValueRef_1((typeof json.namespace === "string" && json.namespace) || undefined, json.key);
        }
        throw new Error(`Cannot unserialize "${json}" as @appspltfrm/js-intl/ValueRef`);
    }
    constructor(namespaceOrKey, key) {
        super("value");
        if (typeof key === "string") {
            this.namespace = namespaceOrKey;
            this.key = key;
        }
        else {
            this.key = namespaceOrKey;
        }
    }
    namespace;
    key;
    toJSON() {
        const json = {
            "@type": ValueRef_1.jsonTypeName,
            key: this.key
        };
        if (this.namespace) {
            json.namespace = this.namespace;
        }
        return json;
    }
    toString() {
        return this.key;
    }
};
ValueRef = ValueRef_1 = __decorate([
    subtype(IntlRef, "refType", "message"),
    __metadata("design:paramtypes", [String, String])
], ValueRef);
export { ValueRef };
//# sourceMappingURL=ValueRef.js.map