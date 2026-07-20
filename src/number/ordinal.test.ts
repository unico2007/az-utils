import { describe, expect, it } from "vitest";
import { ordinalAz } from "./index";

describe("ordinalAz", () => {
  it("applies the correct harmony suffix for single digits", () => {
    expect(ordinalAz(1)).toBe("1-ci");
    expect(ordinalAz(2)).toBe("2-ci");
    expect(ordinalAz(3)).toBe("3-cü");
    expect(ordinalAz(4)).toBe("4-cü");
    expect(ordinalAz(5)).toBe("5-ci");
    expect(ordinalAz(6)).toBe("6-cı");
    expect(ordinalAz(7)).toBe("7-ci");
    expect(ordinalAz(8)).toBe("8-ci");
    expect(ordinalAz(9)).toBe("9-cu");
  });

  it("works for round numbers", () => {
    expect(ordinalAz(10)).toBe("10-cu");
    expect(ordinalAz(20)).toBe("20-ci");
    expect(ordinalAz(40)).toBe("40-cı");
    expect(ordinalAz(100)).toBe("100-cü");
    expect(ordinalAz(1000)).toBe("1000-ci");
  });

  it("returns an empty string for invalid input", () => {
    expect(ordinalAz(-1)).toBe("");
    expect(ordinalAz(1.5)).toBe("");
    // @ts-expect-error runtime guard for untyped callers
    expect(ordinalAz("3")).toBe("");
  });
});
