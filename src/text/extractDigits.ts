/**
 * Returns only the digit characters of a string, in order.
 *
 * @example
 * extractDigits("+994 50 123-45-67") // "994501234567"
 * extractDigits("abc")               // ""
 */
export function extractDigits(input: string): string {
  if (typeof input !== "string") return "";
  return input.replace(/\D/g, "");
}
