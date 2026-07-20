/**
 * Azerbaijani weekday names, indexed to match JavaScript's `Date.getDay()`
 * (0 = Sunday … 6 = Saturday).
 */
export const WEEKDAY_NAMES_AZ = [
  "bazar", // 0 — Sunday
  "bazar ertəsi", // 1 — Monday
  "çərşənbə axşamı", // 2 — Tuesday
  "çərşənbə", // 3 — Wednesday
  "cümə axşamı", // 4 — Thursday
  "cümə", // 5 — Friday
  "şənbə", // 6 — Saturday
] as const;

/**
 * Returns the Azerbaijani weekday name for a `Date`.
 *
 * @example
 * weekdayNameAz(new Date(2024, 0, 1)) // "bazar ertəsi" (a Monday)
 */
export function weekdayNameAz(date: Date): string {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return "";
  return WEEKDAY_NAMES_AZ[date.getDay()] ?? "";
}
