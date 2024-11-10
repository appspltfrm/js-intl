import { DateTimezone, Timestamp } from "@appspltfrm/js-utils/core";
import { IntlContext } from "./IntlContext.js";
type ValueType = number | Date | DateTimezone | Timestamp;
export declare function formatRelativeTime(value: ValueType, options?: any): any;
export declare function formatRelativeTime(context: IntlContext, value: ValueType, options?: any): any;
export {};
