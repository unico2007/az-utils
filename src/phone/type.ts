import { normalizePhone } from "./validate";

// Two-digit prefixes assigned to mobile operators; everything else valid is a landline.
const MOBILE_PREFIXES = new Set(["10", "50", "51", "55", "60", "70", "77", "99"]);

/**
 * Returns `true` when the number is a valid Azerbaijani **mobile** number.
 *
 * @example
 * isMobilePhone("0501234567") // true
 * isMobilePhone("0121234567") // false (Baku landline)
 */
export function isMobilePhone(input: string): boolean {
  const e164 = normalizePhone(input);
  if (e164 === null) return false;
  return MOBILE_PREFIXES.has(e164.slice(4, 6));
}

/**
 * Returns `true` when the number is a valid Azerbaijani **landline** number
 * (valid, but not a known mobile prefix).
 *
 * @example
 * isLandlinePhone("0121234567") // true
 * isLandlinePhone("0501234567") // false
 */
export function isLandlinePhone(input: string): boolean {
  const e164 = normalizePhone(input);
  if (e164 === null) return false;
  return !MOBILE_PREFIXES.has(e164.slice(4, 6));
}
