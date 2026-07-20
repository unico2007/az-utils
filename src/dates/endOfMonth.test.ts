import { describe, expect, it } from "vitest";
import { endOfMonth } from "./index";

describe("endOfMonth", () => {
  it("returns the last moment of the month", () => {
    expect(endOfMonth(new Date(2024, 1, 10)).getTime()).toBe(
      new Date(2024, 1, 29, 23, 59, 59, 999).getTime(),
    );
    expect(endOfMonth(new Date(2026, 3, 1)).getTime()).toBe(
      new Date(2026, 3, 30, 23, 59, 59, 999).getTime(),
    );
  });

  it("returns an Invalid Date for invalid input", () => {
    expect(Number.isNaN(endOfMonth(new Date("x")).getTime())).toBe(true);
  });
});
