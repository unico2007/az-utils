// Azerbaijani letters mapped to their closest ASCII equivalent, preserving case.
const AZ_TO_ASCII: Record<string, string> = {
  ə: "e",
  Ə: "E",
  ç: "c",
  Ç: "C",
  ş: "s",
  Ş: "S",
  ğ: "g",
  Ğ: "G",
  ı: "i",
  İ: "I",
  ö: "o",
  Ö: "O",
  ü: "u",
  Ü: "U",
};

/**
 * Replaces Azerbaijani-specific letters with their closest ASCII equivalents,
 * preserving letter case and leaving all other characters (spaces, digits,
 * punctuation) untouched.
 *
 * @example
 * asciiFold("Şəhər")    // "Seher"
 * asciiFold("Naxçıvan") // "Naxcivan"
 * asciiFold("İnam")     // "Inam"
 */
export function asciiFold(input: string): string {
  if (typeof input !== "string") return "";
  return input.replace(/[əƏçÇşŞğĞıİöÖüÜ]/g, (ch) => AZ_TO_ASCII[ch] ?? ch);
}
