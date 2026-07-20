/**
 * Returns a new `Date` set to the first day of the month at 00:00:00.000.
 * Invalid input yields an Invalid Date.
 *
 * @example
 * startOfMonth(new Date(2026, 6, 20, 14, 30)) // 2026-07-01 00:00:00
 */
export function startOfMonth(date: Date): Date {
  const result = new Date(date instanceof Date ? date.getTime() : Number.NaN);
  if (Number.isNaN(result.getTime())) return result;
  result.setDate(1);
  result.setHours(0, 0, 0, 0);
  return result;
}
