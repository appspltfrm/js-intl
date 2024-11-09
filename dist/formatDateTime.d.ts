import { DateTimezone, Timestamp, TimeZoneDate } from "@appspltfrm/js-utils/core";
import { IntlContext } from "./IntlContext";
type ValueType = number | Date | DateTimezone | TimeZoneDate | Timestamp;
type PredefinedOptionsOrOptionsType = string | Intl.DateTimeFormatOptions;
export declare function formatDateTime(value: ValueType, predefinedOptionsOrOptions?: PredefinedOptionsOrOptionsType, options?: Intl.DateTimeFormatOptions): any;
export declare function formatDateTime(context: IntlContext, value: ValueType, predefinedOptionsOrOptions?: PredefinedOptionsOrOptionsType, options?: Intl.DateTimeFormatOptions): any;
export {};
