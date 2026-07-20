import { describe, expect, it } from "vitest";
import { isValidPhone, normalizePhone } from "./index";

describe("normalizePhone", () => {
  it("normalizes the national (0-prefixed) form", () => {
    expect(normalizePhone("0501234567")).toBe("+994501234567");
  });

  it("normalizes an already-international number with separators", () => {
    expect(normalizePhone("+994 (50) 123-45-67")).toBe("+994501234567");
  });

  it("normalizes a 994-prefixed number without +", () => {
    expect(normalizePhone("994551234567")).toBe("+994551234567");
  });

  it("normalizes a bare 9-digit national number", () => {
    expect(normalizePhone("701234567")).toBe("+994701234567");
  });

  it("returns null for wrong length", () => {
    expect(normalizePhone("12345")).toBeNull();
    expect(normalizePhone("05012345678")).toBeNull();
  });

  it("returns null when the national number starts with 0", () => {
    expect(normalizePhone("+994012345678")).toBeNull();
  });

  it("returns null for non-digit content", () => {
    expect(normalizePhone("050-ABC-4567")).toBeNull();
  });
});

describe("isValidPhone", () => {
  it("accepts common valid formats", () => {
    expect(isValidPhone("+994501234567")).toBe(true);
    expect(isValidPhone("055 123 45 67")).toBe(true);
    expect(isValidPhone("0771234567")).toBe(true);
  });

  it("rejects invalid input", () => {
    expect(isValidPhone("0000000000")).toBe(false);
    expect(isValidPhone("")).toBe(false);
    // @ts-expect-error runtime guard for untyped callers
    expect(isValidPhone(null)).toBe(false);
  });
});
