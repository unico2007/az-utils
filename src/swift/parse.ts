import { isValidSwift, normalizeSwift } from "./validate";

export interface SwiftParts {
  /** 4-letter institution (bank) code. */
  bank: string;
  /** 2-letter country code (always "AZ" for a valid AZ BIC). */
  country: string;
  /** 2-character location code. */
  location: string;
  /** 3-character branch code, or `null` for an 8-character BIC. */
  branch: string | null;
}

/**
 * Splits a valid Azerbaijani SWIFT/BIC into its parts, or returns `null` if the
 * code is invalid.
 *
 * @example
 * parseSwift("PAHAAZ22")
 * // { bank: "PAHA", country: "AZ", location: "22", branch: null }
 */
export function parseSwift(input: string): SwiftParts | null {
  if (!isValidSwift(input)) return null;
  const s = normalizeSwift(input);
  return {
    bank: s.slice(0, 4),
    country: s.slice(4, 6),
    location: s.slice(6, 8),
    branch: s.length === 11 ? s.slice(8, 11) : null,
  };
}
