import { describe, expect, it } from "vitest";
import { charCount } from "./index";

describe("charCount", () => {
  it("counts by code point", () => {
    expect(charCount("salam")).toBe(5);
    expect(charCount("əli")).toBe(3);
    expect(charCount("a b")).toBe(3);
  });

  it("returns 0 for empty or non-string input", () => {
    expect(charCount("")).toBe(0);
    // @ts-expect-error runtime guard for untyped callers
    expect(charCount(null)).toBe(0);
  });
});
