/**
 * Returns the number of days in a given month (1-based) of a given year,
 * accounting for leap years. Returns `NaN` for invalid input.
 *
 * @example
 * daysInMonth(2024, 2) // 29 (leap year)
 * daysInMonth(2023, 2) // 28
 * daysInMonth(2024, 4) // 30
 */
export function daysInMonth(year: number, month: number): number {
  if (!Number.isInteger(year) || !Number.isInteger(month) || month < 1 || month > 12) {
    return Number.NaN;
  }
  return new Date(year, month, 0).getDate();
}
