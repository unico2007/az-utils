import { normalizeFin } from "./validate";

/**
 * Masks a FIN for display, keeping the first two and last two characters
 * visible and hiding the middle three. Input is trimmed and uppercased first.
 *
 * @example
 * maskFin("1ABC2DE") // "1A***DE"
 */
export function maskFin(input: string): string {
  if (typeof input !== "string") return "";
  const fin = normalizeFin(input);
  if (fin.length !== 7) return "*".repeat(fin.length);
  return `${fin.slice(0, 2)}***${fin.slice(5)}`;
}
