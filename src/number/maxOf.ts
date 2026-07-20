/**
 * Returns the largest value in an array. Returns `NaN` for an empty array or
 * invalid input. (Named `maxOf` to avoid clashing with `Math.max`.)
 *
 * @example
 * maxOf([3, 1, 2]) // 3
 */
export function maxOf(values: number[]): number {
  if (!Array.isArray(values) || values.length === 0) return Number.NaN;
  let max = Number.NEGATIVE_INFINITY;
  for (const v of values) {
    if (typeof v !== "number" || !Number.isFinite(v)) return Number.NaN;
    if (v > max) max = v;
  }
  return max;
}
