import { describe, expect, it } from "vitest";
import { isValidPostalCode, normalizePostalCode } from "./index";

describe("isValidPostalCode", () => {
  it("accepts an AZ-prefixed code", () => {
    expect(isValidPostalCode("AZ1000")).toBe(true);
  });

  it("accepts a bare four-digit code", () => {
    expect(isValidPostalCode("1000")).toBe(true);
  });

  it("is case- and whitespace-insensitive", () => {
    expect(isValidPostalCode("az 1000")).toBe(true);
  });

  it("rejects the wrong number of digits", () => {
    expect(isValidPostalCode("AZ123")).toBe(false);
    expect(isValidPostalCode("AZ12345")).toBe(false);
    expect(isValidPostalCode("12345")).toBe(false);
  });

  it("rejects empty and non-string input", () => {
    expect(isValidPostalCode("")).toBe(false);
    // @ts-expect-error runtime guard for untyped callers
    expect(isValidPostalCode(null)).toBe(false);
  });
});

describe("normalizePostalCode", () => {
  it("adds the AZ prefix to a bare code", () => {
    expect(normalizePostalCode("1000")).toBe("AZ1000");
  });

  it("leaves an already-prefixed code unchanged", () => {
    expect(normalizePostalCode("AZ1000")).toBe("AZ1000");
  });
});
