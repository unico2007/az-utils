// Azerbaijan's international dialling code.
const COUNTRY_CODE = "994";

// The national significant number is always 9 digits (area/operator code + subscriber).
const NATIONAL_LENGTH = 9;

/**
 * Normalizes an Azerbaijani phone number to E.164 form (`+994XXXXXXXXX`).
 *
 * Accepts numbers written with `+994`, `994`, a leading trunk `0`, or none of
 * these, and ignores spaces, dashes and parentheses. Returns `null` when the
 * input cannot be a valid AZ number.
 *
 * @example
 * normalizePhone("0501234567")          // "+994501234567"
 * normalizePhone("+994 (50) 123-45-67") // "+994501234567"
 * normalizePhone("12345")               // null
 */
export function normalizePhone(input: string): string | null {
  if (typeof input !== "string") return null;

  const compact = input.replace(/[\s()\-.]/g, "");
  if (!/^\+?\d+$/.test(compact)) return null;

  const digits = compact.replace(/^\+/, "");

  let national: string;
  if (digits.startsWith(COUNTRY_CODE)) {
    national = digits.slice(COUNTRY_CODE.length);
  } else if (digits.startsWith("0")) {
    national = digits.slice(1);
  } else {
    national = digits;
  }

  if (national.length !== NATIONAL_LENGTH) return null;
  // A real area/operator code never starts with 0.
  if (national.charAt(0) === "0") return null;

  return `+${COUNTRY_CODE}${national}`;
}

/**
 * Validates the structure of an Azerbaijani phone number: the `+994` country
 * code (or a leading `0`) followed by a 9-digit national number.
 *
 * NOTE: This is a structural check — it does not verify that the operator/area
 * prefix is currently assigned. Operator detection is a separate utility.
 *
 * @example
 * isValidPhone("+994501234567") // true
 * isValidPhone("055 123 45 67") // true
 * isValidPhone("0000000000")    // false
 */
export function isValidPhone(input: string): boolean {
  return normalizePhone(input) !== null;
}
