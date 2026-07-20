// SWIFT/BIC for an Azerbaijani bank: 4-letter bank code, the "AZ" country code,
// a 2-character location code and an optional 3-character branch code.
const SWIFT_PATTERN = /^[A-Z]{4}AZ[A-Z0-9]{2}([A-Z0-9]{3})?$/;

/**
 * Normalizes a SWIFT/BIC code by removing whitespace and uppercasing.
 *
 * @example
 * normalizeSwift(" paha az22 ") // "PAHAAZ22"
 */
export function normalizeSwift(input: string): string {
  return input.replace(/\s+/g, "").toUpperCase();
}

/**
 * Validates the format of an Azerbaijani SWIFT/BIC code — 8 or 11 characters
 * whose 5th–6th characters are the "AZ" country code.
 *
 * NOTE: format-only — it does not check that the code belongs to a registered
 * bank.
 *
 * @example
 * isValidSwift("PAHAAZ22")    // true
 * isValidSwift("AIIBAZ2XXXX") // true (with branch code)
 * isValidSwift("DEUTDEFF")    // false (not an AZ country code)
 */
export function isValidSwift(input: string): boolean {
  if (typeof input !== "string") return false;
  return SWIFT_PATTERN.test(normalizeSwift(input));
}
