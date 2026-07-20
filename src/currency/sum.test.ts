import { describe, expect, it } from "vitest";
import { sumManat } from "./index";

describe("sumManat", () => {
  it("sums with qəpik precision", () => {
    expect(sumManat([0.1, 0.2])).toBe(0.3);
    expect(sumManat([1.5, 2.25])).toBe(3.75);
  });

  it("returns 0 for an empty array", () => {
    expect(sumManat([])).toBe(0);
  });

  it("returns NaN for invalid input", () => {
    expect(sumManat([1, Number.NaN])).toBeNaN();
    // @ts-expect-error runtime guard for untyped callers
    expect(sumManat("1")).toBeNaN();
  });
});
