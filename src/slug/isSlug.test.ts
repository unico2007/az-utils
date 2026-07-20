import { describe, expect, it } from "vitest";
import { isSlug, slugify } from "./index";

describe("isSlug", () => {
  it("accepts valid slugs", () => {
    expect(isSlug("seki-seheri")).toBe(true);
    expect(isSlug("baki2026")).toBe(true);
    expect(isSlug("abc")).toBe(true);
  });

  it("rejects invalid slugs", () => {
    expect(isSlug("Salam")).toBe(false);
    expect(isSlug("a--b")).toBe(false);
    expect(isSlug("-a")).toBe(false);
    expect(isSlug("a-")).toBe(false);
    expect(isSlug("")).toBe(false);
  });

  it("accepts the output of slugify", () => {
    expect(isSlug(slugify("Şəki şəhəri"))).toBe(true);
  });
});
