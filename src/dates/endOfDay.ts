/**
 * Returns a new `Date` set to the end of the day (23:59:59.999). Invalid input
 * yields an Invalid Date.
 *
 * @example
 * endOfDay(new Date(2026, 6, 20, 14, 30)) // 2026-07-20 23:59:59.999
 */
export function endOfDay(date: Date): Date {
  const result = new Date(date instanceof Date ? date.getTime() : Number.NaN);
  if (Number.isNaN(result.getTime())) return result;
  result.setHours(23, 59, 59, 999);
  return result;
}
