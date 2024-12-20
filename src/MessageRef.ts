import {serialize, subtype} from "@appspltfrm/js-utils/json";
import {IntlRef} from "./IntlRef.js";

@subtype(IntlRef, "refType", "message")
export class MessageRef extends IntlRef {

    static readonly jsonTypeName = "intl/MessageRef";

    static fromJSON(json: any) {

        if (typeof json === "string") {
            const namespaceKey = json.trim().split("#");
            if (namespaceKey.length >= 2) {
                return new MessageRef(namespaceKey[0], namespaceKey[1]);
            } else {
                return new MessageRef(undefined, json);
            }

        } else if (Array.isArray(json) && json.length > 0) {
            const namespace = json.length > 1 ? json[0] : undefined;
            const key = (json.length == 1 && json[0]) || (json.length > 1 && json[1]);
            const values = json.length == 3 && json[2];
            const formats = json.length == 4 && json[3];

            if ((namespace === null || namespace === undefined || typeof namespace == "string") && typeof key == "string") {
                return new MessageRef(namespace, key, values, formats);
            }

        } else if (typeof json === "object" && typeof json.key === "string" && json.key) {
            return new MessageRef((typeof json.namespace === "string" && json.namespace) || undefined, json.key, typeof json.values === "object" ? json.values : undefined, json.formats);
        }

        throw new Error(`Cannot unserialize "${json}" as @appspltfrm/js-intl/MessageRef`);
    }

    /**
     * Constructor for a key with default namespace.
     */
    constructor(key: string, values?: {[key: string]: any}, formats?: any);

    constructor(namespace: string, key: string, values?: {[key: string]: any}, formats?: any);

    constructor(namespaceOrKey: string, keyOrValues?: string | {[key: string]: any}, valuesOrFormats?: {[key: string]: any} | any, formats?: any) {
        super("message");

        if (typeof keyOrValues === "string") {
            this.namespace = namespaceOrKey;
            this.key = keyOrValues;
            this.values = valuesOrFormats;
            this.formats = formats;
        } else {
            this.key = namespaceOrKey;
            this.values = keyOrValues;
            this.formats = valuesOrFormats;
        }
    }

    readonly namespace: string;
    readonly key: string;
    readonly values?: {[key: string]: any};
    readonly formats?: any;

    toJSON() {

        const json: any = {
            "@type": MessageRef.jsonTypeName,
            key: this.key
        };

        if (this.namespace) {
            json.namespace = this.namespace;
        }

        if (this.values) {
            json.values = serialize(this.values);
        }

        return json;
    }

    toString() {
        return this.key;
    }
}
