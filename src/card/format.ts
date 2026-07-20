/**
 * Formats a card number into space-separated groups of four digits. Non-digit
 * characters in the input are ignored.
 *
 * @example
 * formatCardNumber("4111111111111111") // "4111 1111 1111 1111"
 */
export function formatCardNumber(input: string): string {
  if (typeof input !== "string") return "";
  return input
    .replace(/\D/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();
}
