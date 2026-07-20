import { describe, expect, it } from "vitest";
import { formatNumberAz, parseNumberAz } from "./index";

describe("parseNumberAz", () => {
  it("parses space-grouped, comma-decimal numbers", () => {
    expect(parseNumberAz("1 234,56")).toBe(1234.56);
    expect(parseNumberAz("1000")).toBe(1000);
    expect(parseNumberAz("-5,5")).toBe(-5.5);
  });

  it("round-trips with formatNumberAz", () => {
    expect(parseNumberAz(formatNumberAz(1234567.89))).toBe(1234567.89);
  });

  it("returns null for invalid input", () => {
    expect(parseNumberAz("abc")).toBeNull();
    expect(parseNumberAz("")).toBeNull();
    // @ts-expect-error runtime guard for untyped callers
    expect(parseNumberAz(null)).toBeNull();
  });
});
