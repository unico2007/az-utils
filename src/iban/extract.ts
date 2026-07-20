import { isValidIban, normalizeIban } from "./validate";

/**
 * Extracts the 4-letter bank code from a valid Azerbaijani IBAN, or returns
 * `null` if the IBAN is invalid.
 *
 * @example
 * extractBankCode("AZ21NABZ00000000137010001944") // "NABZ"
 */
export function extractBankCode(input: string): string | null {
  if (!isValidIban(input)) return null;
  return normalizeIban(input).slice(4, 8);
}

/**
 * Extracts the 20-character account identifier from a valid Azerbaijani IBAN,
 * or returns `null` if the IBAN is invalid.
 *
 * @example
 * extractAccount("AZ21NABZ00000000137010001944") // "00000000137010001944"
 */
export function extractAccount(input: string): string | null {
  if (!isValidIban(input)) return null;
  return normalizeIban(input).slice(8);
}
