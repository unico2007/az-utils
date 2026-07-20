import { describe, expect, it } from "vitest";
import { isBlank } from "./index";

describe("isBlank", () => {
  it("is true for empty or whitespace-only strings", () => {
    expect(isBlank("")).toBe(true);
    expect(isBlank("   ")).toBe(true);
    expect(isBlank("\t\n")).toBe(true);
  });

  it("is true for non-strings", () => {
    expect(isBlank(null)).toBe(true);
    expect(isBlank(undefined)).toBe(true);
    expect(isBlank(42)).toBe(true);
  });

  it("is false for strings with content", () => {
    expect(isBlank("salam")).toBe(false);
    expect(isBlank("  x  ")).toBe(false);
  });
});
