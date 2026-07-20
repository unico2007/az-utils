/**
 * Counts the characters in a string by Unicode code point (so multi-byte
 * Azerbaijani letters count as one each), rather than UTF-16 units.
 *
 * @example
 * charCount("salam") // 5
 * charCount("əli")   // 3
 */
export function charCount(input: string): number {
  if (typeof input !== "string") return 0;
  return [...input].length;
}
