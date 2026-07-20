/**
 * Formats a number using Azerbaijani locale conventions: a space as the
 * thousands separator and a comma as the decimal separator.
 *
 * When `fractionDigits` is given the value is rounded to that many decimals;
 * otherwise the number's natural representation is kept.
 *
 * @example
 * formatNumberAz(1234567.89)  // "1 234 567,89"
 * formatNumberAz(1000)        // "1 000"
 * formatNumberAz(1234.5, 2)   // "1 234,50"
 */
export function formatNumberAz(value: number, fractionDigits?: number): string {
  if (typeof value !== "number" || !Number.isFinite(value)) return "";
  const fixed = fractionDigits === undefined ? String(value) : value.toFixed(fractionDigits);
  const negative = fixed.startsWith("-");
  const abs = negative ? fixed.slice(1) : fixed;
  const dot = abs.indexOf(".");
  const intPart = dot === -1 ? abs : abs.slice(0, dot);
  const fracPart = dot === -1 ? "" : abs.slice(dot + 1);
  const grouped = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  const body = fracPart ? `${grouped},${fracPart}` : grouped;
  return negative ? `-${body}` : body;
}
