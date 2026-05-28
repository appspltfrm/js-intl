import { DateTimezone } from "@appspltfrm/js-utils/core/DateTimezone.js";
import type { Timestamp } from "@appspltfrm/js-utils/core/Timestamp.js";
import { IntlContext } from "./IntlContext.js";
type ValueType = number | Date | DateTimezone | Timestamp;
export declare function formatRelativeTime(value: ValueType, options?: any): string;
export declare function formatRelativeTime(context: IntlContext, value: ValueType, options?: any): string;
export {};
