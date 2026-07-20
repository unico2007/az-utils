import { toLowerAz, toUpperAz } from "./case";

/**
 * Title-cases a string using Azerbaijani casing rules: the first letter of each
 * whitespace-separated word is uppercased (İ/ı-aware) and the rest lowercased.
 * Original spacing is preserved.
 *
 * @example
 * titleCaseAz("işıq gəncə")            // "İşıq Gəncə"
 * titleCaseAz("BAKI ŞƏHƏRİ")           // "Bakı Şəhəri"
 * titleCaseAz("azərbaycan respublikası") // "Azərbaycan Respublikası"
 */
export function titleCaseAz(input: string): string {
  if (typeof input !== "string") return "";
  return input
    .split(/(\s+)/)
    .map((token) =>
      token.trim() === "" ? token : toUpperAz(token.charAt(0)) + toLowerAz(token.slice(1)),
    )
    .join("");
}
