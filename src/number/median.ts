/**
 * Returns the median of an array of numbers. For an even count it averages the
 * two middle values. Returns `NaN` for an empty array or invalid input.
 *
 * @example
 * median([1, 2, 3])    // 2
 * median([1, 2, 3, 4]) // 2.5
 */
export function median(values: number[]): number {
  if (!Array.isArray(values) || values.length === 0) return Number.NaN;
  for (const v of values) {
    if (typeof v !== "number" || !Number.isFinite(v)) return Number.NaN;
  }
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 1) return sorted[mid] ?? Number.NaN;
  return ((sorted[mid - 1] ?? 0) + (sorted[mid] ?? 0)) / 2;
}
