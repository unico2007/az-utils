import { isValidIban, normalizeIban } from "./validate";

/**
 * Returns `true` when two IBANs are valid and identical after normalization
 * (ignoring spaces and case).
 *
 * @example
 * areIbansEqual("AZ21NABZ00000000137010001944", "az21 nabz 0000 0000 1370 1000 1944") // true
 */
export function areIbansEqual(a: string, b: string): boolean {
  if (!isValidIban(a) || !isValidIban(b)) return false;
  return normalizeIban(a) === normalizeIban(b);
}
