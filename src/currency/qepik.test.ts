import { describe, expect, it } from "vitest";
import { manatToQepik, qepikToManat } from "./index";

describe("manatToQepik", () => {
  it("converts manat to qəpik", () => {
    expect(manatToQepik(1.5)).toBe(150);
    expect(manatToQepik(0.01)).toBe(1);
    expect(manatToQepik(100)).toBe(10000);
  });

  it("returns NaN for invalid input", () => {
    expect(manatToQepik(Number.NaN)).toBeNaN();
    // @ts-expect-error runtime guard for untyped callers
    expect(manatToQepik("5")).toBeNaN();
  });
});

describe("qepikToManat", () => {
  it("converts qəpik to manat", () => {
    expect(qepikToManat(150)).toBe(1.5);
    expect(qepikToManat(1)).toBe(0.01);
  });

  it("round-trips with manatToQepik", () => {
    expect(qepikToManat(manatToQepik(2.5))).toBe(2.5);
  });
});
