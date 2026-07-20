import { describe, expect, it } from "vitest";
import { isEven } from "./index";

describe("isEven", () => {
  it("is true for even integers", () => {
    expect(isEven(4)).toBe(true);
    expect(isEven(0)).toBe(true);
    expect(isEven(-2)).toBe(true);
  });

  it("is false for odd integers and non-integers", () => {
    expect(isEven(3)).toBe(false);
    expect(isEven(2.5)).toBe(false);
    // @ts-expect-error runtime guard for untyped callers
    expect(isEven("4")).toBe(false);
  });
});
