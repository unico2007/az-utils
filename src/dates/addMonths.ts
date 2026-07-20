/**
 * Returns a new `Date` shifted by `n` months (negative to go back). The day of
 * month is clamped to the target month's length, so Jan 31 + 1 month is the
 * last day of February. Invalid input yields an Invalid Date.
 *
 * @example
 * addMonths(new Date(2023, 0, 31), 1) // 2023-02-28
 * addMonths(new Date(2024, 0, 31), 1) // 2024-02-29
 */
export function addMonths(date: Date, n: number): Date {
  const result = new Date(date instanceof Date ? date.getTime() : Number.NaN);
  if (Number.isNaN(result.getTime()) || !Number.isFinite(n)) return result;
  const day = result.getDate();
  result.setDate(1);
  result.setMonth(result.getMonth() + Math.trunc(n));
  const lastDay = new Date(result.getFullYear(), result.getMonth() + 1, 0).getDate();
  result.setDate(Math.min(day, lastDay));
  return result;
}
