import { describe, expect, it } from "vitest";
import { arePhonesEqual } from "./index";

describe("arePhonesEqual", () => {
  it("treats different formats of the same number as equal", () => {
    expect(arePhonesEqual("0501234567", "+994 50 123 45 67")).toBe(true);
    expect(arePhonesEqual("994501234567", "0501234567")).toBe(true);
  });

  it("is false for different numbers", () => {
    expect(arePhonesEqual("0501234567", "0501234568")).toBe(false);
  });

  it("is false when either number is invalid", () => {
    expect(arePhonesEqual("0501234567", "nope")).toBe(false);
    expect(arePhonesEqual("bad", "bad")).toBe(false);
  });
});
