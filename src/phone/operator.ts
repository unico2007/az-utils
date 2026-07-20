import { normalizePhone } from "./validate";

// Two-digit prefixes (the digits right after +994) assigned to each mobile operator.
const OPERATOR_PREFIXES: Record<string, string> = {
  "50": "Azercell",
  "51": "Azercell",
  "10": "Azercell",
  "55": "Bakcell",
  "99": "Bakcell",
  "70": "Nar",
  "77": "Nar",
  "60": "Naxtel",
};

/**
 * Detects the Azerbaijani mobile operator for a phone number, or returns `null`
 * for landlines and unknown/unassigned prefixes.
 *
 * @example
 * detectOperator("0501234567")    // "Azercell"
 * detectOperator("+994551234567") // "Bakcell"
 * detectOperator("0121234567")    // null (Baku landline)
 */
export function detectOperator(input: string): string | null {
  const normalized = normalizePhone(input);
  if (normalized === null) return null;
  const prefix = normalized.slice(4, 6); // drop the "+994" country code
  return OPERATOR_PREFIXES[prefix] ?? null;
}
