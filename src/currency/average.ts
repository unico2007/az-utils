import { sumManat } from "./sum";

/**
 * Returns the average of manat amounts, rounded to whole qəpik. Returns `NaN`
 * for an empty array or invalid input.
 *
 * @example
 * averageManat([10, 20])        // 15
 * averageManat([0.1, 0.2, 0.3]) // 0.2
 */
export function averageManat(values: number[]): number {
  if (!Array.isArray(values) || values.length === 0) return Number.NaN;
  const total = sumManat(values);
  if (Number.isNaN(total)) return Number.NaN;
  return Math.round((total / values.length) * 100) / 100;
}
