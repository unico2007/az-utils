/**
 * Rounds a number to a given number of decimal places (default 0). Returns
 * `NaN` for non-finite input.
 *
 * @example
 * roundTo(1.2345, 2) // 1.23
 * roundTo(2.5)       // 3
 * roundTo(1234.5678, 1) // 1234.6
 */
export function roundTo(value: number, decimals = 0): number {
  if (!Number.isFinite(value) || !Number.isInteger(decimals) || decimals < 0) return Number.NaN;
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
