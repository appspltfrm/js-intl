export function bestRelativeTimeFormatValue(from: Date | number, to: Date | number = Date.now(), thresholds = DEFAULT_THRESHOLDS): {value: number; unit: Intl.RelativeTimeFormatUnit} {

    const dateDiff = new DateDiff(from, to);

    const secs = dateDiff.seconds();
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

    const days = dateDiff.days();
    if (Math.abs(days) < thresholds.day) {
        return {
            value: Math.round(days),
            unit: "day"
        };
    }

    const weeks = dateDiff.weeks();
    if (Math.abs(weeks) < thresholds.week) {
        return {
            value: Math.round(weeks),
            unit: "week"
        };
    }

    const months = dateDiff.months();
    if (Math.abs(months) < thresholds.month) {
        return {
            value: Math.round(months),
            unit: "month"
        };
    }

    const quarters = dateDiff.quarters();
    if (Math.abs(quarters) < thresholds.quarter) {
        return {
            value: Math.round(quarters),
            unit: "quarter"
        };
    }

    const years = dateDiff.years();
    if (Math.abs(years) > 0) {
        return {
            value: Math.round(years),
            unit: "year"
        };
    }

}

export const DEFAULT_THRESHOLDS: Record<"second" | "minute" | "hour" | "day" | "week" | "month" | "quarter" , number> = {
    second: 45, // seconds to minute
    minute: 45, // minutes to hour
    hour: 22, // hour to day
    day: 7, // days to week
    week: 4, // weeks to month
    month: 12, // months to quarter
    quarter: 0 // quarters to year
};

const divisors = {
    days: 86400000,
    hours: 3600000,
    minutes: 60000,
    seconds: 1000,
}

function round(value: number) {
    return parseFloat(value.toFixed(1))
}

class DateDiff {

    constructor(date1: Date | number, date2: Date | number) {
        this.date1 = typeof date1 === "number" ? new Date(date1) : date1;
        this.date2 = typeof date2 === "number" ? new Date(date2) : date2;
        this.difference = Math.floor((typeof date1 === "number" ? date1 : date1.getTime()) - (typeof date2 === "number" ? date2 : date2.getTime()));
    }

    private readonly date1: Date;
    private readonly date2: Date;
    private readonly difference: number

    days() {
        return round(this.difference / divisors.days)
    }

    weeks() {
        return round(this.days() / 7)
    }

    hours() {
        return round(this.difference / divisors.hours)
    }

    minutes() {
        return round(this.difference / divisors.minutes)
    }

    seconds() {
        return round(this.difference / divisors.seconds)
    }

    months() {
        let ret = (this.date1.getFullYear() - this.date2.getFullYear()) * 12
        ret += this.date1.getMonth() - this.date2.getMonth()
        const endOfMonth = this.endOfMonth(this.date2).getDate()
        ret += (this.date1.getDate() / endOfMonth) - (this.date2.getDate() / endOfMonth)
        return round(ret)
    }

    quarters() {
        return ((this.date1.getFullYear() - this.date2.getFullYear()) * 4) + (Math.trunc((this.date1.getMonth() / 3) + 1) - Math.trunc((this.date2.getMonth() / 3) + 1));
    }

    years() {
        let ret = (this.date1.getFullYear() - this.date2.getFullYear())
        ret += (this.dayOfYear(this.date1) - this.dayOfYear(this.date2)) / this.daysInYear(this.date2)
        return round(ret)
    }

    endOfMonth(date: Date) {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0)
    }

    dayOfYear(date: Date) {
        return (date.getTime() - this.beginOfYear(date).getTime()) / divisors.days
    }

    daysInYear(date: Date) {
        return (this.endOfYear(date).getTime() - this.beginOfYear(date).getTime()) / divisors.days
    }

    beginOfYear(date: Date) {
        return new Date(date.getFullYear(), 0, 0)
    }

    endOfYear(date: Date) {
        return new Date(date.getFullYear() + 1, 0, 0)
    }

}
