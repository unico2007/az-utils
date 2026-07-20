import { describe, expect, it } from "vitest";
import { addYears } from "./index";

describe("addYears", () => {
  it("shifts the year", () => {
    expect(addYears(new Date(2026, 6, 20), 2).getTime()).toBe(new Date(2028, 6, 20).getTime());
    expect(addYears(new Date(2026, 0, 1), -1).getTime()).toBe(new Date(2025, 0, 1).getTime());
  });

  it("clamps Feb 29 to Feb 28 in non-leap target years", () => {
    expect(addYears(new Date(2024, 1, 29), 1).getTime()).toBe(new Date(2025, 1, 28).getTime());
  });

  it("returns an Invalid Date for invalid input", () => {
    expect(Number.isNaN(addYears(new Date("x"), 1).getTime())).toBe(true);
  });
});
