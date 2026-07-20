import { describe, expect, it } from "vitest";
import { startOfMonth } from "./index";

describe("startOfMonth", () => {
  it("returns midnight on the first of the month", () => {
    expect(startOfMonth(new Date(2026, 6, 20, 14, 30)).getTime()).toBe(
      new Date(2026, 6, 1, 0, 0, 0, 0).getTime(),
    );
  });

  it("returns an Invalid Date for invalid input", () => {
    expect(Number.isNaN(startOfMonth(new Date("x")).getTime())).toBe(true);
    // @ts-expect-error runtime guard for untyped callers
    expect(Number.isNaN(startOfMonth("2026").getTime())).toBe(true);
  });
});
