import { describe, expect, it } from "vitest";
import { formatTimeAz } from "./index";

describe("formatTimeAz", () => {
  it("formats and zero-pads the time", () => {
    expect(formatTimeAz(new Date(2026, 6, 20, 14, 30))).toBe("14:30");
    expect(formatTimeAz(new Date(2026, 6, 20, 9, 5))).toBe("09:05");
    expect(formatTimeAz(new Date(2026, 6, 20, 0, 0))).toBe("00:00");
  });

  it("returns an empty string for an invalid date", () => {
    expect(formatTimeAz(new Date("x"))).toBe("");
  });
});
