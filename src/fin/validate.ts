const FIN_LENGTH = 7;

// The FIN is printed in uppercase Latin letters and digits.
const FIN_PATTERN = /^[0-9A-Z]{7}$/;

/**
 * Normalizes a FIN by trimming surrounding whitespace and uppercasing it.
 *
 * @example
 * normalizeFin("  1abc2de ") // "1ABC2DE"
 */
export function normalizeFin(input: string): string {
  return input.trim().toUpperCase();
}

/**
 * Validates the format of an Azerbaijani FIN (Fərdi İdentifikasiya Nömrəsi) —
 * the 7-character personal identification code printed on the national ID card
 * (şəxsiyyət vəsiqəsi) and passport.
 *
 * NOTE: This is a **format-only** check — exactly seven uppercase alphanumeric
 * characters. The FIN has no publicly documented checksum, so its authenticity
 * cannot be verified offline.
 *
 * @example
 * isValidFin("1ABC2DE") // true
 * isValidFin("1ABC-DE") // false
 */
export function isValidFin(input: string): boolean {
  if (typeof input !== "string") return false;
  const fin = normalizeFin(input);
  if (fin.length !== FIN_LENGTH) return false;
  return FIN_PATTERN.test(fin);
}
