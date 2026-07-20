import { isValidDateParts } from "./validParts";

/**
 * Parses a "DD.MM.YYYY" Azerbaijani short date into a `Date` (at local
 * midnight), or `null` if the string is malformed or not a real date.
 *
 * @example
 * parseDateShortAz("20.07.2026") // Date 2026-07-20
 * parseDateShortAz("29.02.2023") // null (not a leap year)
 */
export function parseDateShortAz(input: string): Date | null {
  if (typeof input !== "string") return null;
  const m = input.trim().match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/);
  if (!m) return null;
  const day = Number(m[1]);
  const month = Number(m[2]);
  const year = Number(m[3]);
  if (!isValidDateParts(year, month, day)) return null;
  return new Date(year, month - 1, day);
}
