"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFormattedMessage = isFormattedMessage;
function isFormattedMessage(message) {
    return message.indexOf("{") > -1 || message.indexOf("}") > -1;
}
//# sourceMappingURL=isFormattedMessage.js.map