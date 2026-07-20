import { describe, expect, it } from "vitest";
import { isAzAlpha } from "./index";

describe("isAzAlpha", () => {
  it("accepts strings of only Azerbaijani letters", () => {
    expect(isAzAlpha("Azərbaycan")).toBe(true);
    expect(isAzAlpha("İşıqçı")).toBe(true);
  });

  it("rejects digits, spaces, punctuation and non-alphabet letters", () => {
    expect(isAzAlpha("Salam2")).toBe(false);
    expect(isAzAlpha("iki söz")).toBe(false);
    expect(isAzAlpha("wow")).toBe(false); // "w" is not Azerbaijani
    expect(isAzAlpha("")).toBe(false);
    // @ts-expect-error runtime guard for untyped callers
    expect(isAzAlpha(null)).toBe(false);
  });
});
