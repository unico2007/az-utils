/**
 * Pads an integer with leading zeros to at least `width` characters (the minus
 * sign counts toward the width for negative numbers). Returns "" for invalid
 * input.
 *
 * @example
 * zeroPad(5, 3)   // "005"
 * zeroPad(42, 2)  // "42"
 * zeroPad(-7, 3)  // "-07"
 */
export function zeroPad(value: number, width: number): string {
  if (!Number.isFinite(value) || !Number.isInteger(width) || width < 0) return "";
  const negative = value < 0;
  const digits = Math.abs(value).toString();
  const padded = digits.padStart(negative ? width - 1 : width, "0");
  return negative ? `-${padded}` : padded;
}
