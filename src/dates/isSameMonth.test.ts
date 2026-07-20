import { describe, expect, it } from "vitest";
import { isSameMonth } from "./index";

describe("isSameMonth", () => {
  it("is true within the same month and year", () => {
    expect(isSameMonth(new Date(2026, 6, 1), new Date(2026, 6, 31))).toBe(true);
  });

  it("is false across months or years or for invalid input", () => {
    expect(isSameMonth(new Date(2026, 6, 1), new Date(2026, 7, 1))).toBe(false);
    expect(isSameMonth(new Date(2025, 6, 1), new Date(2026, 6, 1))).toBe(false);
    expect(isSameMonth(new Date("x"), new Date(2026, 6, 1))).toBe(false);
  });
});
