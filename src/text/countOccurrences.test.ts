import { describe, expect, it } from "vitest";
import { countOccurrences } from "./index";

describe("countOccurrences", () => {
  it("counts single-character needles", () => {
    expect(countOccurrences("banana", "a")).toBe(3);
  });

  it("counts non-overlapping multi-character needles", () => {
    expect(countOccurrences("aaaa", "aa")).toBe(2);
  });

  it("returns 0 when absent, empty, or invalid", () => {
    expect(countOccurrences("abc", "x")).toBe(0);
    expect(countOccurrences("abc", "")).toBe(0);
    // @ts-expect-error runtime guard for untyped callers
    expect(countOccurrences(null, "a")).toBe(0);
  });
});
