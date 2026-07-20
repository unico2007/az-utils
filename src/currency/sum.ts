/**
 * Sums manat amounts with qəpik precision, avoiding floating-point drift (each
 * amount is rounded to whole qəpik before adding). Returns 0 for an empty array
 * and `NaN` for invalid input.
 *
 * @example
 * sumManat([0.1, 0.2])   // 0.3
 * sumManat([1.5, 2.25])  // 3.75
 */
export function sumManat(values: number[]): number {
  if (!Array.isArray(values)) return Number.NaN;
  let totalQepik = 0;
  for (const v of values) {
    if (typeof v !== "number" || !Number.isFinite(v)) return Number.NaN;
    totalQepik += Math.round(v * 100);
  }
  return totalQepik / 100;
}
