/**
 * Truncates a string to at most `maxLength` characters, appending `suffix`
 * (default "…") when the text is shortened. The result — including the suffix —
 * never exceeds `maxLength`.
 *
 * @example
 * truncate("Salam dünya", 8)        // "Salam d…"
 * truncate("qısa", 10)              // "qısa"
 * truncate("uzun mətn", 6, "...")   // "uzu..."
 */
export function truncate(text: string, maxLength: number, suffix = "…"): string {
  if (typeof text !== "string") return "";
  if (!Number.isFinite(maxLength) || maxLength < 0) return text;
  if (text.length <= maxLength) return text;
  if (maxLength <= suffix.length) return suffix.slice(0, maxLength);
  return text.slice(0, maxLength - suffix.length) + suffix;
}
