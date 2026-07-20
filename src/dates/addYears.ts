/**
 * Returns a new `Date` shifted by `n` years (negative to go back). A Feb 29
 * source date is clamped to Feb 28 when the target year is not a leap year.
 * Invalid input yields an Invalid Date.
 *
 * @example
 * addYears(new Date(2026, 6, 20), 2)  // 2028-07-20
 * addYears(new Date(2024, 1, 29), 1)  // 2025-02-28
 */
export function addYears(date: Date, n: number): Date {
  const result = new Date(date instanceof Date ? date.getTime() : Number.NaN);
  if (Number.isNaN(result.getTime()) || !Number.isFinite(n)) return result;
  const targetMonth = result.getMonth();
  result.setFullYear(result.getFullYear() + Math.trunc(n));
  if (result.getMonth() !== targetMonth) result.setDate(0);
  return result;
}
