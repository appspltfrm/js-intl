import type {SerializationOptions} from "@appspltfrm/js-utils/json/SerializationOptions.js";
import {Serializer} from "@appspltfrm/js-utils/json/Serializer.js";
import {Locale} from "./Locale.js";

export class LocaleStringSerializer extends Serializer {

  unserialize(json: any, options: SerializationOptions | undefined): any {

    if (this.isUndefinedOrNull(json)) {
      return json;
    }

    return Locale.fromJSON(json);
  }

  serialize(object: any, options?: SerializationOptions): any {

    if (this.isUndefinedOrNull(object)) {
      return object;
    } else if (object instanceof Locale) {
      return object.code;
    }

    return object.toJSON();
  }
}
