import { describe, expect, it } from "vitest";
import { getCardLast4 } from "./index";

describe("getCardLast4", () => {
  it("returns the last four digits", () => {
    expect(getCardLast4("4111 1111 1111 1111")).toBe("1111");
    expect(getCardLast4("5555555555554444")).toBe("4444");
  });

  it("returns null when there are fewer than four digits", () => {
    expect(getCardLast4("12")).toBeNull();
    expect(getCardLast4("")).toBeNull();
    // @ts-expect-error runtime guard for untyped callers
    expect(getCardLast4(null)).toBeNull();
  });
});
