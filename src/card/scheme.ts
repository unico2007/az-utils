/**
 * Detects the payment-card scheme from a card number by its issuer prefix.
 * Recognises Visa, Mastercard and American Express; returns `null` for anything
 * else (or malformed input). Spaces and dashes are ignored.
 *
 * @example
 * detectCardScheme("4111111111111111") // "Visa"
 * detectCardScheme("5555555555554444") // "Mastercard"
 * detectCardScheme("378282246310005")  // "Amex"
 */
export function detectCardScheme(input: string): string | null {
  if (typeof input !== "string") return null;
  const digits = input.replace(/[\s-]/g, "");
  if (!/^\d{12,19}$/.test(digits)) return null;

  if (digits.startsWith("4")) return "Visa";
  if (/^3[47]/.test(digits)) return "Amex";
  if (/^5[1-5]/.test(digits)) return "Mastercard";

  const first4 = Number(digits.slice(0, 4));
  if (first4 >= 2221 && first4 <= 2720) return "Mastercard";

  return null;
}
