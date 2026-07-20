/**
 * Constrains a number to the inclusive range [min, max]. Returns `NaN` for
 * non-finite input or when min > max.
 *
 * @example
 * clamp(15, 0, 10) // 10
 * clamp(-3, 0, 10) // 0
 * clamp(5, 0, 10)  // 5
 */
export function clamp(value: number, min: number, max: number): number {
  if (![value, min, max].every(Number.isFinite) || min > max) return Number.NaN;
  return Math.min(Math.max(value, min), max);
}
