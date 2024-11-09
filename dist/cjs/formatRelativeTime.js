"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatRelativeTime = formatRelativeTime;
const core_1 = require("@appspltfrm/js-utils/core");
const bestRelativeTimeFormatValue_1 = require("./bestRelativeTimeFormatValue");
const defineGlobals_1 = require("./defineGlobals");
const IntlContext_1 = require("./IntlContext");
(0, defineGlobals_1.defineGlobals)();
function formatRelativeTime() {
    const knownContext = arguments[0] instanceof IntlContext_1.IntlContext ? 1 : 0;
    const context = knownContext ? arguments[0] : INTL_DEFAULT_CONTEXT;
    let value = arguments[0 + knownContext];
    const options = arguments[1 + knownContext];
    if (typeof value === "number") {
        value = new Date(value);
    }
    else if (value instanceof core_1.DateTimezone) {
        value = value.date;
    }
    else if (value && !(value instanceof Date) && typeof value.toDate === "function") {
        value = value.toDate();
    }
    if (value === null || value === undefined) {
        value = new Date();
    }
    const diff = (0, bestRelativeTimeFormatValue_1.bestRelativeTimeFormatValue)(value);
    return new Intl.RelativeTimeFormat(context.locales, Object.assign({ numeric: "auto" }, options)).format(diff.value, diff.unit);
}
//# sourceMappingURL=formatRelativeTime.js.map