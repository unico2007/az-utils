import { describe, expect, it } from "vitest";
import { roundManat } from "./index";

describe("roundManat", () => {
  it("rounds to two decimals", () => {
    expect(roundManat(1.239)).toBe(1.24);
    expect(roundManat(1.234)).toBe(1.23);
  });

  it("leaves shorter values unchanged", () => {
    expect(roundManat(1.2)).toBe(1.2);
    expect(roundManat(5)).toBe(5);
  });

  it("returns NaN for invalid input", () => {
    expect(roundManat(Number.NaN)).toBeNaN();
    // @ts-expect-error runtime guard for untyped callers
    expect(roundManat("1")).toBeNaN();
  });
});
