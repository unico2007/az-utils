/**
 * Returns `true` when `n` is an even integer.
 *
 * @example
 * isEven(4) // true
 * isEven(3) // false
 */
export function isEven(n: number): boolean {
  return Number.isInteger(n) && n % 2 === 0;
}
