# Roadmap

This is the backlog for az-utils. **Each checkbox is roughly one pull request.**
Pick one, open (or claim) the matching issue, and send a small focused PR.
Grouped by area; ✅ = shipped.

> Tip for contributors: a typical utility becomes 3–4 PRs — `validate`, `format`,
> a data/edge-case pass, and docs/examples. That keeps each change small and reviewable.

## 🪪 Identity & documents

- [x] **FIN** — `isValidFin`, `normalizeFin` (format check)
- [ ] FIN — helpers to extract nothing sensitive; add fuzz tests
- [ ] **VÖEN / TIN** — `isValidVoen` (10-digit format)
- [ ] VÖEN — individual vs legal-entity detection
- [ ] VÖEN — `formatVoen`
- [ ] **Passport** — `isValidPassportNumber` (AA1234567 pattern)
- [ ] **ID card series** — `isValidIdCardSeries` (AZE / MYI …)
- [ ] **SSN / DSMF** social-insurance number format

## 🏦 Banking & finance

- [x] **IBAN** — `isValidIban` (MOD-97 checksum)
- [x] **IBAN** — `formatIban`, `normalizeIban`
- [ ] IBAN — `extractBankCode`, `extractAccount`
- [ ] **Bank code → bank name** lookup dataset (NABZ → Kapital Bank, …)
- [ ] **SWIFT / BIC** validation for AZ banks
- [ ] **Bank card** — Luhn check + local issuer detection
- [ ] **AZN currency** — `formatManat(1234.5)` → "1 234,50 ₼"
- [ ] AZN — `parseManat` (string → number)
- [ ] **Money in words** — `manatToWords(12.34)` → "on iki manat otuz dörd qəpik"
- [ ] **Number formatting** — AZ locale separators (space + comma)

## 📞 Phone & telecom

- [ ] **Phone validate** — `isValidPhone("+994501234567")`
- [ ] **Phone format** — E.164 / national / international
- [ ] **Operator detection** — Azercell / Bakcell / Nar / Naxtel
- [ ] **Mobile vs landline** detection
- [ ] **Landline area codes** → city mapping (012 → Bakı, …)
- [ ] **Phone → clean/normalize** (strip separators, add +994)

## 🗺️ Geography & administrative data

- [ ] **Regions (rayonlar)** dataset + lookup
- [ ] **Cities** dataset + lookup
- [ ] **Postal codes** — `isValidPostalCode` (AZ NNNN)
- [ ] Postal code → region resolver
- [ ] **Car plates** — `isValidPlate` (NN-XX-NNN)
- [ ] Car plate — region-code (01–85) → region name
- [ ] **Baku metro stations** dataset
- [ ] **Economic regions** dataset

## 📅 Dates & calendar

- [ ] **Public holidays** dataset (Novruz, Qurban, Republic Day, …)
- [ ] `isPublicHoliday(date)`
- [ ] `isWorkingDay(date)` (weekends + holidays)
- [ ] `addWorkingDays(date, n)` / `workingDaysBetween(a, b)`
- [ ] **Azerbaijani month names** + `formatDateAz`
- [ ] **Azerbaijani weekday names**
- [ ] **Novruz date** calculator (spring equinox based)
- [ ] **Ramadan / Qurban** movable-feast helpers

## 🔤 Text & language

- [ ] **Latin → Cyrillic** transliteration
- [ ] **Cyrillic → Latin** transliteration
- [ ] **Slugify** with AZ chars (ə→e, ş→sh, ç→c, ğ→g, …)
- [ ] **Correct casing** — `toUpperAz` / `toLowerAz` (İ/i, I/ı)
- [ ] **Title case** (Azerbaijani-aware)
- [ ] **Number to words** — `numberToWordsAz(1234)`
- [ ] **Ordinal** — `ordinalAz(3)` → "üçüncü"
- [ ] **Keyboard layout fixer** (text typed in wrong layout)
- [ ] **Remove diacritics** (ASCII-fold Azerbaijani)
- [ ] **Pluralization / case suffix** helper (vowel harmony)

## 🧰 Project infrastructure (also great first PRs)

- [ ] Add `@vitest/coverage-v8` + coverage badge
- [ ] Set up Changesets for versioned releases
- [ ] Add a publish-to-npm GitHub Action
- [ ] Add a documentation site (Docusaurus / VitePress)
- [ ] Add benchmark suite
- [ ] Add example playground / CodeSandbox
- [ ] Translate README to Azerbaijani (`README.az.md`)
- [ ] Add `CHANGELOG` automation

---

**Adding something not on this list?** Open an issue first so we can agree on the
API, then send the PR. See [CONTRIBUTING.md](./CONTRIBUTING.md).
