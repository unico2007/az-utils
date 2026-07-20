import { describe, expect, it } from "vitest";
import { formatDateShortAz, parseDateShortAz } from "./index";

describe("parseDateShortAz", () => {
  it("parses a valid short date", () => {
    expect(parseDateShortAz("20.07.2026")?.getTime()).toBe(new Date(2026, 6, 20).getTime());
    expect(parseDateShortAz("5.1.2026")?.getTime()).toBe(new Date(2026, 0, 5).getTime());
  });

  it("round-trips with formatDateShortAz", () => {
    const d = new Date(2024, 1, 29);
    expect(parseDateShortAz(formatDateShortAz(d))?.getTime()).toBe(d.getTime());
  });

  it("returns null for malformed or impossible dates", () => {
    expect(parseDateShortAz("29.02.2023")).toBeNull();
    expect(parseDateShortAz("2026-07-20")).toBeNull();
    expect(parseDateShortAz("abc")).toBeNull();
    // @ts-expect-error runtime guard for untyped callers
    expect(parseDateShortAz(null)).toBeNull();
  });
});
