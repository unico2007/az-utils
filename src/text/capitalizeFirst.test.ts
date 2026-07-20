import { describe, expect, it } from "vitest";
import { capitalizeFirstAz } from "./index";

describe("capitalizeFirstAz", () => {
  it("uppercases the first letter with Azerbaijani rules", () => {
    expect(capitalizeFirstAz("işıq")).toBe("İşıq");
    expect(capitalizeFirstAz("ısmarıc")).toBe("Ismarıc");
  });

  it("leaves the rest of the string unchanged", () => {
    expect(capitalizeFirstAz("salam dünya")).toBe("Salam dünya");
  });

  it("returns an empty string for empty or non-string input", () => {
    expect(capitalizeFirstAz("")).toBe("");
    // @ts-expect-error runtime guard for untyped callers
    expect(capitalizeFirstAz(null)).toBe("");
  });
});
