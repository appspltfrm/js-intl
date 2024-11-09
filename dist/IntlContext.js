export class IntlContext {
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
//# sourceMappingURL=IntlContext.js.map