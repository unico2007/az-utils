import { sum } from "./sum";

/**
 * Returns the arithmetic mean of an array of numbers. Returns `NaN` for an
 * empty array, a non-array, or an array with a non-finite value.
 *
 * @example
 * average([1, 2, 3]) // 2
 * average([10, 20])  // 15
 */
export function average(values: number[]): number {
  if (!Array.isArray(values) || values.length === 0) return Number.NaN;
  const total = sum(values);
  return Number.isNaN(total) ? Number.NaN : total / values.length;
}
