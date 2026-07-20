import { describe, expect, it } from "vitest";
import { splitManatQepik } from "./index";

describe("splitManatQepik", () => {
  it("splits into manat and qəpik", () => {
    expect(splitManatQepik(12.34)).toEqual({ manat: 12, qepik: 34 });
    expect(splitManatQepik(0.99)).toEqual({ manat: 0, qepik: 99 });
  });

  it("handles whole amounts", () => {
    expect(splitManatQepik(5)).toEqual({ manat: 5, qepik: 0 });
  });

  it("returns null for negative or invalid input", () => {
    expect(splitManatQepik(-1)).toBeNull();
    expect(splitManatQepik(Number.NaN)).toBeNull();
    // @ts-expect-error runtime guard for untyped callers
    expect(splitManatQepik("5")).toBeNull();
  });
});
