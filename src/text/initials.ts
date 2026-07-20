import { toUpperAz } from "../case";

/**
 * Builds the uppercase initials of a name (Azerbaijani-aware). Takes the first
 * letter of each whitespace-separated word.
 *
 * @example
 * initials("Orxan Qasımov") // "OQ"
 * initials("İlqar məmmədov") // "İM"
 */
export function initials(input: string): string {
  if (typeof input !== "string") return "";
  return input
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => toUpperAz(word.charAt(0)))
    .join("");
}
