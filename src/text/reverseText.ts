/**
 * Reverses a string by Unicode code points (so multi-byte characters stay
 * intact).
 *
 * @example
 * reverseText("salam") // "malas"
 * reverseText("əli")   // "ilə"
 */
export function reverseText(input: string): string {
  if (typeof input !== "string") return "";
  return [...input].reverse().join("");
}
