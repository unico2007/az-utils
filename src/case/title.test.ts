import { describe, expect, it } from "vitest";
import { titleCaseAz } from "./index";

describe("titleCaseAz", () => {
  it("capitalizes each word with Azerbaijani rules", () => {
    expect(titleCaseAz("işıq gəncə")).toBe("İşıq Gəncə");
    expect(titleCaseAz("azərbaycan respublikası")).toBe("Azərbaycan Respublikası");
  });

  it("lowercases the tail of all-caps input", () => {
    expect(titleCaseAz("BAKI ŞƏHƏRİ")).toBe("Bakı Şəhəri");
  });

  it("preserves the original spacing", () => {
    expect(titleCaseAz("  çox   söz  ")).toBe("  Çox   Söz  ");
  });

  it("returns an empty string for empty or non-string input", () => {
    expect(titleCaseAz("")).toBe("");
    // @ts-expect-error runtime guard for untyped callers
    expect(titleCaseAz(null)).toBe("");
  });
});
