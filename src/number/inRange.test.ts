import { describe, expect, it } from "vitest";
import { inRange } from "./index";

describe("inRange", () => {
  it("is inclusive of the bounds", () => {
    expect(inRange(5, 0, 10)).toBe(true);
    expect(inRange(0, 0, 10)).toBe(true);
    expect(inRange(10, 0, 10)).toBe(true);
  });

  it("is false outside the range or for bad input", () => {
    expect(inRange(11, 0, 10)).toBe(false);
    expect(inRange(-1, 0, 10)).toBe(false);
    expect(inRange(5, 10, 0)).toBe(false);
    // @ts-expect-error runtime guard for untyped callers
    expect(inRange("5", 0, 10)).toBe(false);
  });
});
