import { describe, expect, it } from "vitest";
import { gcd } from "./index";

describe("gcd", () => {
  it("computes the greatest common divisor", () => {
    expect(gcd(12, 8)).toBe(4);
    expect(gcd(17, 5)).toBe(1);
    expect(gcd(0, 5)).toBe(5);
    expect(gcd(-12, 8)).toBe(4);
  });

  it("returns NaN for non-integers", () => {
    expect(gcd(1.5, 3)).toBeNaN();
    // @ts-expect-error runtime guard for untyped callers
    expect(gcd("12", 8)).toBeNaN();
  });
});
