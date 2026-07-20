/**
 * Formats a ratio as an Azerbaijani percent string: the value is multiplied by
 * 100, rounded to `digits` decimals, written with a comma decimal separator and
 * a trailing `%`.
 *
 * @example
 * formatPercentAz(0.1234, 2) // "12,34%"
 * formatPercentAz(0.5)       // "50%"
 * formatPercentAz(1)         // "100%"
 */
export function formatPercentAz(ratio: number, digits = 0): string {
  if (typeof ratio !== "number" || !Number.isFinite(ratio)) return "";
  if (!Number.isInteger(digits) || digits < 0) return "";
  const pct = (ratio * 100).toFixed(digits).replace(".", ",");
  return `${pct}%`;
}
