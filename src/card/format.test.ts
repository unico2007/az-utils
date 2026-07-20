import { describe, expect, it } from "vitest";
import { formatCardNumber } from "./index";

describe("formatCardNumber", () => {
  it("groups digits in blocks of four", () => {
    expect(formatCardNumber("4111111111111111")).toBe("4111 1111 1111 1111");
  });

  it("ignores existing separators", () => {
    expect(formatCardNumber("4111-1111-1111-1111")).toBe("4111 1111 1111 1111");
  });

  it("handles a trailing partial group", () => {
    expect(formatCardNumber("378282246310005")).toBe("3782 8224 6310 005");
  });

  it("returns an empty string for empty or non-string input", () => {
    expect(formatCardNumber("")).toBe("");
    // @ts-expect-error runtime guard for untyped callers
    expect(formatCardNumber(null)).toBe("");
  });
});
