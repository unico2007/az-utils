/**
 * Returns `true` when a value is `null`, `undefined`, not a string, or a string
 * that is empty or contains only whitespace.
 *
 * @example
 * isBlank("")     // true
 * isBlank("   ")  // true
 * isBlank("salam") // false
 */
export function isBlank(input: unknown): boolean {
  return typeof input !== "string" || input.trim() === "";
}
