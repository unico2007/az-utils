import { describe, expect, it } from "vitest";
import { ibanCountryCode } from "./index";

describe("ibanCountryCode", () => {
  it("returns the leading country code", () => {
    expect(ibanCountryCode("AZ21NABZ00000000137010001944")).toBe("AZ");
    expect(ibanCountryCode("de89 3704 0044 0532 0130 00")).toBe("DE");
  });

  it("returns null when it doesn't start with two letters", () => {
    expect(ibanCountryCode("12AZ")).toBeNull();
    expect(ibanCountryCode("")).toBeNull();
    // @ts-expect-error runtime guard for untyped callers
    expect(ibanCountryCode(null)).toBeNull();
  });
});
