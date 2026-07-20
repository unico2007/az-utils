# az-utils

> Azerbaijan-specific validators, formatters and utilities for Node.js and the browser.
> _Azərbaycana aid validatorlar, formatlayıcılar və köməkçi funksiyalar._

[![CI](https://github.com/unico2007/az-utils/actions/workflows/ci.yml/badge.svg)](https://github.com/unico2007/az-utils/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)

Azerbaijani developers re-implement the same validators over and over — FIN codes,
tax IDs (VÖEN), local IBANs, `+994` phone numbers, Latin transliteration, manat
formatting. **az-utils** collects them into one small, dependency-free, fully-typed
and thoroughly-tested library.

- 🇦🇿 **Locale-first** — built specifically for Azerbaijan's formats.
- 📦 **Zero dependencies** — tree-shakeable ESM + CJS, ships with types.
- ✅ **Tested** — 340+ tests; every function is covered.
- 🧩 **Consistent API** — validators return booleans, `normalize*`/`format*`
  return strings, parsers/extractors return the value or `null`.

---

## Install

```bash
npm install az-utils
```

## Quick start

```ts
import {
  isValidIban,
  formatManat,
  numberToWordsAz,
  normalizePhone,
  toUpperAz,
} from "az-utils";

isValidIban("AZ21 NABZ 0000 0000 1370 1000 1944"); // true
formatManat(1234.5);                                // "1 234,50 ₼"
numberToWordsAz(1234);                               // "min iki yüz otuz dörd"
normalizePhone("0501234567");                        // "+994501234567"
toUpperAz("işıq");                                   // "İŞIQ"
```

Everything is a named export, so you only bundle what you use.

## API

### 🏦 iban
`isValidIban` · `normalizeIban` · `formatIban` · `generateIban` · `maskIban` ·
`extractBankCode` · `extractAccount` · `ibanCountryCode` · `areIbansEqual`
— validate (ISO 7064 MOD-97), format, generate and inspect Azerbaijani IBANs.

### 🪪 fin
`isValidFin` · `normalizeFin` · `maskFin` — the 7-character personal ID code.

### 🧾 voen
`isValidVoen` · `normalizeVoen` — the 10-digit taxpayer ID.

### 📞 phone
`isValidPhone` · `normalizePhone` (E.164) · `formatPhoneInternational` ·
`formatPhoneNational` · `detectOperator` · `isMobilePhone` · `isLandlinePhone` ·
`arePhonesEqual` · `phoneToTelLink` · `phoneDigits`.

### 💳 card
`isValidCardNumber` (Luhn) · `detectCardScheme` · `formatCardNumber` ·
`maskCardNumber` · `getCardLast4`.

### 🏛️ swift
`isValidSwift` · `normalizeSwift` · `parseSwift` — AZ BIC codes.

### 💰 currency
`formatManat` · `parseManat` · `roundManat` · `splitManatQepik` · `sumManat` ·
`averageManat` · `manatToQepik` · `qepikToManat`.

### 🔢 number
`formatNumberAz` · `parseNumberAz` · `numberToWordsAz` · `ordinalAz` · `roundTo` ·
`clamp` · `inRange` · `sum` · `average` · `median` · `minOf` · `maxOf` · `range` ·
`percentOf` · `gcd` · `lcm` · `isEven` · `isOdd`.

### 📊 percent
`formatPercentAz` · `parsePercentAz`.

### 📅 dates
`formatDateAz` · `formatDateShortAz` (DD.MM.YYYY) · `parseDateShortAz` ·
`formatTimeAz` · `formatDateTimeAz` · `MONTH_NAMES_AZ` · `WEEKDAY_NAMES_AZ` ·
`weekdayNameAz` · `isWeekend` · `isWorkingDay` · `addWorkingDays` ·
`workingDaysBetween` · `addDays` · `addMonths` · `addYears` · `startOfDay` ·
`endOfDay` · `startOfMonth` · `endOfMonth` · `daysBetween` · `monthsBetween` ·
`daysInMonth` · `dayOfYear` · `quarterOf` · `isLeapYear` · `isSameDay` ·
`isSameMonth` · `isToday` · `isPast` · `isFuture` · `getAge` · `isValidDateParts`.

### 🔤 text
`asciiFold` · `slugify`¹ · `truncate` · `capitalizeFirstAz` · `countWords` ·
`countOccurrences` · `charCount` · `initials` · `isAzAlpha` · `isBlank` ·
`maskEmail` · `normalizeSpaces` · `reverseText` · `extractDigits` ·
`ensurePrefix` · `ensureSuffix` · `zeroPad`.

### 🔠 case
`toUpperAz` · `toLowerAz` · `titleCaseAz` — Azerbaijani-correct casing (İ/ı).

### 🔗 slug
`slugify` · `isSlug`.

### 📮 postal
`isValidPostalCode` · `normalizePostalCode`.

### 🚗 plate
`isValidPlate` · `normalizePlate` · `formatPlate` · `extractPlateRegion`.

> ¹ Format-only checks (FIN, VÖEN, postal, plate, SWIFT) verify the shape, not
> that the value is officially registered — this is documented in each function's
> JSDoc.

## Contributing

Contributions are very welcome — this project is built together. Adding a utility
is a small, self-contained PR. Start with [CONTRIBUTING.md](./CONTRIBUTING.md) and
grab a [`good first issue`](https://github.com/unico2007/az-utils/labels/good%20first%20issue).
Remaining ideas (region/city datasets, public-holiday calendar, Latin↔Cyrillic
transliteration) are tracked in [ROADMAP.md](./ROADMAP.md).

## License

[MIT](./LICENSE) © az-utils contributors
