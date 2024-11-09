"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_THRESHOLDS = void 0;
exports.bestRelativeTimeFormatValue = bestRelativeTimeFormatValue;
const date_fns_1 = require("date-fns");
function bestRelativeTimeFormatValue(from, to = Date.now(), thresholds = exports.DEFAULT_THRESHOLDS) {
    const secs = (0, date_fns_1.differenceInSeconds)(from, to);
    if (Math.abs(secs) < thresholds.second) {
        return {
            value: Math.round(secs),
            unit: "second"
        };
    }
    const mins = secs / 60;
    if (Math.abs(mins) < thresholds.minute) {
        return {
            value: Math.round(mins),
            unit: "minute"
        };
    }
    const hours = mins / 60;
    if (Math.abs(hours) < thresholds.hour) {
        return {
            value: Math.round(hours),
            unit: "hour"
        };
    }
    const days = (0, date_fns_1.differenceInCalendarDays)(from, to);
    if (Math.abs(days) < thresholds.day) {
        return {
            value: Math.round(days),
            unit: "day"
        };
    }
    const weeks = (0, date_fns_1.differenceInCalendarWeeks)(from, to);
    if (Math.abs(weeks) < thresholds.week) {
        return {
            value: Math.round(weeks),
            unit: "week"
        };
    }
    const months = (0, date_fns_1.differenceInCalendarMonths)(from, to);
    if (Math.abs(months) < thresholds.month) {
        return {
            value: Math.round(months),
            unit: "month"
        };
    }
    const quarters = (0, date_fns_1.differenceInCalendarQuarters)(from, to);
    if (Math.abs(quarters) < thresholds.quarter) {
        return {
            value: Math.round(quarters),
            unit: "quarter"
        };
    }
    const years = (0, date_fns_1.differenceInCalendarYears)(from, to);
    if (Math.abs(years) > 0) {
        return {
            value: Math.round(years),
            unit: "year"
        };
    }
}
exports.DEFAULT_THRESHOLDS = {
    second: 45, // seconds to minute
    minute: 45, // minutes to hour
    hour: 22, // hour to day
    day: 7, // days to week
    week: 4, // weeks to month
    month: 12, // months to quarter
    quarter: 0 // quarters to year
};
//# sourceMappingURL=bestRelativeTimeFormatValue.js.map