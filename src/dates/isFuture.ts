/**
 * Returns `true` when `date` is strictly after `referenceDate` (defaults to
 * now). Invalid input returns `false`.
 *
 * @example
 * isFuture(new Date(2999, 0, 1)) // true
 */
export function isFuture(date: Date, referenceDate: Date = new Date()): boolean {
  if (!(date instanceof Date) || !(referenceDate instanceof Date)) return false;
  if (Number.isNaN(date.getTime()) || Number.isNaN(referenceDate.getTime())) return false;
  return date.getTime() > referenceDate.getTime();
}
