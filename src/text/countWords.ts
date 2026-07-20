/**
 * Counts whitespace-separated words in a string. Leading/trailing whitespace is
 * ignored; an empty or whitespace-only string counts as 0.
 *
 * @example
 * countWords("salam dünya")      // 2
 * countWords("  bir  iki üç  ")  // 3
 */
export function countWords(input: string): number {
  if (typeof input !== "string") return 0;
  const trimmed = input.trim();
  if (trimmed === "") return 0;
  return trimmed.split(/\s+/).length;
}
