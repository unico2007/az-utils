/**
 * Parses an Azerbaijani-formatted manat string back into a number. Accepts the
 * ₼ symbol, space (or non-breaking space) thousands separators and a comma or
 * dot decimal separator. Returns `null` when the input is not a valid amount.
 *
 * @example
 * parseManat("1 234,50 ₼") // 1234.5
 * parseManat("1000000")    // 1000000
 * parseManat("abc")        // null
 */
export function parseManat(input: string): number | null {
  if (typeof input !== "string") return null;
  const cleaned = input.replace(/₼/g, "").replace(/[\s ]/g, "").replace(/,/g, ".");
  if (cleaned === "" || !/^-?\d+(\.\d+)?$/.test(cleaned)) return null;
  return Number(cleaned);
}
