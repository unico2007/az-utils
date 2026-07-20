import { describe, expect, it } from "vitest";
import { isFuture } from "./index";

describe("isFuture", () => {
  it("compares against a reference date", () => {
    expect(isFuture(new Date(2030, 0, 1), new Date(2026, 0, 1))).toBe(true);
    expect(isFuture(new Date(2020, 0, 1), new Date(2026, 0, 1))).toBe(false);
  });

  it("is false for invalid input", () => {
    expect(isFuture(new Date("x"), new Date(2026, 0, 1))).toBe(false);
  });
});
