import { describe, expect, it } from "vitest";
import { formatIban, isValidIban, normalizeIban } from "./index";

// Canonical Azerbaijan IBAN example (Kapital Bank / NABZ).
const VALID = "AZ21NABZ00000000137010001944";

describe("isValidIban", () => {
  it("accepts a valid AZ IBAN", () => {
    expect(isValidIban(VALID)).toBe(true);
  });

  it("accepts a valid AZ IBAN written with spaces", () => {
    expect(isValidIban("AZ21 NABZ 0000 0000 1370 1000 1944")).toBe(true);
  });

  it("is case-insensitive", () => {
    expect(isValidIban(VALID.toLowerCase())).toBe(true);
  });

  it("rejects an IBAN with an invalid checksum", () => {
    expect(isValidIban("AZ22NABZ00000000137010001944")).toBe(false);
  });

  it("rejects a non-AZ IBAN", () => {
    expect(isValidIban("DE89370400440532013000")).toBe(false);
  });

  it("rejects a wrong length", () => {
    expect(isValidIban("AZ21NABZ001944")).toBe(false);
  });

  it("rejects a bank code that contains digits", () => {
    expect(isValidIban("AZ2100BZ00000000137010001944")).toBe(false);
  });

  it("rejects empty and non-string input", () => {
    expect(isValidIban("")).toBe(false);
    // @ts-expect-error runtime guard for untyped callers
    expect(isValidIban(null)).toBe(false);
  });
});

describe("formatIban", () => {
  it("groups characters into blocks of four", () => {
    expect(formatIban(VALID)).toBe("AZ21 NABZ 0000 0000 1370 1000 1944");
  });

  it("re-formats already-spaced input consistently", () => {
    expect(formatIban("AZ21 NABZ00000000137010001944")).toBe("AZ21 NABZ 0000 0000 1370 1000 1944");
  });
});

describe("normalizeIban", () => {
  it("strips whitespace and uppercases", () => {
    expect(normalizeIban("az21 nabz")).toBe("AZ21NABZ");
  });
});
