/**
 * Counts the number of whole months between two dates (absolute value, order-
 * independent). A partial month (fewer days than the earlier date's day-of-
 * month) does not count. Returns 0 for invalid input.
 *
 * @example
 * monthsBetween(new Date(2026, 0, 15), new Date(2026, 2, 15)) // 2
 * monthsBetween(new Date(2026, 0, 15), new Date(2026, 2, 14)) // 1
 */
export function monthsBetween(a: Date, b: Date): number {
  if (!(a instanceof Date) || !(b instanceof Date)) return 0;
  if (Number.isNaN(a.getTime()) || Number.isNaN(b.getTime())) return 0;

  const earlier = a.getTime() <= b.getTime() ? a : b;
  const later = a.getTime() <= b.getTime() ? b : a;

  let months =
    (later.getFullYear() - earlier.getFullYear()) * 12 + (later.getMonth() - earlier.getMonth());
  if (later.getDate() < earlier.getDate()) months -= 1;
  return months;
}
