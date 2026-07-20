/**
 * Rounds a manat amount to two decimals (whole qəpik). Returns `NaN` for
 * non-finite input.
 *
 * @example
 * roundManat(1.239) // 1.24
 * roundManat(1.2)   // 1.2
 */
export function roundManat(value: number): number {
  if (typeof value !== "number" || !Number.isFinite(value)) return Number.NaN;
  return Math.round(value * 100) / 100;
}
