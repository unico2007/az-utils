import { describe, expect, it } from "vitest";
import { isToday } from "./index";

describe("isToday", () => {
  it("compares against a reference date", () => {
    expect(isToday(new Date(2026, 6, 20), new Date(2026, 6, 20, 15))).toBe(true);
    expect(isToday(new Date(2026, 6, 19), new Date(2026, 6, 20))).toBe(false);
  });

  it("defaults the reference to now", () => {
    expect(isToday(new Date())).toBe(true);
  });

  it("is false for invalid input", () => {
    expect(isToday(new Date("x"), new Date(2026, 6, 20))).toBe(false);
  });
});
