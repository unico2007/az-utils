import { describe, expect, it } from "vitest";
import { formatManat } from "./index";

describe("formatManat", () => {
  it("formats with two fraction digits and the manat symbol", () => {
    expect(formatManat(1234.5)).toBe("1 234,50 ₼");
  });

  it("groups thousands with spaces", () => {
    expect(formatManat(1000000)).toBe("1 000 000,00 ₼");
  });

  it("formats small and zero values", () => {
    expect(formatManat(5)).toBe("5,00 ₼");
    expect(formatManat(0)).toBe("0,00 ₼");
  });

  it("handles negative amounts", () => {
    expect(formatManat(-5.5)).toBe("-5,50 ₼");
  });

  it("returns an empty string for invalid input", () => {
    expect(formatManat(Number.NaN)).toBe("");
    // @ts-expect-error runtime guard for untyped callers
    expect(formatManat("10")).toBe("");
  });
});
