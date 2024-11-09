"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGlobalVersionedValue = getGlobalVersionedValue;
const getGlobalValues_1 = require("./getGlobalValues");
const getGlobalValuesVersions_1 = require("./getGlobalValuesVersions");
function getGlobalVersionedValue(locales, namespace, key) {
    const versions = (0, getGlobalValuesVersions_1.getGlobalValuesVersions)();
    const values = (0, getGlobalValues_1.getGlobalValues)();
    for (const locale of locales) {
        if (versions[namespace]) {
            for (const version of versions[namespace]) {
                if (version.messages[locale] && key in version.messages[locale]) {
                    return version.messages[locale][key];
                }
            }
        }
        if (values[namespace] && values[namespace][locale] && values[namespace][locale][key]) {
            return values[namespace][locale][key];
        }
    }
}
//# sourceMappingURL=getGlobalVersionedValue.js.map