import { describe, expect, it } from "vitest";
import { range } from "./index";

describe("range", () => {
  it("builds an ascending range", () => {
    expect(range(0, 5)).toEqual([0, 1, 2, 3, 4]);
    expect(range(0, 10, 2)).toEqual([0, 2, 4, 6, 8]);
  });

  it("builds a descending range", () => {
    expect(range(5, 0, -1)).toEqual([5, 4, 3, 2, 1]);
  });

  it("returns [] for empty ranges or invalid input", () => {
    expect(range(0, 0)).toEqual([]);
    expect(range(0, 5, 0)).toEqual([]);
    // @ts-expect-error runtime guard for untyped callers
    expect(range("0", 5)).toEqual([]);
  });
});
