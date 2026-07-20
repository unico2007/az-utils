import { describe, expect, it } from "vitest";
import { monthsBetween } from "./index";

describe("monthsBetween", () => {
  it("counts whole months", () => {
    expect(monthsBetween(new Date(2026, 0, 15), new Date(2026, 2, 15))).toBe(2);
    expect(monthsBetween(new Date(2025, 0, 1), new Date(2026, 0, 1))).toBe(12);
  });

  it("does not count a partial month", () => {
    expect(monthsBetween(new Date(2026, 0, 15), new Date(2026, 2, 14))).toBe(1);
  });

  it("is order-independent and 0 for the same date or invalid input", () => {
    expect(monthsBetween(new Date(2026, 2, 15), new Date(2026, 0, 15))).toBe(2);
    expect(monthsBetween(new Date(2026, 0, 15), new Date(2026, 0, 15))).toBe(0);
    expect(monthsBetween(new Date("x"), new Date(2026, 0, 1))).toBe(0);
  });
});
