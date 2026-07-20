/**
 * Returns the last four digits of a card number, or `null` when there are fewer
 * than four digits. Non-digit characters are ignored.
 *
 * @example
 * getCardLast4("4111 1111 1111 1111") // "1111"
 */
export function getCardLast4(input: string): string | null {
  if (typeof input !== "string") return null;
  const digits = input.replace(/\D/g, "");
  return digits.length >= 4 ? digits.slice(-4) : null;
}
