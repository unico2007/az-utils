/**
 * Ensures a string ends with `suffix`, appending it only when missing.
 *
 * @example
 * ensureSuffix("folder", "/")   // "folder/"
 * ensureSuffix("folder/", "/")  // "folder/" (unchanged)
 */
export function ensureSuffix(input: string, suffix: string): string {
  if (typeof input !== "string" || typeof suffix !== "string") return "";
  return input.endsWith(suffix) ? input : input + suffix;
}
