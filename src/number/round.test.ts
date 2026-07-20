import { describe, expect, it } from "vitest";
import { roundTo } from "./index";

describe("roundTo", () => {
  it("rounds to the given decimals", () => {
    expect(roundTo(1.2345, 2)).toBe(1.23);
    expect(roundTo(1234.5678, 1)).toBe(1234.6);
  });

  it("defaults to whole numbers", () => {
    expect(roundTo(2.5)).toBe(3);
    expect(roundTo(2.4)).toBe(2);
  });

  it("returns NaN for invalid input", () => {
    expect(roundTo(Number.NaN, 2)).toBeNaN();
    expect(roundTo(1.5, -1)).toBeNaN();
    // @ts-expect-error runtime guard for untyped callers
    expect(roundTo("1", 2)).toBeNaN();
  });
});
