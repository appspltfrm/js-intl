import {HtmlString} from "@appspltfrm/js-utils/core";
import IntlMessageFormat from "intl-messageformat";
import {DecimalFormatRef} from "./DecimalFormatRef.js";
import {extractNamespaceAndKey} from "./extractNamespaceAndKey.js";
import {formatDecimal} from "./formatDecimal.js";
import {getGlobalVersionedValue} from "./getGlobalVersionedValue.js";
import {IntlContext} from "./IntlContext.js";
import {isFormattedMessage} from "./isFormattedMessage.js";
import {MessageRef} from "./MessageRef.js";
import {ValueKey} from "./ValueKey.js";
import {ValueRef} from "./ValueRef.js";

export type TranslateKeyType = ValueKey | MessageRef | ValueRef | [namespace: string, key: string];

interface TranslateOptions {
    formats?: any;
    defaultMessage?: "key" | "undefined" | ((namespace: string, key: string) => string | HtmlString);
}

export function translate<R extends string | HtmlString | any = any>(key: TranslateKeyType, values?: any, options?: TranslateOptions): R;

export function translate<R extends string | HtmlString | any = any>(context: IntlContext, key: TranslateKeyType, values?: any, options?: TranslateOptions): R;

export function translate<R extends string | HtmlString | any = any>(): R {

    const knownContext = arguments[0] instanceof IntlContext ? 1 : 0;
    const context: IntlContext = knownContext ? arguments[0] : INTL_DEFAULT_CONTEXT;

    const key: TranslateKeyType = arguments[0 + knownContext];
    let values: any = arguments[1 + knownContext];
    let options: TranslateOptions = arguments[2 + knownContext];

    const namespaceAndKey = extractNamespaceAndKey(key, context.defaultNamespace);
    if (!namespaceAndKey.namespace) {
        return namespaceAndKey.key as R;
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
            } else if (values[key] instanceof DecimalFormatRef) {
                fixedValues[key] = formatDecimal(values[key]);
            } else {
                fixedValues[key] = values[key];
            }
        }

        values = fixedValues;
    }

    let message = getGlobalVersionedValue(context.locales, namespaceAndKey.namespace, namespaceAndKey.key);
    if (!message) {
        if (!options?.defaultMessage || options.defaultMessage === "key") {
            message = namespaceAndKey.key.replace(/.+\//g, "").replace(/\|.*/g, "").trim();
        } else if (typeof options.defaultMessage === "function") {
            return options.defaultMessage(namespaceAndKey.namespace, namespaceAndKey.key) as R;
        } else {
            return undefined;
        }
    }

    const isHtml = message instanceof HtmlString || (typeof message === "object" && message["@type"] === "HtmlString");

    if (typeof message === "string" || isHtml) {
        message = isHtml ? message.value : message;
        if (isFormattedMessage(message)) {
            message = new IntlMessageFormat(message, context.locales, options?.formats, {ignoreTag: true}).format(values) as string;
        }

        if (isHtml) {
            return new HtmlString(message) as R;
        } else {
            return message as R;
        }

    } else {
        return `${message}` as R;
    }
}
