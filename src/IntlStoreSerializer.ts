import {Type} from "@appspltfrm/js-utils/core";
import {ObjectAsMapSerializer, Serializer} from "@appspltfrm/js-utils/json";

export class IntlStoreSerializer extends ObjectAsMapSerializer {

    constructor(valueType: Type | Serializer) {
        super(valueType);
    }

}
