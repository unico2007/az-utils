/**
 * Sums an array of numbers. Returns 0 for an empty array and `NaN` if the input
 * is not an array or contains a non-finite value.
 *
 * @example
 * sum([1, 2, 3]) // 6
 * sum([])        // 0
 */
export function sum(values: number[]): number {
  if (!Array.isArray(values)) return Number.NaN;
  let total = 0;
  for (const v of values) {
    if (typeof v !== "number" || !Number.isFinite(v)) return Number.NaN;
    total += v;
  }
  return total;
}
