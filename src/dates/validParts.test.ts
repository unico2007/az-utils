import { describe, expect, it } from "vitest";
import { isValidDateParts } from "./index";

describe("isValidDateParts", () => {
  it("accepts real dates", () => {
    expect(isValidDateParts(2026, 7, 20)).toBe(true);
    expect(isValidDateParts(2024, 2, 29)).toBe(true); // leap year
  });

  it("rejects impossible dates", () => {
    expect(isValidDateParts(2023, 2, 29)).toBe(false); // not a leap year
    expect(isValidDateParts(2026, 4, 31)).toBe(false); // April has 30 days
    expect(isValidDateParts(2026, 13, 1)).toBe(false); // no month 13
    expect(isValidDateParts(2026, 0, 10)).toBe(false); // no month 0
  });

  it("rejects non-integer input", () => {
    expect(isValidDateParts(2026, 7.5, 20)).toBe(false);
    // @ts-expect-error runtime guard for untyped callers
    expect(isValidDateParts("2026", 7, 20)).toBe(false);
  });
});
