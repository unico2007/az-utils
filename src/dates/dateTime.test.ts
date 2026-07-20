import { describe, expect, it } from "vitest";
import { formatDateTimeAz } from "./index";

describe("formatDateTimeAz", () => {
  it("formats date and time in Azerbaijani", () => {
    expect(formatDateTimeAz(new Date(2026, 6, 20, 14, 30))).toBe("20 iyul 2026, 14:30");
  });

  it("zero-pads the time", () => {
    expect(formatDateTimeAz(new Date(2026, 0, 5, 9, 5))).toBe("5 yanvar 2026, 09:05");
    expect(formatDateTimeAz(new Date(2026, 11, 31, 0, 0))).toBe("31 dekabr 2026, 00:00");
  });

  it("returns an empty string for an invalid date", () => {
    expect(formatDateTimeAz(new Date("x"))).toBe("");
    // @ts-expect-error runtime guard for untyped callers
    expect(formatDateTimeAz("2026")).toBe("");
  });
});
