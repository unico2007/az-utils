import { describe, expect, it } from "vitest";
import { isLandlinePhone, isMobilePhone } from "./index";

describe("isMobilePhone", () => {
  it("recognises mobile prefixes", () => {
    expect(isMobilePhone("0501234567")).toBe(true);
    expect(isMobilePhone("+994771234567")).toBe(true);
  });

  it("is false for landlines and invalid input", () => {
    expect(isMobilePhone("0121234567")).toBe(false);
    expect(isMobilePhone("nope")).toBe(false);
  });
});

describe("isLandlinePhone", () => {
  it("recognises a valid non-mobile number", () => {
    expect(isLandlinePhone("0121234567")).toBe(true);
  });

  it("is false for mobiles and invalid input", () => {
    expect(isLandlinePhone("0501234567")).toBe(false);
    expect(isLandlinePhone("")).toBe(false);
  });
});
