/**
 * Validates a payment-card number using the Luhn (mod-10) checksum. Spaces and
 * dashes are ignored; the digit count must be 12–19.
 *
 * @example
 * isValidCardNumber("4111 1111 1111 1111") // true
 * isValidCardNumber("4111111111111112")    // false
 */
export function isValidCardNumber(input: string): boolean {
  if (typeof input !== "string") return false;
  const digits = input.replace(/[\s-]/g, "");
  if (!/^\d{12,19}$/.test(digits)) return false;

  let sum = 0;
  let double = false;
  for (let i = digits.length - 1; i >= 0; i--) {
    let d = digits.charCodeAt(i) - 48;
    if (double) {
      d *= 2;
      if (d > 9) d -= 9;
    }
    sum += d;
    double = !double;
  }
  return sum % 10 === 0;
}
