# az-utils

> Azerbaijan-specific validators, formatters and utilities for Node.js and the browser.
> _Azərbaycana aid validatorlar, formatlayıcılar və köməkçi funksiyalar._

[![CI](https://github.com/unico2007/az-utils/actions/workflows/ci.yml/badge.svg)](https://github.com/unico2007/az-utils/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)

Azerbaijani developers re-implement the same validators over and over — FIN codes,
tax IDs (VÖEN), local IBANs, `+994` phone numbers, Latin⇄Cyrillic transliteration.
**az-utils** collects them into one small, dependency-free, fully-typed and
well-tested library.

- 🇦🇿 **Locale-first** — built specifically for Azerbaijan's formats and data.
- 📦 **Zero dependencies** — tree-shakeable ESM + CJS, ships with types.
- ✅ **Tested** — every utility comes with a test suite.
- 🧩 **Easy to extend** — one folder per utility; adding one is a small, focused PR.

---

## Install

```bash
npm install az-utils
```

## Usage

```ts
import { isValidIban, formatIban, isValidFin } from "az-utils";

// IBAN — validated with the ISO 7064 MOD-97-10 checksum
isValidIban("AZ21 NABZ 0000 0000 1370 1000 1944"); // true
isValidIban("AZ22NABZ00000000137010001944");       // false (bad checksum)
formatIban("AZ21NABZ00000000137010001944");         // "AZ21 NABZ 0000 0000 1370 1000 1944"

// FIN — the 7-character personal ID code (format check)
isValidFin("1ABC2DE"); // true
isValidFin("1ABC-DE"); // false
```

Every function is also importable from its own subpath if you prefer:

```ts
import { isValidIban } from "az-utils"; // flat export (recommended)
```

## API

| Function | Description |
| --- | --- |
| `isValidIban(input)` | Validates an Azerbaijani IBAN (length, structure, MOD-97 checksum). |
| `formatIban(input)` | Formats an IBAN into space-separated groups of four. |
| `normalizeIban(input)` | Strips whitespace and uppercases an IBAN. |
| `isValidFin(input)` | Format-checks a 7-character FIN (personal ID code). |
| `normalizeFin(input)` | Trims and uppercases a FIN. |

More modules are on the way — see the [Roadmap](./ROADMAP.md).

## Roadmap

VÖEN/TIN, phone numbers, transliteration, AZN currency formatting, number-to-words,
public holidays, working-day calculations, slugify, and more.
Each is an open [issue](https://github.com/unico2007/az-utils/issues) waiting for a PR —
see [ROADMAP.md](./ROADMAP.md) and [CONTRIBUTING.md](./CONTRIBUTING.md).

## Contributing

Contributions are very welcome — this project is designed to be built together.
Adding a utility is a small, self-contained PR. Start with [CONTRIBUTING.md](./CONTRIBUTING.md)
and grab a [`good first issue`](https://github.com/unico2007/az-utils/labels/good%20first%20issue).

## License

[MIT](./LICENSE) © az-utils contributors
