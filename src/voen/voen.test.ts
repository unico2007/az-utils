import { describe, expect, it } from "vitest";
import { isValidVoen, normalizeVoen } from "./index";

describe("isValidVoen", () => {
  it("accepts a 10-digit VÖEN", () => {
    expect(isValidVoen("1234567890")).toBe(true);
  });

  it("accepts a VÖEN written with spaces", () => {
    expect(isValidVoen("12 3456 7890")).toBe(true);
  });

  it("rejects a wrong length", () => {
    expect(isValidVoen("123456789")).toBe(false);
    expect(isValidVoen("12345678901")).toBe(false);
  });

  it("rejects non-digit characters", () => {
    expect(isValidVoen("123456789A")).toBe(false);
    expect(isValidVoen("1234-56789")).toBe(false);
  });

  it("rejects empty and non-string input", () => {
    expect(isValidVoen("")).toBe(false);
    // @ts-expect-error runtime guard for untyped callers
    expect(isValidVoen(null)).toBe(false);
  });
});

describe("normalizeVoen", () => {
  it("strips all whitespace", () => {
    expect(normalizeVoen(" 12 3456 7890 ")).toBe("1234567890");
  });
});
