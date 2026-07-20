import { describe, expect, it } from "vitest";
import { isOdd } from "./index";

describe("isOdd", () => {
  it("is true for odd integers", () => {
    expect(isOdd(3)).toBe(true);
    expect(isOdd(-3)).toBe(true);
  });

  it("is false for even integers and non-integers", () => {
    expect(isOdd(4)).toBe(false);
    expect(isOdd(0)).toBe(false);
    expect(isOdd(3.5)).toBe(false);
    // @ts-expect-error runtime guard for untyped callers
    expect(isOdd("3")).toBe(false);
  });
});
