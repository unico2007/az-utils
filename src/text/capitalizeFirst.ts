import { toUpperAz } from "../case";

/**
 * Uppercases only the first character of a string (Azerbaijani-aware, so a
 * leading "i" becomes "İ"), leaving the rest untouched — i.e. sentence case.
 *
 * @example
 * capitalizeFirstAz("işıq")        // "İşıq"
 * capitalizeFirstAz("salam dünya") // "Salam dünya"
 */
export function capitalizeFirstAz(input: string): string {
  if (typeof input !== "string" || input === "") return "";
  return toUpperAz(input.charAt(0)) + input.slice(1);
}
