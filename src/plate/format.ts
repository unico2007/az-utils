import { isValidPlate, normalizePlate } from "./validate";

/**
 * Formats a valid plate into the canonical dashed form "NN-LL-NNN", or returns
 * `null` if the plate is invalid.
 *
 * @example
 * formatPlate("10ab123")  // "10-AB-123"
 * formatPlate("90 ZZ 999") // "90-ZZ-999"
 */
export function formatPlate(input: string): string | null {
  if (!isValidPlate(input)) return null;
  const s = normalizePlate(input);
  return `${s.slice(0, 2)}-${s.slice(2, 4)}-${s.slice(4)}`;
}
