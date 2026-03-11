import {intl} from "./intl.js";
import {IntlContext} from "./IntlContext.js";

let fn = (): IntlContext => {
    return INTL_DEFAULT_CONTEXT || intl;
}

export function getIntlContext(): IntlContext {
    return fn();
}

export function setIntlContextGetter(f: typeof fn) {
    fn = f;
}
