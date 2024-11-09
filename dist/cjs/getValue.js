"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getValue = getValue;
const extractNamespaceAndKey_1 = require("./extractNamespaceAndKey");
const getGlobalVersionedValue_1 = require("./getGlobalVersionedValue");
function getValue(context, key) {
    const namespaceAndKey = (0, extractNamespaceAndKey_1.extractNamespaceAndKey)(key, context.defaultNamespace);
    if (!namespaceAndKey.namespace) {
        return undefined;
    }
    return (0, getGlobalVersionedValue_1.getGlobalVersionedValue)(context.locales, namespaceAndKey.namespace, namespaceAndKey.key);
}
//# sourceMappingURL=getValue.js.map