import {extractNamespaceAndKey} from "./extractNamespaceAndKey.js";
import {getGlobalVersionedValue} from "./getGlobalVersionedValue.js";
import {IntlContext} from "./IntlContext.js";
import {MessageRef} from "./MessageRef.js";
import {ValueKey} from "./ValueKey.js";
import {ValueRef} from "./ValueRef.js";

export function getValue<T extends string | number = string>(context: IntlContext, key: ValueKey | MessageRef | ValueRef): T {

    const namespaceAndKey = extractNamespaceAndKey(key, context.defaultNamespace);
    if (!namespaceAndKey.namespace) {
        return undefined;
    }

    return getGlobalVersionedValue(context.locales, namespaceAndKey.namespace, namespaceAndKey.key);
}
