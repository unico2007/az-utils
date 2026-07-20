import { describe, expect, it } from "vitest";
import { daysBetween } from "./index";

describe("daysBetween", () => {
  it("counts calendar days", () => {
    expect(daysBetween(new Date(2026, 0, 1), new Date(2026, 0, 5))).toBe(4);
    expect(daysBetween(new Date(2026, 0, 1), new Date(2026, 1, 1))).toBe(31);
  });

  it("is order-independent and ignores time of day", () => {
    expect(daysBetween(new Date(2026, 0, 5), new Date(2026, 0, 1))).toBe(4);
    expect(daysBetween(new Date(2026, 0, 1, 23, 59), new Date(2026, 0, 2, 0, 1))).toBe(1);
  });

  it("is 0 for the same day and for invalid input", () => {
    expect(daysBetween(new Date(2026, 0, 1), new Date(2026, 0, 1))).toBe(0);
    expect(daysBetween(new Date("x"), new Date(2026, 0, 1))).toBe(0);
  });
});
