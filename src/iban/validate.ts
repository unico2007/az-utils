const AZ_IBAN_LENGTH = 28;

// AZ + 2 check digits + 4-letter bank code + 20 alphanumeric account characters.
const AZ_IBAN_PATTERN = /^AZ\d{2}[A-Z]{4}[0-9A-Z]{20}$/;

/**
 * Removes all whitespace and uppercases an IBAN so it can be validated or
 * compared regardless of how the user typed it.
 *
 * @example
 * normalizeIban("az21 nabz 0000") // "AZ21NABZ0000"
 */
export function normalizeIban(input: string): string {
  return input.replace(/\s+/g, "").toUpperCase();
}

/**
 * Computes the ISO 7064 MOD-97-10 checksum used by every IBAN.
 *
 * Letters are expanded to numbers (A=10 … Z=35) and the resulting decimal
 * value is reduced modulo 97 digit-by-digit to avoid BigInt/overflow. A
 * structurally valid IBAN yields a remainder of exactly `1`.
 */
function mod97(iban: string): number {
  // Move the four leading characters (country code + check digits) to the end.
  const rearranged = iban.slice(4) + iban.slice(0, 4);

  let remainder = 0;
  for (let i = 0; i < rearranged.length; i++) {
    const code = rearranged.charCodeAt(i);
    let value: number;
    if (code >= 48 && code <= 57) {
      value = code - 48; // "0"–"9" -> 0–9
    } else if (code >= 65 && code <= 90) {
      value = code - 55; // "A"–"Z" -> 10–35
    } else {
      return Number.NaN;
    }
    // A letter contributes two decimal digits, so shift by 100 rather than 10.
    remainder = value > 9 ? (remainder * 100 + value) % 97 : (remainder * 10 + value) % 97;
  }
  return remainder;
}

/**
 * Validates an Azerbaijani (AZ) IBAN.
 *
 * Checks the country code, total length (28), the structural pattern and the
 * ISO 7064 MOD-97-10 checksum. Whitespace and letter case are ignored.
 *
 * @example
 * isValidIban("AZ21 NABZ 0000 0000 1370 1000 1944") // true
 * isValidIban("AZ22NABZ00000000137010001944")       // false (bad checksum)
 */
export function isValidIban(input: string): boolean {
  if (typeof input !== "string") return false;
  const iban = normalizeIban(input);
  if (iban.length !== AZ_IBAN_LENGTH) return false;
  if (!AZ_IBAN_PATTERN.test(iban)) return false;
  return mod97(iban) === 1;
}
