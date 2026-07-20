/**
 * Collapses every run of whitespace (spaces, tabs, newlines) into a single
 * space and trims the ends — handy for cleaning up user-entered text.
 *
 * @example
 * normalizeSpaces("  çox   söz  ") // "çox söz"
 * normalizeSpaces("a\t\nb")        // "a b"
 */
export function normalizeSpaces(input: string): string {
  if (typeof input !== "string") return "";
  return input.replace(/\s+/g, " ").trim();
}
