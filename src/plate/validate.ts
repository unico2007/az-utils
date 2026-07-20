// Azerbaijani civilian plates follow "NN-LL-NNN": a two-digit region code,
// two Latin letters, and a three-digit serial (e.g. 10-AB-123).
const PLATE_PATTERN = /^\d{2}[A-Z]{2}\d{3}$/;

/**
 * Normalizes a plate by removing spaces and dashes and uppercasing it.
 *
 * @example
 * normalizePlate("10-ab-123") // "10AB123"
 */
export function normalizePlate(input: string): string {
  return input.replace(/[\s-]/g, "").toUpperCase();
}

/**
 * Validates an Azerbaijani vehicle registration plate in the common civilian
 * format NN-LL-NNN — a two-digit region code (01–99), two Latin letters and a
 * three-digit serial. Dashes and spaces are optional.
 *
 * NOTE: format-only — the region code is range-checked (01–99) but not verified
 * against the official region list.
 *
 * @example
 * isValidPlate("10-AB-123") // true
 * isValidPlate("90zz999")   // true
 * isValidPlate("00-AB-123") // false (region 00)
 */
export function isValidPlate(input: string): boolean {
  if (typeof input !== "string") return false;
  const s = normalizePlate(input);
  if (!PLATE_PATTERN.test(s)) return false;
  const region = Number(s.slice(0, 2));
  return region >= 1 && region <= 99;
}
