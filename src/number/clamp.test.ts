import { describe, expect, it } from "vitest";
import { clamp } from "./index";

describe("clamp", () => {
  it("constrains to the range", () => {
    expect(clamp(15, 0, 10)).toBe(10);
    expect(clamp(-3, 0, 10)).toBe(0);
    expect(clamp(5, 0, 10)).toBe(5);
  });

  it("returns NaN for invalid input or inverted bounds", () => {
    expect(clamp(5, 10, 0)).toBeNaN();
    expect(clamp(Number.NaN, 0, 10)).toBeNaN();
    // @ts-expect-error runtime guard for untyped callers
    expect(clamp("5", 0, 10)).toBeNaN();
  });
});
