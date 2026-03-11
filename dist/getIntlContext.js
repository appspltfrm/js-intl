import { intl } from "./intl.js";
let fn = () => {
    return INTL_DEFAULT_CONTEXT || intl;
};
export function getIntlContext() {
    return fn();
}
export function setIntlContextGetter(f) {
    fn = f;
}
//# sourceMappingURL=getIntlContext.js.map