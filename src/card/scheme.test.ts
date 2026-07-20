import { describe, expect, it } from "vitest";
import { detectCardScheme } from "./index";

describe("detectCardScheme", () => {
  it("detects Visa", () => {
    expect(detectCardScheme("4111111111111111")).toBe("Visa");
  });

  it("detects Mastercard (5x and 2-series)", () => {
    expect(detectCardScheme("5555555555554444")).toBe("Mastercard");
    expect(detectCardScheme("2223000048400011")).toBe("Mastercard");
  });

  it("detects Amex", () => {
    expect(detectCardScheme("378282246310005")).toBe("Amex");
  });

  it("returns null for unknown schemes", () => {
    expect(detectCardScheme("6011111111111117")).toBeNull(); // Discover — not covered
  });

  it("returns null for malformed input", () => {
    expect(detectCardScheme("41")).toBeNull();
    expect(detectCardScheme("")).toBeNull();
    // @ts-expect-error runtime guard for untyped callers
    expect(detectCardScheme(null)).toBeNull();
  });
});
