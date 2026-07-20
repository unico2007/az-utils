import { describe, expect, it } from "vitest";
import { slugify } from "./index";

describe("slugify", () => {
  it("transliterates Azerbaijani letters", () => {
    expect(slugify("Şəki şəhəri")).toBe("seki-seheri");
    expect(slugify("Gəncə")).toBe("gence");
  });

  it("lowercases and collapses separators", () => {
    expect(slugify("Bakı, Azərbaycan!")).toBe("baki-azerbaycan");
    expect(slugify("  Salam   Dünya  ")).toBe("salam-dunya");
  });

  it("handles the dotted/dotless I pair", () => {
    expect(slugify("İlqar")).toBe("ilqar");
    expect(slugify("Işıq")).toBe("isiq");
  });

  it("keeps digits", () => {
    expect(slugify("Mənzil 42")).toBe("menzil-42");
  });

  it("trims leading and trailing hyphens", () => {
    expect(slugify("!!!Salam!!!")).toBe("salam");
  });

  it("returns an empty string for empty or non-string input", () => {
    expect(slugify("")).toBe("");
    // @ts-expect-error runtime guard for untyped callers
    expect(slugify(null)).toBe("");
  });
});
