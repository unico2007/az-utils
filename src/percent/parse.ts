/**
 * Parses an Azerbaijani percent string into a ratio (the inverse of
 * {@link formatPercentAz}). Accepts a `%` sign, spaces and a comma or dot
 * decimal. Returns `null` for invalid input.
 *
 * @example
 * parsePercentAz("50%")    // 0.5
 * parsePercentAz("12,34%") // 0.1234
 * parsePercentAz("abc")    // null
 */
export function parsePercentAz(input: string): number | null {
  if (typeof input !== "string") return null;
  const cleaned = input.replace(/%/g, "").replace(/\s/g, "").replace(/,/g, ".");
  if (cleaned === "" || !/^-?\d+(\.\d+)?$/.test(cleaned)) return null;
  return Number(cleaned) / 100;
}
