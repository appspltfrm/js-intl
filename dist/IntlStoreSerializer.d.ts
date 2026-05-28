import { Type } from "@appspltfrm/js-utils/core/Type.js";
import { ObjectAsMapSerializer } from "@appspltfrm/js-utils/json/ObjectAsMapSerializer.js";
import { Serializer } from "@appspltfrm/js-utils/json/Serializer.js";
export declare class IntlStoreSerializer extends ObjectAsMapSerializer {
    constructor(valueType: Type | Serializer);
}
