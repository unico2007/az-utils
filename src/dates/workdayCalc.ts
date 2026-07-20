import { isWeekend } from "./workday";

/**
 * Returns a new `Date` that is `n` working days after `date` (or before it when
 * `n` is negative), skipping weekends. The time-of-day is preserved.
 *
 * NOTE: public holidays are not skipped — only weekends.
 *
 * @example
 * addWorkingDays(new Date(2024, 0, 5), 1)  // Mon 2024-01-08 (from a Friday)
 * addWorkingDays(new Date(2024, 0, 8), -1) // Fri 2024-01-05
 */
export function addWorkingDays(date: Date, n: number): Date {
  const result = new Date(date instanceof Date ? date.getTime() : Number.NaN);
  if (Number.isNaN(result.getTime()) || !Number.isFinite(n)) return result;
  let remaining = Math.trunc(Math.abs(n));
  const step = n < 0 ? -1 : 1;
  while (remaining > 0) {
    result.setDate(result.getDate() + step);
    if (!isWeekend(result)) remaining--;
  }
  return result;
}

/**
 * Counts the working days between two dates — days strictly after the earlier
 * date up to and including the later one. Order-independent; always ≥ 0.
 *
 * @example
 * workingDaysBetween(new Date(2024, 0, 1), new Date(2024, 0, 5)) // 4
 * workingDaysBetween(new Date(2024, 0, 5), new Date(2024, 0, 8)) // 1
 */
export function workingDaysBetween(a: Date, b: Date): number {
  if (!(a instanceof Date) || !(b instanceof Date)) return 0;
  if (Number.isNaN(a.getTime()) || Number.isNaN(b.getTime())) return 0;

  const start = new Date(Math.min(a.getTime(), b.getTime()));
  const end = new Date(Math.max(a.getTime(), b.getTime()));
  start.setHours(0, 0, 0, 0);
  end.setHours(0, 0, 0, 0);

  let count = 0;
  const cursor = new Date(start.getTime());
  while (cursor.getTime() < end.getTime()) {
    cursor.setDate(cursor.getDate() + 1);
    if (!isWeekend(cursor)) count++;
  }
  return count;
}
