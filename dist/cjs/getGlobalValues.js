"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGlobalValues = getGlobalValues;
const defineGlobals_1 = require("./defineGlobals");
(0, defineGlobals_1.defineGlobals)();
function getGlobalValues() {
    if (!INTL_VALUES) {
        INTL_VALUES = INTL_MESSAGES = (INTL_MESSAGES || {});
    }
    return INTL_VALUES;
}
//# sourceMappingURL=getGlobalValues.js.map