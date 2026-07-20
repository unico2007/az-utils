import { describe, expect, it } from "vitest";
import { asciiFold } from "./index";

describe("asciiFold", () => {
  it("folds Azerbaijani letters to ASCII", () => {
    expect(asciiFold("Şəhər")).toBe("Seher");
    expect(asciiFold("Naxçıvan")).toBe("Naxcivan");
    expect(asciiFold("Gəncə")).toBe("Gence");
  });

  it("preserves case", () => {
    expect(asciiFold("İnam")).toBe("Inam");
    expect(asciiFold("ÜZÜM")).toBe("UZUM");
  });

  it("leaves spaces, digits and punctuation untouched", () => {
    expect(asciiFold("Bakı, 2026!")).toBe("Baki, 2026!");
    expect(asciiFold("ABC-123")).toBe("ABC-123");
  });

  it("returns an empty string for non-string input", () => {
    expect(asciiFold("")).toBe("");
    // @ts-expect-error runtime guard for untyped callers
    expect(asciiFold(null)).toBe("");
  });
});
