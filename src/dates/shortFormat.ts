/**
 * Formats a date as "DD.MM.YYYY" — the common Azerbaijani short date format.
 * Returns "" for an invalid date.
 *
 * @example
 * formatDateShortAz(new Date(2026, 6, 20)) // "20.07.2026"
 * formatDateShortAz(new Date(2026, 0, 5))  // "05.01.2026"
 */
export function formatDateShortAz(date: Date): string {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return "";
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  return `${dd}.${mm}.${date.getFullYear()}`;
}
