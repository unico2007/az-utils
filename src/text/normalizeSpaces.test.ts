import { describe, expect, it } from "vitest";
import { normalizeSpaces } from "./index";

describe("normalizeSpaces", () => {
  it("collapses internal whitespace and trims", () => {
    expect(normalizeSpaces("  çox   söz  ")).toBe("çox söz");
    expect(normalizeSpaces("a\t\nb")).toBe("a b");
  });

  it("leaves already-clean text unchanged", () => {
    expect(normalizeSpaces("salam dünya")).toBe("salam dünya");
  });

  it("returns an empty string for empty or non-string input", () => {
    expect(normalizeSpaces("   ")).toBe("");
    expect(normalizeSpaces("")).toBe("");
    // @ts-expect-error runtime guard for untyped callers
    expect(normalizeSpaces(null)).toBe("");
  });
});
