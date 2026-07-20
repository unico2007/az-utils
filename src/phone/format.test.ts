import { describe, expect, it } from "vitest";
import { formatPhoneInternational, formatPhoneNational } from "./index";

describe("formatPhoneInternational", () => {
  it("formats to +994 XX XXX XX XX", () => {
    expect(formatPhoneInternational("0501234567")).toBe("+994 50 123 45 67");
    expect(formatPhoneInternational("+994551234567")).toBe("+994 55 123 45 67");
  });

  it("returns null for invalid input", () => {
    expect(formatPhoneInternational("123")).toBeNull();
  });
});

describe("formatPhoneNational", () => {
  it("formats to 0XX XXX XX XX", () => {
    expect(formatPhoneNational("+994501234567")).toBe("050 123 45 67");
    expect(formatPhoneNational("0771234567")).toBe("077 123 45 67");
  });

  it("returns null for invalid input", () => {
    expect(formatPhoneNational("not a phone")).toBeNull();
  });
});
