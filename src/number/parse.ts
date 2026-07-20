/**
 * Parses an Azerbaijani-formatted number string (space thousands separators,
 * comma decimal) back into a number. Returns `null` for invalid input.
 *
 * @example
 * parseNumberAz("1 234,56") // 1234.56
 * parseNumberAz("-5,5")     // -5.5
 * parseNumberAz("abc")      // null
 */
export function parseNumberAz(input: string): number | null {
  if (typeof input !== "string") return null;
  const cleaned = input.replace(/\s/g, "").replace(/,/g, ".");
  if (cleaned === "" || !/^-?\d+(\.\d+)?$/.test(cleaned)) return null;
  return Number(cleaned);
}
