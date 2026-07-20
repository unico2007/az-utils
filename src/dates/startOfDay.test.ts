import { describe, expect, it } from "vitest";
import { startOfDay } from "./index";

describe("startOfDay", () => {
  it("zeroes the time", () => {
    expect(startOfDay(new Date(2026, 6, 20, 14, 30, 15)).getTime()).toBe(
      new Date(2026, 6, 20, 0, 0, 0, 0).getTime(),
    );
  });

  it("returns an Invalid Date for invalid input", () => {
    expect(Number.isNaN(startOfDay(new Date("x")).getTime())).toBe(true);
    // @ts-expect-error runtime guard for untyped callers
    expect(Number.isNaN(startOfDay("2026").getTime())).toBe(true);
  });
});
