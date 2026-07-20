import { describe, expect, it } from "vitest";
import { phoneToTelLink } from "./index";

describe("phoneToTelLink", () => {
  it("builds a tel: link from a valid number", () => {
    expect(phoneToTelLink("0501234567")).toBe("tel:+994501234567");
    expect(phoneToTelLink("+994 55 123 45 67")).toBe("tel:+994551234567");
  });

  it("returns null for invalid input", () => {
    expect(phoneToTelLink("nope")).toBeNull();
    expect(phoneToTelLink("")).toBeNull();
  });
});
