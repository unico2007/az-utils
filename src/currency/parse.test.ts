import { describe, expect, it } from "vitest";
import { formatManat, parseManat } from "./index";

describe("parseManat", () => {
  it("parses a fully formatted amount", () => {
    expect(parseManat("1 234,50 ₼")).toBe(1234.5);
  });

  it("parses plain and dot-decimal forms", () => {
    expect(parseManat("1000000")).toBe(1000000);
    expect(parseManat("1234.50")).toBe(1234.5);
  });

  it("parses negative amounts", () => {
    expect(parseManat("-5,50 ₼")).toBe(-5.5);
  });

  it("round-trips with formatManat", () => {
    expect(parseManat(formatManat(999.99))).toBe(999.99);
  });

  it("returns null for invalid input", () => {
    expect(parseManat("abc")).toBeNull();
    expect(parseManat("")).toBeNull();
    // @ts-expect-error runtime guard for untyped callers
    expect(parseManat(null)).toBeNull();
  });
});
