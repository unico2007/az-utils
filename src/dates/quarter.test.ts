import { describe, expect, it } from "vitest";
import { quarterOf } from "./index";

describe("quarterOf", () => {
  it("maps months to quarters", () => {
    expect(quarterOf(new Date(2026, 0, 15))).toBe(1); // Jan
    expect(quarterOf(new Date(2026, 2, 31))).toBe(1); // Mar
    expect(quarterOf(new Date(2026, 3, 1))).toBe(2); // Apr
    expect(quarterOf(new Date(2026, 8, 30))).toBe(3); // Sep
    expect(quarterOf(new Date(2026, 11, 1))).toBe(4); // Dec
  });

  it("returns NaN for an invalid date", () => {
    expect(quarterOf(new Date("x"))).toBeNaN();
    // @ts-expect-error runtime guard for untyped callers
    expect(quarterOf(42)).toBeNaN();
  });
});
