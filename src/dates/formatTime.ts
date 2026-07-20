/**
 * Formats the time-of-day of a `Date` as "HH:MM" on a 24-hour clock. Returns ""
 * for an invalid date.
 *
 * @example
 * formatTimeAz(new Date(2026, 6, 20, 14, 30)) // "14:30"
 * formatTimeAz(new Date(2026, 6, 20, 9, 5))   // "09:05"
 */
export function formatTimeAz(date: Date): string {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return "";
  const hh = String(date.getHours()).padStart(2, "0");
  const mm = String(date.getMinutes()).padStart(2, "0");
  return `${hh}:${mm}`;
}
