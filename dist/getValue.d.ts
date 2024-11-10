import { IntlContext } from "./IntlContext.js";
import { MessageRef } from "./MessageRef.js";
import { ValueKey } from "./ValueKey.js";
import { ValueRef } from "./ValueRef.js";
export declare function getValue<T extends string | number = string>(context: IntlContext, key: ValueKey | MessageRef | ValueRef): T;
