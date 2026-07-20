import { describe, expect, it } from "vitest";
import { areIbansEqual } from "./index";

const VALID = "AZ21NABZ00000000137010001944";

describe("areIbansEqual", () => {
  it("ignores spaces and case", () => {
    expect(areIbansEqual(VALID, "az21 nabz 0000 0000 1370 1000 1944")).toBe(true);
  });

  it("is false for different IBANs", () => {
    expect(areIbansEqual(VALID, "AZ96AZEB000000000000000000000")).toBe(false);
  });

  it("is false when either IBAN is invalid", () => {
    expect(areIbansEqual(VALID, "not an iban")).toBe(false);
  });
});
