import type {SerializationOptions} from "@appspltfrm/js-utils/json/SerializationOptions.js";
import {Serializer} from "@appspltfrm/js-utils/json/Serializer.js";
import {Money} from "./Money.js";

export class MoneyStringSerializer extends Serializer {

  unserialize(json: any, options: SerializationOptions | undefined): any {

    if (this.isUndefinedOrNull(json)) {
      return json;
    }

    return Money.fromJSON(json);
  }

  serialize(object: any, options?: SerializationOptions): any {

    if (this.isUndefinedOrNull(object)) {
      return object;
    } else if (object instanceof Money) {
      return object.toString();
    }

    return object.toJSON();
  }
}
