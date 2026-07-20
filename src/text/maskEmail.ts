/**
 * Masks the local part of an email address, keeping the first and last
 * characters visible. The domain is left intact. Non-email input is returned
 * unchanged.
 *
 * @example
 * maskEmail("orkhan@unico.az") // "o****n@unico.az"
 * maskEmail("ab@x.az")         // "a*@x.az"
 */
export function maskEmail(input: string): string {
  if (typeof input !== "string") return "";
  const at = input.indexOf("@");
  if (at <= 0 || at === input.length - 1) return input;

  const local = input.slice(0, at);
  const domain = input.slice(at);
  const first = local[0] ?? "";
  if (local.length <= 2) return `${first}*${domain}`;
  const last = local[local.length - 1] ?? "";
  return `${first}${"*".repeat(local.length - 2)}${last}${domain}`;
}
