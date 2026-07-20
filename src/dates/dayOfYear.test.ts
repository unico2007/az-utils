import { describe, expect, it } from "vitest";
import { dayOfYear } from "./index";

describe("dayOfYear", () => {
  it("counts from 1 on January 1", () => {
    expect(dayOfYear(new Date(2026, 0, 1))).toBe(1);
    expect(dayOfYear(new Date(2026, 1, 1))).toBe(32);
    expect(dayOfYear(new Date(2026, 11, 31))).toBe(365);
  });

  it("accounts for leap years", () => {
    expect(dayOfYear(new Date(2024, 11, 31))).toBe(366);
  });

  it("returns NaN for an invalid date", () => {
    expect(dayOfYear(new Date("x"))).toBeNaN();
  });
});
