import { normalizePhone } from "./validate";

/**
 * Builds a `tel:` link (E.164) for a valid Azerbaijani phone number, or returns
 * `null` for invalid input.
 *
 * @example
 * phoneToTelLink("0501234567") // "tel:+994501234567"
 */
export function phoneToTelLink(input: string): string | null {
  const e164 = normalizePhone(input);
  return e164 === null ? null : `tel:${e164}`;
}
