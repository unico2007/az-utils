/**
 * Returns `true` when `value` lies within the inclusive range [min, max].
 *
 * @example
 * inRange(5, 0, 10)  // true
 * inRange(10, 0, 10) // true
 * inRange(11, 0, 10) // false
 */
export function inRange(value: number, min: number, max: number): boolean {
  if (![value, min, max].every(Number.isFinite) || min > max) return false;
  return value >= min && value <= max;
}
