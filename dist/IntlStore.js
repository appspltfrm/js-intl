export var IntlStore;
(function (IntlStore) {
    function value(value, locale) {
        if (value) {
            return value[locale];
        }
        return undefined;
    }
    IntlStore.value = value;
    function clone(value) {
        if (!value) {
            return value;
        }
        let niu = {};
        for (let i in value) {
            niu[i] = value[i];
        }
        return niu;
    }
    IntlStore.clone = clone;
})(IntlStore || (IntlStore = {}));
//# sourceMappingURL=IntlStore.js.map