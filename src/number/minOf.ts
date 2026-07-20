/**
 * Returns the smallest value in an array. Returns `NaN` for an empty array or
 * invalid input. (Named `minOf` to avoid clashing with `Math.min`.)
 *
 * @example
 * minOf([3, 1, 2]) // 1
 */
export function minOf(values: number[]): number {
  if (!Array.isArray(values) || values.length === 0) return Number.NaN;
  let min = Number.POSITIVE_INFINITY;
  for (const v of values) {
    if (typeof v !== "number" || !Number.isFinite(v)) return Number.NaN;
    if (v < min) min = v;
  }
  return min;
}
