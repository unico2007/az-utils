import { gcd } from "./gcd";

/**
 * Returns the least common multiple of two integers. Returns 0 when either is
 * 0, and `NaN` for non-integer input.
 *
 * @example
 * lcm(4, 6) // 12
 * lcm(3, 5) // 15
 */
export function lcm(a: number, b: number): number {
  if (!Number.isInteger(a) || !Number.isInteger(b)) return Number.NaN;
  if (a === 0 || b === 0) return 0;
  return Math.abs(a * b) / gcd(a, b);
}
