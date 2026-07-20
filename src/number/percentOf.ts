/**
 * Returns what percent `part` is of `whole`. Returns `NaN` for non-finite input
 * or when `whole` is 0.
 *
 * @example
 * percentOf(25, 200) // 12.5
 * percentOf(1, 4)    // 25
 */
export function percentOf(part: number, whole: number): number {
  if (![part, whole].every(Number.isFinite) || whole === 0) return Number.NaN;
  return (part / whole) * 100;
}
