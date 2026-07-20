import { describe, expect, it } from "vitest";
import { extractAccount, extractBankCode } from "./index";

const VALID = "AZ21NABZ00000000137010001944";

describe("extractBankCode", () => {
  it("returns the 4-letter bank code", () => {
    expect(extractBankCode(VALID)).toBe("NABZ");
  });

  it("works with spaces and lowercase", () => {
    expect(extractBankCode("az21 nabz 0000 0000 1370 1000 1944")).toBe("NABZ");
  });

  it("returns null for an invalid IBAN", () => {
    expect(extractBankCode("AZ22NABZ00000000137010001944")).toBeNull();
    expect(extractBankCode("not an iban")).toBeNull();
  });
});

describe("extractAccount", () => {
  it("returns the 20-character account part", () => {
    expect(extractAccount(VALID)).toBe("00000000137010001944");
    expect(extractAccount(VALID)).toHaveLength(20);
  });

  it("returns null for an invalid IBAN", () => {
    expect(extractAccount("AZ00")).toBeNull();
  });
});
