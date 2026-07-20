// Azerbaijani postal codes are written as "AZ" followed by four digits (AZ1000).
const POSTAL_PATTERN = /^AZ\d{4}$/;

/**
 * Normalizes a postal code: strips whitespace, uppercases, and adds the "AZ"
 * prefix when only the four digits are provided.
 *
 * @example
 * normalizePostalCode("1000")    // "AZ1000"
 * normalizePostalCode("az 1000") // "AZ1000"
 */
export function normalizePostalCode(input: string): string {
  const s = input.replace(/\s+/g, "").toUpperCase();
  return /^\d{4}$/.test(s) ? `AZ${s}` : s;
}

/**
 * Validates an Azerbaijani postal code — the letters "AZ" followed by exactly
 * four digits (e.g. AZ1000). A bare four-digit code is accepted and treated as
 * the same value.
 *
 * NOTE: format-only — it does not verify that the code maps to a real locality.
 *
 * @example
 * isValidPostalCode("AZ1000") // true
 * isValidPostalCode("1000")   // true
 * isValidPostalCode("AZ123")  // false
 */
export function isValidPostalCode(input: string): boolean {
  if (typeof input !== "string") return false;
  return POSTAL_PATTERN.test(normalizePostalCode(input));
}
