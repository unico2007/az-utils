import { describe, expect, it } from "vitest";
import { parseSwift } from "./index";

describe("parseSwift", () => {
  it("splits an 8-character BIC", () => {
    expect(parseSwift("PAHAAZ22")).toEqual({
      bank: "PAHA",
      country: "AZ",
      location: "22",
      branch: null,
    });
  });

  it("splits an 11-character BIC with a branch code", () => {
    expect(parseSwift("AIIBAZ2XXXX")).toEqual({
      bank: "AIIB",
      country: "AZ",
      location: "2X",
      branch: "XXX",
    });
  });

  it("returns null for an invalid BIC", () => {
    expect(parseSwift("DEUTDEFF")).toBeNull();
    expect(parseSwift("")).toBeNull();
    // @ts-expect-error runtime guard for untyped callers
    expect(parseSwift(null)).toBeNull();
  });
});
