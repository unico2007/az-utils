import { describe, expect, it } from "vitest";
import { getAge } from "./index";

describe("getAge", () => {
  it("counts completed years", () => {
    expect(getAge(new Date(2000, 0, 1), new Date(2026, 0, 1))).toBe(26);
    expect(getAge(new Date(1990, 6, 20), new Date(2026, 6, 20))).toBe(36);
  });

  it("does not count the current year before the birthday", () => {
    expect(getAge(new Date(2000, 5, 15), new Date(2026, 5, 14))).toBe(25);
    expect(getAge(new Date(2000, 5, 15), new Date(2026, 4, 30))).toBe(25);
  });

  it("returns NaN for invalid dates", () => {
    expect(getAge(new Date("x"), new Date(2026, 0, 1))).toBeNaN();
    // @ts-expect-error runtime guard for untyped callers
    expect(getAge("2000-01-01", new Date())).toBeNaN();
  });
});
