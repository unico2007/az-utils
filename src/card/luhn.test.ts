import { describe, expect, it } from "vitest";
import { isValidCardNumber } from "./index";

describe("isValidCardNumber", () => {
  it("accepts valid card numbers", () => {
    expect(isValidCardNumber("4111111111111111")).toBe(true); // Visa test
    expect(isValidCardNumber("5555555555554444")).toBe(true); // Mastercard test
    expect(isValidCardNumber("378282246310005")).toBe(true); // Amex test
  });

  it("ignores spaces and dashes", () => {
    expect(isValidCardNumber("4111 1111 1111 1111")).toBe(true);
    expect(isValidCardNumber("4111-1111-1111-1111")).toBe(true);
  });

  it("rejects numbers that fail the checksum", () => {
    expect(isValidCardNumber("4111111111111112")).toBe(false);
  });

  it("rejects the wrong length or non-digits", () => {
    expect(isValidCardNumber("41111111")).toBe(false);
    expect(isValidCardNumber("4111abcd1111111x")).toBe(false);
  });

  it("rejects empty and non-string input", () => {
    expect(isValidCardNumber("")).toBe(false);
    // @ts-expect-error runtime guard for untyped callers
    expect(isValidCardNumber(null)).toBe(false);
  });
});
