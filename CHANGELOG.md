# Changelog

All notable changes to this project are documented here. The format is based on
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and this project adheres
to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- IBAN validation (`isValidIban`) with ISO 7064 MOD-97-10 checksum, plus
  `formatIban` and `normalizeIban`.
- FIN format validation (`isValidFin`) and `normalizeFin`.
- Project scaffolding: TypeScript, tsup build (ESM + CJS + types), Vitest,
  Biome, CI, and contribution docs.
