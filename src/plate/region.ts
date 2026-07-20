import { isValidPlate, normalizePlate } from "./validate";

/**
 * Extracts the two-digit region code from a valid Azerbaijani plate as a
 * number, or returns `null` if the plate is invalid.
 *
 * @example
 * extractPlateRegion("10-AB-123") // 10
 * extractPlateRegion("90zz999")   // 90
 * extractPlateRegion("nonsense")  // null
 */
export function extractPlateRegion(input: string): number | null {
  if (!isValidPlate(input)) return null;
  return Number(normalizePlate(input).slice(0, 2));
}
