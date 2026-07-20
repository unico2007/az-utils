/**
 * Counts non-overlapping occurrences of `needle` in `haystack`. Returns 0 when
 * `needle` is empty or the input is not a string.
 *
 * @example
 * countOccurrences("banana", "a") // 3
 * countOccurrences("aaaa", "aa")  // 2 (non-overlapping)
 */
export function countOccurrences(haystack: string, needle: string): number {
  if (typeof haystack !== "string" || typeof needle !== "string" || needle === "") return 0;
  let count = 0;
  let pos = 0;
  for (;;) {
    const idx = haystack.indexOf(needle, pos);
    if (idx === -1) break;
    count += 1;
    pos = idx + needle.length;
  }
  return count;
}
