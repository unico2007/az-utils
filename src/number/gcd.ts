/**
 * Returns the greatest common divisor of two integers (using their absolute
 * values). Returns `NaN` for non-integer input.
 *
 * @example
 * gcd(12, 8) // 4
 * gcd(17, 5) // 1
 */
export function gcd(a: number, b: number): number {
  if (!Number.isInteger(a) || !Number.isInteger(b)) return Number.NaN;
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y !== 0) {
    [x, y] = [y, x % y];
  }
  return x;
}
