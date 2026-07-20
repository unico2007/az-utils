import { describe, expect, it } from "vitest";
import { formatNumberAz } from "./index";

describe("formatNumberAz", () => {
  it("groups thousands with spaces and uses a comma decimal", () => {
    expect(formatNumberAz(1234567.89)).toBe("1 234 567,89");
  });

  it("groups an integer", () => {
    expect(formatNumberAz(1000)).toBe("1 000");
    expect(formatNumberAz(999)).toBe("999");
  });

  it("respects an explicit fractionDigits", () => {
    expect(formatNumberAz(1234.5, 2)).toBe("1 234,50");
    expect(formatNumberAz(2, 3)).toBe("2,000");
  });

  it("handles negative numbers", () => {
    expect(formatNumberAz(-1234.5, 2)).toBe("-1 234,50");
  });

  it("returns an empty string for invalid input", () => {
    expect(formatNumberAz(Number.NaN)).toBe("");
    expect(formatNumberAz(Number.POSITIVE_INFINITY)).toBe("");
    // @ts-expect-error runtime guard for untyped callers
    expect(formatNumberAz("5")).toBe("");
  });
});
