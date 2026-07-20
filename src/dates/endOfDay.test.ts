import { describe, expect, it } from "vitest";
import { endOfDay } from "./index";

describe("endOfDay", () => {
  it("sets the time to the last millisecond", () => {
    expect(endOfDay(new Date(2026, 6, 20, 14, 30)).getTime()).toBe(
      new Date(2026, 6, 20, 23, 59, 59, 999).getTime(),
    );
  });

  it("returns an Invalid Date for invalid input", () => {
    expect(Number.isNaN(endOfDay(new Date("x")).getTime())).toBe(true);
  });
});
