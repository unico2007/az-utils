import { describe, expect, it } from "vitest";
import { isSameDay } from "./index";

describe("isSameDay", () => {
  it("ignores the time of day", () => {
    expect(isSameDay(new Date(2026, 6, 20, 9), new Date(2026, 6, 20, 23))).toBe(true);
  });

  it("is false for different days or invalid input", () => {
    expect(isSameDay(new Date(2026, 6, 20), new Date(2026, 6, 21))).toBe(false);
    expect(isSameDay(new Date("x"), new Date(2026, 6, 20))).toBe(false);
  });
});
