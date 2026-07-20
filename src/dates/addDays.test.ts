import { describe, expect, it } from "vitest";
import { addDays } from "./index";

describe("addDays", () => {
  it("moves across month boundaries", () => {
    expect(addDays(new Date(2026, 0, 31), 1).getTime()).toBe(new Date(2026, 1, 1).getTime());
    expect(addDays(new Date(2026, 0, 1), -1).getTime()).toBe(new Date(2025, 11, 31).getTime());
  });

  it("returns the same instant for 0", () => {
    expect(addDays(new Date(2026, 5, 15), 0).getTime()).toBe(new Date(2026, 5, 15).getTime());
  });

  it("returns an Invalid Date for invalid input", () => {
    expect(Number.isNaN(addDays(new Date("x"), 1).getTime())).toBe(true);
  });
});
