/**
 * Converts manat to qəpik (1 manat = 100 qəpik), rounded to the nearest whole
 * qəpik. Returns `NaN` for non-finite input.
 *
 * @example
 * manatToQepik(1.5)  // 150
 * manatToQepik(0.01) // 1
 */
export function manatToQepik(manat: number): number {
  if (typeof manat !== "number" || !Number.isFinite(manat)) return Number.NaN;
  return Math.round(manat * 100);
}

/**
 * Converts qəpik to manat (100 qəpik = 1 manat). Returns `NaN` for non-finite
 * input.
 *
 * @example
 * qepikToManat(150) // 1.5
 * qepikToManat(1)   // 0.01
 */
export function qepikToManat(qepik: number): number {
  if (typeof qepik !== "number" || !Number.isFinite(qepik)) return Number.NaN;
  return qepik / 100;
}
