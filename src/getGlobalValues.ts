import {defineGlobals} from "./defineGlobals.js";

defineGlobals();

export function getGlobalValues() {

    if (!INTL_VALUES) {
        INTL_VALUES = INTL_MESSAGES = (INTL_MESSAGES || {});
    }

    return INTL_VALUES;
}
