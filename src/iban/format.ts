import { normalizeIban } from "./validate";

/**
 * Formats an IBAN into the human-readable presentation form: space-separated
 * groups of four characters.
 *
 * @example
 * formatIban("AZ21NABZ00000000137010001944")
 * // "AZ21 NABZ 0000 0000 1370 1000 1944"
 */
export function formatIban(input: string): string {
  return normalizeIban(input)
    .replace(/(.{4})/g, "$1 ")
    .trim();
}
