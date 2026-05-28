import { DateTimezone } from "@appspltfrm/js-utils/core/DateTimezone.js";
import type { Timestamp } from "@appspltfrm/js-utils/core/Timestamp.js";
import { TimeZoneDate } from "@appspltfrm/js-utils/core/TimeZoneDate.js";
import { IntlContext } from "./IntlContext.js";
type ValueType = number | Date | DateTimezone | TimeZoneDate | Timestamp;
type PredefinedOptionsOrOptionsType = string | Intl.DateTimeFormatOptions;
export declare function formatDateTime(value: ValueType, predefinedOptionsOrOptions?: PredefinedOptionsOrOptionsType, options?: Intl.DateTimeFormatOptions): string;
export declare function formatDateTime(context: IntlContext, value: ValueType, predefinedOptionsOrOptions?: PredefinedOptionsOrOptionsType, options?: Intl.DateTimeFormatOptions): string;
export {};
