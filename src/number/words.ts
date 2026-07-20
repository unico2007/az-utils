const ONES = ["sıfır", "bir", "iki", "üç", "dörd", "beş", "altı", "yeddi", "səkkiz", "doqquz"];
const TENS = ["", "on", "iyirmi", "otuz", "qırx", "əlli", "altmış", "yetmiş", "səksən", "doxsan"];

const MAX = 999_999_999;

// Spells a number in 1..999.
function under1000(n: number): string {
  const parts: string[] = [];
  const h = Math.floor(n / 100);
  const rem = n % 100;
  if (h > 0) {
    // "yüz" and "iki yüz" — no leading "bir" for exactly one hundred.
    if (h > 1) parts.push(ONES[h] ?? "");
    parts.push("yüz");
  }
  const t = Math.floor(rem / 10);
  const o = rem % 10;
  if (t > 0) parts.push(TENS[t] ?? "");
  if (o > 0) parts.push(ONES[o] ?? "");
  return parts.join(" ");
}

/**
 * Spells an integer in Azerbaijani words. Supports 0 through 999,999,999 and
 * negatives (prefixed with "mənfi"). Returns "" for non-integers or values out
 * of range.
 *
 * Follows Azerbaijani conventions: "yüz" and "min" drop a leading "bir"
 * (100 → "yüz", 1000 → "min"), while "milyon" keeps it (1,000,000 → "bir milyon").
 *
 * @example
 * numberToWordsAz(0)       // "sıfır"
 * numberToWordsAz(234)     // "iki yüz otuz dörd"
 * numberToWordsAz(1000)    // "min"
 * numberToWordsAz(1234567) // "bir milyon iki yüz otuz dörd min beş yüz altmış yeddi"
 */
export function numberToWordsAz(value: number): string {
  if (typeof value !== "number" || !Number.isInteger(value)) return "";
  if (value === 0) return "sıfır";
  if (value < 0) return `mənfi ${numberToWordsAz(-value)}`;
  if (value > MAX) return "";

  const parts: string[] = [];
  const millions = Math.floor(value / 1_000_000);
  const thousands = Math.floor((value % 1_000_000) / 1000);
  const rest = value % 1000;

  if (millions > 0) {
    parts.push(under1000(millions), "milyon");
  }
  if (thousands > 0) {
    // "min" and "iki min" — no leading "bir" for exactly one thousand.
    if (thousands > 1) parts.push(under1000(thousands));
    parts.push("min");
  }
  if (rest > 0) {
    parts.push(under1000(rest));
  }
  return parts.join(" ");
}
