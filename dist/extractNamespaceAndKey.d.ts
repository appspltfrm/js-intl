import { MessageRef } from "./MessageRef.js";
import { ValueRef } from "./ValueRef.js";
export declare function extractNamespaceAndKey(namespaceAndKey: string | MessageRef | ValueRef | [namespace: string, key: string], defaultNamespace?: string): {
    namespace: string;
    key: string;
};
