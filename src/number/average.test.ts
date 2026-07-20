import { describe, expect, it } from "vitest";
import { average } from "./index";

describe("average", () => {
  it("computes the mean", () => {
    expect(average([1, 2, 3])).toBe(2);
    expect(average([10, 20])).toBe(15);
  });

  it("returns NaN for empty or invalid input", () => {
    expect(average([])).toBeNaN();
    expect(average([1, Number.NaN])).toBeNaN();
    // @ts-expect-error runtime guard for untyped callers
    expect(average("12")).toBeNaN();
  });
});
