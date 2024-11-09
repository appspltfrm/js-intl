"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGlobalValuesVersions = getGlobalValuesVersions;
const defineGlobals_1 = require("./defineGlobals");
(0, defineGlobals_1.defineGlobals)();
function getGlobalValuesVersions() {
    if (!INTL_VALUES_VERSIONS) {
        INTL_VALUES_VERSIONS = INTL_MESSAGES_VERSIONS = (INTL_MESSAGES_VERSIONS || {});
    }
    return INTL_VALUES_VERSIONS;
}
//# sourceMappingURL=getGlobalValuesVersions.js.map