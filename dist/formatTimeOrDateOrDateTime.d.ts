import { DateTimezone } from "@appspltfrm/js-utils/core/DateTimezone.js";
import type { Timestamp } from "@appspltfrm/js-utils/core/Timestamp.js";
import { TimeZoneDate } from "@appspltfrm/js-utils/core/TimeZoneDate.js";
import { IntlContext } from "./IntlContext.js";
export declare function formatTimeOrDateOrDateTime(context: IntlContext, mode: "time" | "date" | "dateTime", dateTime: number | Date | DateTimezone | TimeZoneDate | Timestamp, predefinedOptionsOrOptions?: string | Intl.DateTimeFormatOptions, options?: Intl.DateTimeFormatOptions): string;
