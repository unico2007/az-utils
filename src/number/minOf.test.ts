import { describe, expect, it } from "vitest";
import { minOf } from "./index";

describe("minOf", () => {
  it("returns the smallest value", () => {
    expect(minOf([3, 1, 2])).toBe(1);
    expect(minOf([-5, 0, 5])).toBe(-5);
  });

  it("returns NaN for empty or invalid input", () => {
    expect(minOf([])).toBeNaN();
    expect(minOf([1, Number.NaN])).toBeNaN();
    // @ts-expect-error runtime guard for untyped callers
    expect(minOf("1")).toBeNaN();
  });
});
