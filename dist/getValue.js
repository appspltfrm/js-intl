import { extractNamespaceAndKey } from "./extractNamespaceAndKey.js";
import { getGlobalVersionedValue } from "./getGlobalVersionedValue.js";
export function getValue(context, key) {
    const namespaceAndKey = extractNamespaceAndKey(key, context.defaultNamespace);
    if (!namespaceAndKey.namespace) {
        return undefined;
    }
    return getGlobalVersionedValue(context.locales, namespaceAndKey.namespace, namespaceAndKey.key);
}
//# sourceMappingURL=getValue.js.map