import { describe, expect, it } from "vitest";
import { formatDateShortAz } from "./index";

describe("formatDateShortAz", () => {
  it("formats as DD.MM.YYYY with zero-padding", () => {
    expect(formatDateShortAz(new Date(2026, 6, 20))).toBe("20.07.2026");
    expect(formatDateShortAz(new Date(2026, 0, 5))).toBe("05.01.2026");
  });

  it("returns an empty string for an invalid date", () => {
    expect(formatDateShortAz(new Date("x"))).toBe("");
    // @ts-expect-error runtime guard for untyped callers
    expect(formatDateShortAz("2026")).toBe("");
  });
});
