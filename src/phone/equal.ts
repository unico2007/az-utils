import { normalizePhone } from "./validate";

/**
 * Returns `true` when two phone numbers refer to the same Azerbaijani number,
 * comparing their normalized E.164 forms. Two invalid numbers are never equal.
 *
 * @example
 * arePhonesEqual("0501234567", "+994 50 123 45 67") // true
 * arePhonesEqual("0501234567", "0501234568")        // false
 */
export function arePhonesEqual(a: string, b: string): boolean {
  const na = normalizePhone(a);
  const nb = normalizePhone(b);
  return na !== null && na === nb;
}
