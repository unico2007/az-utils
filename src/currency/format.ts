/**
 * Formats an amount of manat as an Azerbaijani currency string: space-grouped
 * thousands, a comma decimal separator, two fraction digits and the ₼ symbol.
 *
 * @example
 * formatManat(1234.5)  // "1 234,50 ₼"
 * formatManat(1000000) // "1 000 000,00 ₼"
 * formatManat(-5.5)    // "-5,50 ₼"
 */
export function formatManat(value: number): string {
  if (typeof value !== "number" || !Number.isFinite(value)) return "";
  const negative = value < 0;
  const fixed = Math.abs(value).toFixed(2);
  const dot = fixed.indexOf(".");
  const intPart = fixed.slice(0, dot);
  const fracPart = fixed.slice(dot + 1);
  const grouped = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return `${negative ? "-" : ""}${grouped},${fracPart} ₼`;
}
