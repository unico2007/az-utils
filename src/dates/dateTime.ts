import { MONTH_NAMES_AZ } from "./months";

/**
 * Formats a `Date` as "day month year, HH:MM" in Azerbaijani (24-hour clock,
 * zero-padded time).
 *
 * @example
 * formatDateTimeAz(new Date(2026, 6, 20, 14, 30)) // "20 iyul 2026, 14:30"
 * formatDateTimeAz(new Date(2026, 0, 5, 9, 5))    // "5 yanvar 2026, 09:05"
 */
export function formatDateTimeAz(date: Date): string {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return "";
  const day = date.getDate();
  const month = MONTH_NAMES_AZ[date.getMonth()] ?? "";
  const year = date.getFullYear();
  const hh = String(date.getHours()).padStart(2, "0");
  const mm = String(date.getMinutes()).padStart(2, "0");
  return `${day} ${month} ${year}, ${hh}:${mm}`;
}
