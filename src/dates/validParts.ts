/**
 * Checks whether a year/month/day triple forms a real calendar date. The month
 * is 1-based (1 = January). Rejects impossible dates such as 2023-02-29 and any
 * value that JavaScript would silently roll over.
 *
 * @example
 * isValidDateParts(2024, 2, 29) // true (leap year)
 * isValidDateParts(2023, 2, 29) // false
 * isValidDateParts(2024, 13, 1) // false
 */
export function isValidDateParts(year: number, month: number, day: number): boolean {
  if (!Number.isInteger(year) || !Number.isInteger(month) || !Number.isInteger(day)) return false;
  if (month < 1 || month > 12 || day < 1 || day > 31) return false;
  const date = new Date(year, month - 1, day);
  return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
}
