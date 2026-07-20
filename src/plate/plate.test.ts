import { describe, expect, it } from "vitest";
import { isValidPlate, normalizePlate } from "./index";

describe("isValidPlate", () => {
  it("accepts the dashed NN-LL-NNN format", () => {
    expect(isValidPlate("10-AB-123")).toBe(true);
  });

  it("accepts the compact and lowercase forms", () => {
    expect(isValidPlate("10AB123")).toBe(true);
    expect(isValidPlate("90zz999")).toBe(true);
  });

  it("rejects an out-of-range region code", () => {
    expect(isValidPlate("00-AB-123")).toBe(false);
  });

  it("rejects structural errors", () => {
    expect(isValidPlate("1-AB-123")).toBe(false); // one region digit
    expect(isValidPlate("10-A1-123")).toBe(false); // digit in letter block
    expect(isValidPlate("10-ABC-123")).toBe(false); // three letters
    expect(isValidPlate("10-AB-12")).toBe(false); // two serial digits
  });

  it("rejects empty and non-string input", () => {
    expect(isValidPlate("")).toBe(false);
    // @ts-expect-error runtime guard for untyped callers
    expect(isValidPlate(null)).toBe(false);
  });
});

describe("normalizePlate", () => {
  it("strips separators and uppercases", () => {
    expect(normalizePlate("10-ab-123")).toBe("10AB123");
  });
});
