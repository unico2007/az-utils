/**
 * Returns `true` when `date` is strictly before `referenceDate` (defaults to
 * now). Invalid input returns `false`.
 *
 * @example
 * isPast(new Date(2000, 0, 1)) // true
 */
export function isPast(date: Date, referenceDate: Date = new Date()): boolean {
  if (!(date instanceof Date) || !(referenceDate instanceof Date)) return false;
  if (Number.isNaN(date.getTime()) || Number.isNaN(referenceDate.getTime())) return false;
  return date.getTime() < referenceDate.getTime();
}
