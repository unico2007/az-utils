import { describe, expect, it } from "vitest";
import { countWords } from "./index";

describe("countWords", () => {
  it("counts words separated by whitespace", () => {
    expect(countWords("salam dünya")).toBe(2);
    expect(countWords("  bir  iki üç  ")).toBe(3);
  });

  it("counts a single word", () => {
    expect(countWords("salam")).toBe(1);
  });

  it("returns 0 for empty, whitespace-only, or non-string input", () => {
    expect(countWords("")).toBe(0);
    expect(countWords("   ")).toBe(0);
    // @ts-expect-error runtime guard for untyped callers
    expect(countWords(null)).toBe(0);
  });
});
