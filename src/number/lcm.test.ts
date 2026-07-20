import { describe, expect, it } from "vitest";
import { lcm } from "./index";

describe("lcm", () => {
  it("computes the least common multiple", () => {
    expect(lcm(4, 6)).toBe(12);
    expect(lcm(3, 5)).toBe(15);
    expect(lcm(-4, 6)).toBe(12);
  });

  it("is 0 when either value is 0", () => {
    expect(lcm(0, 5)).toBe(0);
  });

  it("returns NaN for non-integers", () => {
    expect(lcm(1.5, 3)).toBeNaN();
    // @ts-expect-error runtime guard for untyped callers
    expect(lcm("4", 6)).toBeNaN();
  });
});
