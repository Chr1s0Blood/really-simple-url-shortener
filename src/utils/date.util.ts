import { addDays, addHours, isPast } from "date-fns";

export default class DateUtils {
  static isExpiredByNow(date: Date): boolean {
    return isPast(date);
  }

  static addDays(date: Date, days: number): Date {
    return addDays(date, days);
  }

  static addHours(date: Date, hours: number): Date {
    return addHours(date, hours);
  }
}