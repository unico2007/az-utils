import { describe, expect, it } from "vitest";
import { formatDateAz, MONTH_NAMES_AZ } from "./index";

describe("MONTH_NAMES_AZ", () => {
  it("has 12 months starting at January", () => {
    expect(MONTH_NAMES_AZ).toHaveLength(12);
    expect(MONTH_NAMES_AZ[0]).toBe("yanvar");
    expect(MONTH_NAMES_AZ[11]).toBe("dekabr");
  });
});

describe("formatDateAz", () => {
  it("formats a date as day month year", () => {
    expect(formatDateAz(new Date(2026, 6, 20))).toBe("20 iyul 2026");
    expect(formatDateAz(new Date(2000, 0, 1))).toBe("1 yanvar 2000");
    expect(formatDateAz(new Date(1999, 11, 31))).toBe("31 dekabr 1999");
  });

  it("returns an empty string for an invalid date", () => {
    expect(formatDateAz(new Date("nonsense"))).toBe("");
    // @ts-expect-error runtime guard for untyped callers
    expect(formatDateAz("2026-07-20")).toBe("");
  });
});
