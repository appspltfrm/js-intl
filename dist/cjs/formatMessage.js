"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatMessage = formatMessage;
const tslib_1 = require("tslib");
const core_1 = require("@appspltfrm/js-utils/core");
const intl_messageformat_1 = tslib_1.__importDefault(require("intl-messageformat"));
const IntlContext_1 = require("./IntlContext");
function formatMessage() {
    const knownContext = arguments[0] instanceof IntlContext_1.IntlContext ? 1 : 0;
    const context = knownContext ? arguments[0] : INTL_DEFAULT_CONTEXT;
    const message = arguments[0 + knownContext];
    const html = message instanceof core_1.HtmlString;
    let values = arguments[1 + knownContext];
    let formats = arguments[2 + knownContext];
    const formatted = new intl_messageformat_1.default(message.toString(), context.locales, formats, { ignoreTag: true }).format(values);
    if (html) {
        return new core_1.HtmlString(formatted);
    }
    else {
        return formatted;
    }
}
//# sourceMappingURL=formatMessage.js.map