const MS_PER_DAY = 86_400_000;

/**
 * Returns the 1-based day of the year (1–366) for a date. Returns `NaN` for an
 * invalid date.
 *
 * @example
 * dayOfYear(new Date(2026, 0, 1))   // 1
 * dayOfYear(new Date(2026, 1, 1))   // 32
 * dayOfYear(new Date(2024, 11, 31)) // 366 (leap year)
 */
export function dayOfYear(date: Date): number {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return Number.NaN;
  const startOfYear = new Date(date.getFullYear(), 0, 1);
  const today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  return Math.round((today.getTime() - startOfYear.getTime()) / MS_PER_DAY) + 1;
}
