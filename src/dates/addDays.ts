/**
 * Returns a new `Date` shifted by `n` calendar days (negative to go back).
 * Invalid input yields an Invalid Date.
 *
 * @example
 * addDays(new Date(2026, 0, 31), 1)  // 2026-02-01
 * addDays(new Date(2026, 0, 1), -1)  // 2025-12-31
 */
export function addDays(date: Date, n: number): Date {
  const result = new Date(date instanceof Date ? date.getTime() : Number.NaN);
  if (Number.isNaN(result.getTime()) || !Number.isFinite(n)) return result;
  result.setDate(result.getDate() + Math.trunc(n));
  return result;
}
