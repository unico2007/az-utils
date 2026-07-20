import { describe, expect, it } from "vitest";
import { maxOf } from "./index";

describe("maxOf", () => {
  it("returns the largest value", () => {
    expect(maxOf([3, 1, 2])).toBe(3);
    expect(maxOf([-5, 0, 5])).toBe(5);
  });

  it("returns NaN for empty or invalid input", () => {
    expect(maxOf([])).toBeNaN();
    expect(maxOf([1, Number.NaN])).toBeNaN();
    // @ts-expect-error runtime guard for untyped callers
    expect(maxOf("1")).toBeNaN();
  });
});
