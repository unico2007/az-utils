import { numberToWordsAz } from "./words";

// 4-way vowel harmony for the ordinal suffix "-CI".
function suffixForVowel(v: string): string {
  if ("aı".includes(v)) return "cı";
  if ("eəi".includes(v)) return "ci";
  if ("ou".includes(v)) return "cu";
  if ("öü".includes(v)) return "cü";
  return "";
}

/**
 * Formats an integer as an abbreviated Azerbaijani ordinal, e.g. "3-cü". The
 * suffix follows vowel harmony based on the last vowel of the spoken number, so
 * it is derived from {@link numberToWordsAz}. Supports 0..999,999,999.
 *
 * @example
 * ordinalAz(1)   // "1-ci"
 * ordinalAz(3)   // "3-cü"
 * ordinalAz(6)   // "6-cı"
 * ordinalAz(100) // "100-cü"
 */
export function ordinalAz(n: number): string {
  if (!Number.isInteger(n) || n < 0 || n > 999_999_999) return "";
  const words = numberToWordsAz(n);
  const lastWord = words.split(" ").pop() ?? "";
  const vowels = lastWord.match(/[aıeəiouöü]/g);
  if (!vowels || vowels.length === 0) return "";
  const suffix = suffixForVowel(vowels[vowels.length - 1] ?? "");
  return `${n}-${suffix}`;
}
