/**
 * Returns a new `Date` set to the start of the day (00:00:00.000). Invalid
 * input yields an Invalid Date.
 *
 * @example
 * startOfDay(new Date(2026, 6, 20, 14, 30)) // 2026-07-20 00:00:00
 */
export function startOfDay(date: Date): Date {
  const result = new Date(date instanceof Date ? date.getTime() : Number.NaN);
  if (Number.isNaN(result.getTime())) return result;
  result.setHours(0, 0, 0, 0);
  return result;
}
