/**
 * Returns the age in completed years between `birthDate` and `referenceDate`
 * (defaults to now). Returns `NaN` for invalid dates.
 *
 * @example
 * getAge(new Date(2000, 0, 1), new Date(2026, 0, 1))  // 26
 * getAge(new Date(2000, 5, 15), new Date(2026, 5, 14)) // 25 (day before birthday)
 */
export function getAge(birthDate: Date, referenceDate: Date = new Date()): number {
  if (!(birthDate instanceof Date) || !(referenceDate instanceof Date)) return Number.NaN;
  if (Number.isNaN(birthDate.getTime()) || Number.isNaN(referenceDate.getTime())) return Number.NaN;

  let age = referenceDate.getFullYear() - birthDate.getFullYear();
  const monthDiff = referenceDate.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && referenceDate.getDate() < birthDate.getDate())) {
    age -= 1;
  }
  return age;
}
