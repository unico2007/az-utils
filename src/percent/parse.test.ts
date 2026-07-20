import { describe, expect, it } from "vitest";
import { parsePercentAz } from "./index";

describe("parsePercentAz", () => {
  it("parses percents into ratios", () => {
    expect(parsePercentAz("50%")).toBe(0.5);
    expect(parsePercentAz("25%")).toBe(0.25);
    expect(parsePercentAz("100%")).toBe(1);
  });

  it("accepts a comma decimal", () => {
    expect(parsePercentAz("12,34%")).toBeCloseTo(0.1234, 10);
  });

  it("returns null for invalid input", () => {
    expect(parsePercentAz("abc")).toBeNull();
    expect(parsePercentAz("")).toBeNull();
    // @ts-expect-error runtime guard for untyped callers
    expect(parsePercentAz(null)).toBeNull();
  });
});
