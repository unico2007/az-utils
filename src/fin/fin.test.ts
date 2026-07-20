import { describe, expect, it } from "vitest";
import { isValidFin, normalizeFin } from "./index";

describe("isValidFin", () => {
  it("accepts a 7-character alphanumeric FIN", () => {
    expect(isValidFin("1ABC2DE")).toBe(true);
    expect(isValidFin("5XN7BQ2")).toBe(true);
  });

  it("is case-insensitive", () => {
    expect(isValidFin("1abc2de")).toBe(true);
  });

  it("trims surrounding whitespace", () => {
    expect(isValidFin("  1ABC2DE  ")).toBe(true);
  });

  it("rejects a wrong length", () => {
    expect(isValidFin("1ABC2D")).toBe(false);
    expect(isValidFin("1ABC2DEF")).toBe(false);
  });

  it("rejects non-alphanumeric characters", () => {
    expect(isValidFin("1ABC-DE")).toBe(false);
    expect(isValidFin("1ABC DE")).toBe(false);
  });

  it("rejects empty and non-string input", () => {
    expect(isValidFin("")).toBe(false);
    // @ts-expect-error runtime guard for untyped callers
    expect(isValidFin(undefined)).toBe(false);
  });
});

describe("normalizeFin", () => {
  it("uppercases and trims", () => {
    expect(normalizeFin("  1abc2de ")).toBe("1ABC2DE");
  });
});
