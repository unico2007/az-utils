import { describe, expect, it } from "vitest";
import { sum } from "./index";

describe("sum", () => {
  it("adds up the values", () => {
    expect(sum([1, 2, 3])).toBe(6);
    expect(sum([-1, 1])).toBe(0);
  });

  it("returns 0 for an empty array", () => {
    expect(sum([])).toBe(0);
  });

  it("returns NaN for invalid input", () => {
    expect(sum([1, Number.NaN])).toBeNaN();
    // @ts-expect-error runtime guard for untyped callers
    expect(sum("123")).toBeNaN();
  });
});
