/** Azerbaijani month names in lowercase, index 0 = January. */
export const MONTH_NAMES_AZ = [
  "yanvar",
  "fevral",
  "mart",
  "aprel",
  "may",
  "iyun",
  "iyul",
  "avqust",
  "sentyabr",
  "oktyabr",
  "noyabr",
  "dekabr",
] as const;

/**
 * Formats a `Date` as a "day month year" string in Azerbaijani.
 *
 * @example
 * formatDateAz(new Date(2026, 6, 20)) // "20 iyul 2026"
 * formatDateAz(new Date(2000, 0, 1))  // "1 yanvar 2000"
 */
export function formatDateAz(date: Date): string {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return "";
  const day = date.getDate();
  const month = MONTH_NAMES_AZ[date.getMonth()] ?? "";
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}
