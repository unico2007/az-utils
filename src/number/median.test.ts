import { describe, expect, it } from "vitest";
import { median } from "./index";

describe("median", () => {
  it("returns the middle value for odd counts", () => {
    expect(median([1, 2, 3])).toBe(2);
    expect(median([3, 1, 2])).toBe(2); // unsorted input
    expect(median([5])).toBe(5);
  });

  it("averages the two middle values for even counts", () => {
    expect(median([1, 2, 3, 4])).toBe(2.5);
  });

  it("returns NaN for empty or invalid input", () => {
    expect(median([])).toBeNaN();
    expect(median([1, Number.NaN])).toBeNaN();
    // @ts-expect-error runtime guard for untyped callers
    expect(median("1")).toBeNaN();
  });
});
