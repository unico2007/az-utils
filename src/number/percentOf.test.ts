import { describe, expect, it } from "vitest";
import { percentOf } from "./index";

describe("percentOf", () => {
  it("computes the percentage", () => {
    expect(percentOf(25, 200)).toBe(12.5);
    expect(percentOf(1, 4)).toBe(25);
  });

  it("returns NaN for zero whole or invalid input", () => {
    expect(percentOf(5, 0)).toBeNaN();
    // @ts-expect-error runtime guard for untyped callers
    expect(percentOf("5", 10)).toBeNaN();
  });
});
