/**
 * Returns `true` when a string is a valid slug: lowercase ASCII letters/digits
 * in hyphen-separated groups, with no leading, trailing or repeated hyphens.
 *
 * @example
 * isSlug("seki-seheri") // true
 * isSlug("Salam")       // false (uppercase)
 * isSlug("a--b")        // false (double hyphen)
 */
export function isSlug(input: string): boolean {
  if (typeof input !== "string") return false;
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(input);
}
