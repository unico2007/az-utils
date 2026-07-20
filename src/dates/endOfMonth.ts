/**
 * Returns a new `Date` set to the last day of the month at 23:59:59.999.
 * Invalid input yields an Invalid Date.
 *
 * @example
 * endOfMonth(new Date(2024, 1, 10)) // 2024-02-29 23:59:59.999
 */
export function endOfMonth(date: Date): Date {
  const result = new Date(date instanceof Date ? date.getTime() : Number.NaN);
  if (Number.isNaN(result.getTime())) return result;
  result.setMonth(result.getMonth() + 1, 0);
  result.setHours(23, 59, 59, 999);
  return result;
}
