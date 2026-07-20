const VOEN_LENGTH = 10;

// A VÖEN is printed as ten decimal digits.
const VOEN_PATTERN = /^\d{10}$/;

/**
 * Normalizes a VÖEN by removing all whitespace.
 *
 * @example
 * normalizeVoen(" 12 3456 7890 ") // "1234567890"
 */
export function normalizeVoen(input: string): string {
  return input.replace(/\s+/g, "");
}

/**
 * Validates the format of an Azerbaijani VÖEN (Vergi Ödəyicisinin Eyniləşdirmə
 * Nömrəsi) — the 10-digit taxpayer identification number issued to individuals
 * and legal entities.
 *
 * NOTE: This is a **format-only** check — exactly ten digits. Azerbaijan's VÖEN
 * has no publicly documented check digit, so authenticity cannot be verified
 * offline.
 *
 * @example
 * isValidVoen("1234567890")  // true
 * isValidVoen("12 3456 7890") // true (whitespace ignored)
 * isValidVoen("123456789")   // false (too short)
 */
export function isValidVoen(input: string): boolean {
  if (typeof input !== "string") return false;
  const voen = normalizeVoen(input);
  if (voen.length !== VOEN_LENGTH) return false;
  return VOEN_PATTERN.test(voen);
}
