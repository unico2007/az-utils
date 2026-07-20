/**
 * Uppercases a string using Azerbaijani casing rules. Unlike the default
 * `String.prototype.toUpperCase`, the dotted "i" maps to "İ" and the dotless
 * "ı" maps to "I"; the other Azerbaijani letters uppercase correctly on their
 * own.
 *
 * @example
 * toUpperAz("işıq")   // "İŞIQ"
 * toUpperAz("bakı")   // "BAKI"
 * toUpperAz("gəncə")  // "GƏNCƏ"
 */
export function toUpperAz(input: string): string {
  if (typeof input !== "string") return "";
  return input.replace(/i/g, "İ").replace(/ı/g, "I").toUpperCase();
}

/**
 * Lowercases a string using Azerbaijani casing rules. Unlike the default
 * `String.prototype.toLowerCase`, the dotless "I" maps to "ı" and the dotted
 * "İ" maps to "i" (avoiding the stray combining dot the default would add).
 *
 * @example
 * toLowerAz("İŞIQ")  // "işıq"
 * toLowerAz("BAKI")  // "bakı"
 * toLowerAz("GƏNCƏ") // "gəncə"
 */
export function toLowerAz(input: string): string {
  if (typeof input !== "string") return "";
  return input.replace(/I/g, "ı").replace(/İ/g, "i").toLowerCase();
}
