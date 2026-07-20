/**
 * Returns `true` when `n` is an odd integer.
 *
 * @example
 * isOdd(3) // true
 * isOdd(4) // false
 */
export function isOdd(n: number): boolean {
  return Number.isInteger(n) && Math.abs(n % 2) === 1;
}
