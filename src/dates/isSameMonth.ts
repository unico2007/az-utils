/**
 * Returns `true` when two dates fall in the same calendar month of the same
 * year.
 *
 * @example
 * isSameMonth(new Date(2026, 6, 1), new Date(2026, 6, 31)) // true
 * isSameMonth(new Date(2026, 6, 1), new Date(2026, 7, 1))  // false
 */
export function isSameMonth(a: Date, b: Date): boolean {
  if (!(a instanceof Date) || !(b instanceof Date)) return false;
  if (Number.isNaN(a.getTime()) || Number.isNaN(b.getTime())) return false;
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth();
}
