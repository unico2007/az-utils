import { describe, expect, it } from "vitest";
import { generateIban, isValidIban } from "./index";

describe("generateIban", () => {
  it("reconstructs a known IBAN with correct check digits", () => {
    expect(generateIban("NABZ", "00000000137010001944")).toBe("AZ21NABZ00000000137010001944");
  });

  it("produces IBANs that pass validation", () => {
    const iban = generateIban("ABCD", "12345678901234567890");
    expect(iban).not.toBeNull();
    expect(isValidIban(iban as string)).toBe(true);
  });

  it("lowercases input is accepted", () => {
    expect(generateIban("nabz", "00000000137010001944")).toBe("AZ21NABZ00000000137010001944");
  });

  it("returns null for malformed parts", () => {
    expect(generateIban("NAB", "00000000137010001944")).toBeNull(); // 3-letter bank
    expect(generateIban("NABZ", "123")).toBeNull(); // short account
    // @ts-expect-error runtime guard for untyped callers
    expect(generateIban(null, "x")).toBeNull();
  });
});
