import { describe, expect, it } from "vitest";
import { isLeapYear } from "./index";

describe("isLeapYear", () => {
  it("follows the Gregorian rule", () => {
    expect(isLeapYear(2024)).toBe(true);
    expect(isLeapYear(2023)).toBe(false);
    expect(isLeapYear(2000)).toBe(true);
    expect(isLeapYear(1900)).toBe(false);
  });

  it("rejects non-integers", () => {
    expect(isLeapYear(2024.5)).toBe(false);
    // @ts-expect-error runtime guard for untyped callers
    expect(isLeapYear("2024")).toBe(false);
  });
});
