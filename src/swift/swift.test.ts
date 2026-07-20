import { describe, expect, it } from "vitest";
import { isValidSwift, normalizeSwift } from "./index";

describe("isValidSwift", () => {
  it("accepts 8-character AZ BICs", () => {
    expect(isValidSwift("PAHAAZ22")).toBe(true);
    expect(isValidSwift("IBAZAZ2X")).toBe(true);
  });

  it("accepts 11-character BICs with a branch code", () => {
    expect(isValidSwift("AIIBAZ2XXXX")).toBe(true);
  });

  it("is case- and whitespace-insensitive", () => {
    expect(isValidSwift(" paha az22 ")).toBe(true);
  });

  it("rejects non-AZ country codes", () => {
    expect(isValidSwift("DEUTDEFF")).toBe(false);
  });

  it("rejects wrong lengths", () => {
    expect(isValidSwift("AIIB")).toBe(false);
    expect(isValidSwift("PAHAAZ2")).toBe(false);
    expect(isValidSwift("PAHAAZ22X")).toBe(false);
  });

  it("rejects empty and non-string input", () => {
    expect(isValidSwift("")).toBe(false);
    // @ts-expect-error runtime guard for untyped callers
    expect(isValidSwift(null)).toBe(false);
  });
});

describe("normalizeSwift", () => {
  it("strips whitespace and uppercases", () => {
    expect(normalizeSwift(" paha az22 ")).toBe("PAHAAZ22");
  });
});
