import { normalizePhone } from "./validate";

/**
 * Returns the 9-digit national number (without the +994 country code) for a
 * valid Azerbaijani phone number, or `null` for invalid input.
 *
 * @example
 * phoneDigits("0501234567")     // "501234567"
 * phoneDigits("+994551234567")  // "551234567"
 */
export function phoneDigits(input: string): string | null {
  const e164 = normalizePhone(input);
  return e164 === null ? null : e164.slice(4);
}
