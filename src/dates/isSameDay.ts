/**
 * Returns `true` when two dates fall on the same calendar day (ignoring time).
 *
 * @example
 * isSameDay(new Date(2026, 6, 20, 9), new Date(2026, 6, 20, 23)) // true
 * isSameDay(new Date(2026, 6, 20), new Date(2026, 6, 21))        // false
 */
export function isSameDay(a: Date, b: Date): boolean {
  if (!(a instanceof Date) || !(b instanceof Date)) return false;
  if (Number.isNaN(a.getTime()) || Number.isNaN(b.getTime())) return false;
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}
