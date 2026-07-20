// Azerbaijani letters that have no ASCII equivalent, mapped to their closest
// ASCII form. Applied before lowercasing so the dotted/dotless İ/I pair is
// handled deterministically (JS `toLowerCase` is locale-independent and would
// otherwise turn "İ" into "i̇" with a combining dot).
const AZ_TO_ASCII: Record<string, string> = {
  ə: "e",
  Ə: "e",
  ç: "c",
  Ç: "c",
  ş: "s",
  Ş: "s",
  ğ: "g",
  Ğ: "g",
  ı: "i",
  I: "i",
  İ: "i",
  ö: "o",
  Ö: "o",
  ü: "u",
  Ü: "u",
};

/**
 * Converts an Azerbaijani string into a URL-friendly slug: lowercase ASCII with
 * words separated by single hyphens.
 *
 * Azerbaijani-specific letters are transliterated (ə→e, ş→s, ç→c, ğ→g, ı/İ→i,
 * ö→o, ü→u); every remaining run of non-alphanumeric characters collapses to a
 * single hyphen, and leading/trailing hyphens are trimmed.
 *
 * @example
 * slugify("Şəki şəhəri")        // "seki-seheri"
 * slugify("Bakı, Azərbaycan!")  // "baki-azerbaycan"
 */
export function slugify(input: string): string {
  if (typeof input !== "string") return "";
  return input
    .replace(/[əƏçÇşŞğĞıIİöÖüÜ]/g, (ch) => AZ_TO_ASCII[ch] ?? ch)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
