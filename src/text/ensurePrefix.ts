/**
 * Ensures a string starts with `prefix`, prepending it only when missing.
 *
 * @example
 * ensurePrefix("994501234567", "+") // "+994501234567"
 * ensurePrefix("+994...", "+")      // "+994..." (unchanged)
 */
export function ensurePrefix(input: string, prefix: string): string {
  if (typeof input !== "string" || typeof prefix !== "string") return "";
  return input.startsWith(prefix) ? input : prefix + input;
}
