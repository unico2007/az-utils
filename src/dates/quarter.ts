/**
 * Returns the calendar quarter (1–4) a date falls in, or `NaN` for an invalid
 * date.
 *
 * @example
 * quarterOf(new Date(2026, 0, 15)) // 1 (January)
 * quarterOf(new Date(2026, 11, 1)) // 4 (December)
 */
export function quarterOf(date: Date): number {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return Number.NaN;
  return Math.floor(date.getMonth() / 3) + 1;
}
