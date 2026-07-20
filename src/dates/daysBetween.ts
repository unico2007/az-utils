const MS_PER_DAY = 86_400_000;

/**
 * Counts whole calendar days between two dates (absolute value, order-
 * independent). Times of day are ignored. Returns 0 for invalid input.
 *
 * @example
 * daysBetween(new Date(2026, 0, 1), new Date(2026, 0, 5)) // 4
 */
export function daysBetween(a: Date, b: Date): number {
  if (!(a instanceof Date) || !(b instanceof Date)) return 0;
  if (Number.isNaN(a.getTime()) || Number.isNaN(b.getTime())) return 0;
  const da = new Date(a.getFullYear(), a.getMonth(), a.getDate());
  const db = new Date(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.round(Math.abs(db.getTime() - da.getTime()) / MS_PER_DAY);
}
