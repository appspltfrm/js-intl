import { serialize } from "@appspltfrm/js-utils/json/serialize.js";
import { unserialize } from "@appspltfrm/js-utils/json/unserialize.js";
export class IntlMap extends Map {
    defaultLocale;
    static jsonTypeName = "@appspltfrm/IntlMap";
    static fromJSON(value, options) {
        if (typeof value === "object") {
            const defaultLocale = value.defaultLocale;
            const entries = unserialize(value.entries, undefined, typeof options === "object" ? options : undefined);
            if (typeof defaultLocale === "string" && Array.isArray(entries)) {
                const localized = new IntlMap(defaultLocale);
                for (const [l, v] of entries) {
                    localized.set(l, v);
                }
                return localized;
            }
        }
        throw new Error(`Cannot deserialize value "${value}" to IntlMap.`);
    }
    constructor(defaultLocale) {
        super();
        this.defaultLocale = defaultLocale;
    }
    defaultValue() {
        if (this.defaultLocale) {
            return this.get(this.defaultLocale);
        }
    }
    toJSON(options) {
        return {
            "@type": IntlMap.jsonTypeName,
            defaultLocale: this.defaultLocale,
            entries: serialize([...this.entries()], typeof options === "object" ? options : undefined)
        };
    }
}
//# sourceMappingURL=IntlMap.js.map