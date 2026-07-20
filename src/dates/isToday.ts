import { isSameDay } from "./isSameDay";

/**
 * Returns `true` when `date` falls on the same calendar day as `referenceDate`
 * (which defaults to now).
 *
 * @example
 * isToday(new Date()) // true
 */
export function isToday(date: Date, referenceDate: Date = new Date()): boolean {
  return isSameDay(date, referenceDate);
}
