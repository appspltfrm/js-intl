import {SerializationOptions, serialize, unserialize} from "@appspltfrm/js-utils/json";

export class IntlMap<Value = any> extends Map<string, Value> {

  static readonly jsonTypeName = "@appspltfrm/IntlMap";

  static fromJSON(value: any, options?: SerializationOptions) {

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

  constructor(public readonly defaultLocale: string) {
    super();
  }

  defaultValue() {
    if (this.defaultLocale) {
      return this.get(this.defaultLocale);
    }
  }

  toJSON(options?: string | SerializationOptions) {
    return {
      "@type": IntlMap.jsonTypeName,
      defaultLocale: this.defaultLocale,
      entries: serialize([...this.entries()], typeof options === "object" ? options : undefined)
    };
  }

}
