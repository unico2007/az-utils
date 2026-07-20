import { describe, expect, it } from "vitest";
import { maskIban } from "./index";

describe("maskIban", () => {
  it("keeps the first and last four characters", () => {
    expect(maskIban("AZ21NABZ00000000137010001944")).toBe("AZ21********************1944");
  });

  it("ignores spaces and case", () => {
    expect(maskIban("az21 nabz 0000 0000 1370 1000 1944")).toBe("AZ21********************1944");
  });

  it("masks short strings entirely", () => {
    expect(maskIban("AZ21")).toBe("****");
    expect(maskIban("")).toBe("");
    // @ts-expect-error runtime guard for untyped callers
    expect(maskIban(null)).toBe("");
  });
});
