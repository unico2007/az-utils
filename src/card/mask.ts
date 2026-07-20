/**
 * Masks a card number for display, keeping only the last four digits visible,
 * grouped in blocks of four. Non-digit characters in the input are ignored.
 *
 * @example
 * maskCardNumber("4111111111111111") // "**** **** **** 1111"
 */
export function maskCardNumber(input: string): string {
  if (typeof input !== "string") return "";
  const digits = input.replace(/\D/g, "");
  if (digits.length <= 4) return digits;
  const masked = "*".repeat(digits.length - 4) + digits.slice(-4);
  return masked.replace(/(.{4})/g, "$1 ").trim();
}
