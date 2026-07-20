import { describe, expect, it } from "vitest";
import { averageManat } from "./index";

describe("averageManat", () => {
  it("averages amounts to whole qəpik", () => {
    expect(averageManat([10, 20])).toBe(15);
    expect(averageManat([0.1, 0.2, 0.3])).toBe(0.2);
  });

  it("returns NaN for empty or invalid input", () => {
    expect(averageManat([])).toBeNaN();
    expect(averageManat([1, Number.NaN])).toBeNaN();
    // @ts-expect-error runtime guard for untyped callers
    expect(averageManat("1")).toBeNaN();
  });
});
