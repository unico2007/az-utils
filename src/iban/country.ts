import { normalizeIban } from "./validate";

/**
 * Returns the two-letter country code at the start of an IBAN (uppercased,
 * whitespace-ignored), or `null` if the string doesn't begin with two letters.
 *
 * @example
 * ibanCountryCode("AZ21NABZ...") // "AZ"
 * ibanCountryCode("de89 3704 ...") // "DE"
 */
export function ibanCountryCode(input: string): string | null {
  if (typeof input !== "string") return null;
  const s = normalizeIban(input);
  return /^[A-Z]{2}/.test(s) ? s.slice(0, 2) : null;
}
