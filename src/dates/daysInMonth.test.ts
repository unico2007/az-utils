import { describe, expect, it } from "vitest";
import { daysInMonth } from "./index";

describe("daysInMonth", () => {
  it("returns the correct day count", () => {
    expect(daysInMonth(2024, 2)).toBe(29);
    expect(daysInMonth(2023, 2)).toBe(28);
    expect(daysInMonth(2024, 4)).toBe(30);
    expect(daysInMonth(2024, 1)).toBe(31);
  });

  it("returns NaN for invalid input", () => {
    expect(daysInMonth(2024, 0)).toBeNaN();
    expect(daysInMonth(2024, 13)).toBeNaN();
    // @ts-expect-error runtime guard for untyped callers
    expect(daysInMonth("2024", 2)).toBeNaN();
  });
});
