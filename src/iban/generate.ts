// ISO 7064 MOD-97-10 over an already letter-expandable string.
function mod97(s: string): number {
  let remainder = 0;
  for (let i = 0; i < s.length; i++) {
    const code = s.charCodeAt(i);
    let value: number;
    if (code >= 48 && code <= 57) value = code - 48;
    else if (code >= 65 && code <= 90) value = code - 55;
    else return Number.NaN;
    remainder = value > 9 ? (remainder * 100 + value) % 97 : (remainder * 10 + value) % 97;
  }
  return remainder;
}

/**
 * Builds a valid Azerbaijani IBAN from a 4-letter bank code and a 20-character
 * account identifier, computing the ISO 7064 check digits. Returns `null` when
 * the parts don't match the required shape.
 *
 * @example
 * generateIban("NABZ", "00000000137010001944") // "AZ21NABZ00000000137010001944"
 */
export function generateIban(bankCode: string, account: string): string | null {
  if (typeof bankCode !== "string" || typeof account !== "string") return null;
  const bank = bankCode.toUpperCase();
  const acc = account.toUpperCase();
  if (!/^[A-Z]{4}$/.test(bank) || !/^[0-9A-Z]{20}$/.test(acc)) return null;

  const check = 98 - mod97(`${bank}${acc}AZ00`);
  const cc = check < 10 ? `0${check}` : String(check);
  return `AZ${cc}${bank}${acc}`;
}
