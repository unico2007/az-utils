export interface ManatParts {
  /** Whole manat. */
  manat: number;
  /** Remaining qəpik (0–99). */
  qepik: number;
}

/**
 * Splits a manat amount into whole manat and qəpik. Returns `null` for negative
 * or non-finite input.
 *
 * @example
 * splitManatQepik(12.34) // { manat: 12, qepik: 34 }
 * splitManatQepik(5)     // { manat: 5, qepik: 0 }
 */
export function splitManatQepik(value: number): ManatParts | null {
  if (typeof value !== "number" || !Number.isFinite(value) || value < 0) return null;
  const totalQepik = Math.round(value * 100);
  return { manat: Math.floor(totalQepik / 100), qepik: totalQepik % 100 };
}
