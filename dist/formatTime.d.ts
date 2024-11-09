import { DateTimezone, Timestamp, TimeZoneDate } from "@appspltfrm/js-utils/core";
import { IntlContext } from "./IntlContext";
type ValueType = number | Date | DateTimezone | TimeZoneDate | Timestamp;
type PredefinedOptionsOrOptionsType = string | Intl.DateTimeFormatOptions;
export declare function formatTime(value: ValueType, predefinedOptionsOrOptions?: PredefinedOptionsOrOptionsType, options?: Intl.DateTimeFormatOptions): any;
export declare function formatTime(context: IntlContext, value: ValueType, predefinedOptionsOrOptions?: PredefinedOptionsOrOptionsType, options?: Intl.DateTimeFormatOptions): any;
export {};
