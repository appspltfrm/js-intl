import {ObjectAsMapSerializer} from "@appspltfrm/js-utils/json/ObjectAsMapSerializer.js";
import type {SerializationOptions} from "@appspltfrm/js-utils/json/SerializationOptions.js";
import {serialize} from "@appspltfrm/js-utils/json/serialize.js";
import {unserialize} from "@appspltfrm/js-utils/json/unserialize.js";

export class IntlStringsStoreSerializer extends ObjectAsMapSerializer {

  constructor(private readonly allowPlainValue?: boolean) {
    super(String);
  }

  serialize(value: any, options?: SerializationOptions): any {
    if (this.allowPlainValue && typeof value === "string") {
      return serialize(value, options);
    } else {
      return super.serialize(value, options);
    }
  }

  unserialize(value: any, options?: SerializationOptions): any {

    if (this.allowPlainValue && typeof value === "string") {
      return unserialize(value, String, options);
    } else {
      return super.serialize(value, options);
    }
  }

}
