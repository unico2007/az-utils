import { normalizeIban } from "./validate";

/**
 * Masks the middle of an IBAN for display, keeping the first and last four
 * characters visible. Whitespace is stripped and letters are uppercased first.
 *
 * @example
 * maskIban("AZ21NABZ00000000137010001944") // "AZ21********************1944"
 */
export function maskIban(input: string): string {
  if (typeof input !== "string") return "";
  const s = normalizeIban(input);
  if (s.length <= 8) return "*".repeat(s.length);
  return `${s.slice(0, 4)}${"*".repeat(s.length - 8)}${s.slice(-4)}`;
}
