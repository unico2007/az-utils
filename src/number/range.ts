/**
 * Builds an array of numbers from `start` (inclusive) to `end` (exclusive) by
 * `step` (default 1). Supports negative steps. Returns `[]` for invalid input.
 *
 * @example
 * range(0, 5)      // [0, 1, 2, 3, 4]
 * range(0, 10, 2)  // [0, 2, 4, 6, 8]
 * range(5, 0, -1)  // [5, 4, 3, 2, 1]
 */
export function range(start: number, end: number, step = 1): number[] {
  if (![start, end, step].every(Number.isFinite) || step === 0) return [];
  const result: number[] = [];
  if (step > 0) {
    for (let i = start; i < end; i += step) result.push(i);
  } else {
    for (let i = start; i > end; i += step) result.push(i);
  }
  return result;
}
