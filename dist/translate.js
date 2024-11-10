import IntlMessageFormat from "intl-messageformat";
import { DecimalFormatRef } from "./DecimalFormatRef.js";
import { extractNamespaceAndKey } from "./extractNamespaceAndKey.js";
import { formatDecimal } from "./formatDecimal.js";
import { getGlobalVersionedValue } from "./getGlobalVersionedValue.js";
import { IntlContext } from "./IntlContext.js";
import { isFormattedMessage } from "./isFormattedMessage.js";
import { MessageRef } from "./MessageRef.js";
export function translate() {
    const knownContext = arguments[0] instanceof IntlContext ? 1 : 0;
    const context = knownContext ? arguments[0] : INTL_DEFAULT_CONTEXT;
    const key = arguments[0 + knownContext];
    let values = arguments[1 + knownContext];
    let options = arguments[2 + knownContext];
    const namespaceAndKey = extractNamespaceAndKey(key, context.defaultNamespace);
    if (!namespaceAndKey.namespace) {
        return namespaceAndKey.key;
    }
    if (key instanceof MessageRef) {
        if (!values) {
            values = key.values;
        }
        if (key.formats) {
            if (!options) {
                options = {};
            }
            options.formats = key.formats;
        }
    }
    if (values) {
        const fixedValues = {};
        for (const key of Object.keys(values)) {
            if (values[key] instanceof MessageRef) {
                fixedValues[key] = translate(context, values[key]);
            }
            else if (values[key] instanceof DecimalFormatRef) {
                fixedValues[key] = formatDecimal(values[key]);
            }
            else {
                fixedValues[key] = values[key];
            }
        }
        values = fixedValues;
    }
    let message = getGlobalVersionedValue(context.locales, namespaceAndKey.namespace, namespaceAndKey.key);
    if (!message) {
        if (!options?.defaultMessage || options.defaultMessage === "key") {
            message = namespaceAndKey.key.replace(/.+\//g, "").replace(/\|.*/g, "").trim();
        }
        else if (typeof options.defaultMessage === "function") {
            return options.defaultMessage(namespaceAndKey.namespace, namespaceAndKey.key);
        }
        else {
            return undefined;
        }
    }
    if (typeof message === "string") {
        if (isFormattedMessage(message)) {
            return new IntlMessageFormat(message, context.locales, options?.formats, { ignoreTag: true }).format(values);
        }
        else {
            return message;
        }
    }
    else {
        return `${message}`;
    }
}
//# sourceMappingURL=translate.js.map