import { describe, expect, it } from "vitest";
import { formatPercentAz } from "./index";

describe("formatPercentAz", () => {
  it("formats with a comma decimal and % suffix", () => {
    expect(formatPercentAz(0.1234, 2)).toBe("12,34%");
  });

  it("defaults to whole percents", () => {
    expect(formatPercentAz(0.5)).toBe("50%");
    expect(formatPercentAz(1)).toBe("100%");
  });

  it("returns an empty string for invalid input", () => {
    expect(formatPercentAz(Number.NaN)).toBe("");
    expect(formatPercentAz(0.5, -1)).toBe("");
    // @ts-expect-error runtime guard for untyped callers
    expect(formatPercentAz("0.5")).toBe("");
  });
});
