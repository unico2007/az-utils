import { normalizePhone } from "./validate";

// Splits a valid number into its national blocks: [area, XXX, XX, XX].
function parts(input: string): [string, string, string, string] | null {
  const e164 = normalizePhone(input);
  if (e164 === null) return null;
  const n = e164.slice(4); // the 9 national digits, minus "+994"
  return [n.slice(0, 2), n.slice(2, 5), n.slice(5, 7), n.slice(7, 9)];
}

/**
 * Formats a phone number in international presentation form, or `null` if the
 * input is not a valid Azerbaijani number.
 *
 * @example
 * formatPhoneInternational("0501234567") // "+994 50 123 45 67"
 */
export function formatPhoneInternational(input: string): string | null {
  const p = parts(input);
  if (p === null) return null;
  return `+994 ${p[0]} ${p[1]} ${p[2]} ${p[3]}`;
}

/**
 * Formats a phone number in national presentation form (leading trunk 0), or
 * `null` if the input is not a valid Azerbaijani number.
 *
 * @example
 * formatPhoneNational("+994501234567") // "050 123 45 67"
 */
export function formatPhoneNational(input: string): string | null {
  const p = parts(input);
  if (p === null) return null;
  return `0${p[0]} ${p[1]} ${p[2]} ${p[3]}`;
}
