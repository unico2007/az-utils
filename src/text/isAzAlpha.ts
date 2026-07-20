// The 32 letters of the Azerbaijani Latin alphabet (note: no "w").
const AZ_LETTERS = "abcçdeəfgğhxıijkqlmnoöprsştuüvyzABCÇDEƏFGĞHXIİJKQLMNOÖPRSŞTUÜVYZ";
const AZ_ALPHA = new RegExp(`^[${AZ_LETTERS}]+$`);

/**
 * Returns `true` when a string consists solely of Azerbaijani alphabet letters
 * (no spaces, digits or punctuation). An empty string is not considered alpha.
 *
 * @example
 * isAzAlpha("Azərbaycan") // true
 * isAzAlpha("Salam2")     // false
 * isAzAlpha("wow")        // false ("w" is not in the alphabet)
 */
export function isAzAlpha(input: string): boolean {
  if (typeof input !== "string" || input === "") return false;
  return AZ_ALPHA.test(input);
}
