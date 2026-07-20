/**
 * Returns `true` when `year` is a Gregorian leap year.
 *
 * @example
 * isLeapYear(2024) // true
 * isLeapYear(2023) // false
 * isLeapYear(1900) // false
 * isLeapYear(2000) // true
 */
export function isLeapYear(year: number): boolean {
  if (!Number.isInteger(year)) return false;
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
