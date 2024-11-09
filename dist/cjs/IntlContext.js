"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntlContext = void 0;
class IntlContext {
    predefinedFormatOptions = {};
    addPredefinedFormatOptions(name, options) {
        this.predefinedFormatOptions[name] = options;
    }
    findPredefinedFormatOptions(name) {
        return this.predefinedFormatOptions[name];
    }
    /**
     * Path or url to a directory, where intl resources are stored.
     */
    resourcesLocation;
    setResourcesLocation(location) {
        this.resourcesLocation = location;
    }
}
exports.IntlContext = IntlContext;
//# sourceMappingURL=IntlContext.js.map