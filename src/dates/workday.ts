/**
 * Returns `true` when the date falls on a weekend (Saturday or Sunday).
 *
 * @example
 * isWeekend(new Date(2000, 0, 1)) // true (Saturday)
 * isWeekend(new Date(2024, 0, 1)) // false (Monday)
 */
export function isWeekend(date: Date): boolean {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return false;
  const day = date.getDay();
  return day === 0 || day === 6;
}

/**
 * Returns `true` when the date is a working day (Monday–Friday).
 *
 * NOTE: only weekends are considered — public holidays are not, since they are
 * tracked separately.
 *
 * @example
 * isWorkingDay(new Date(2024, 0, 1)) // true (Monday)
 * isWorkingDay(new Date(2000, 0, 1)) // false (Saturday)
 */
export function isWorkingDay(date: Date): boolean {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return false;
  return !isWeekend(date);
}
