# Contributing to az-utils

Thanks for helping build az-utils! This project is intentionally structured so
that **each utility is a small, self-contained pull request** — perfect for first
contributions and for growing the library one focused change at a time.

## Ground rules

- **One PR = one focused change.** A single validator, a bug fix, or a doc update.
  Small PRs get reviewed and merged faster.
- **Every new utility ships with tests.** No test, no merge.
- **No runtime dependencies.** az-utils stays dependency-free. Dev tooling only.
- **Be correct and honest.** If a value can only be *format*-checked (no public
  checksum), say so in the JSDoc — don't pretend it verifies authenticity.

## Getting started

```bash
git clone https://github.com/unico2007/az-utils.git
cd az-utils
npm install

npm test        # run the test suite
npm run build   # bundle ESM + CJS + types
npm run lint    # Biome lint
npm run typecheck
```

## Project layout

```
src/
  index.ts        # re-exports every utility (keep exports flat + named)
  iban/           # one folder per utility
    validate.ts
    format.ts
    index.ts      # re-exports this utility's public API
    iban.test.ts  # colocated tests
  fin/
    ...
```

## Adding a new utility (the 3-step recipe)

Say you're adding a **VÖEN** (tax ID) validator. Use `src/fin/` as your template.

1. **Create the folder and code.**

   ```
   src/voen/validate.ts   # export function isValidVoen(input: string): boolean
   src/voen/index.ts      # export { isValidVoen } from "./validate";
   src/voen/voen.test.ts  # cover valid, invalid, edge and non-string inputs
   ```

2. **Re-export it** from `src/index.ts`:

   ```ts
   export * from "./voen";
   ```

3. **Verify locally**, then open the PR:

   ```bash
   npm run lint && npm run typecheck && npm test
   ```

Document every exported function with a JSDoc block that includes at least one
`@example`. If the check is format-only, note that explicitly.

## Commit messages

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat(voen): add VÖEN tax-ID validator
fix(iban): reject bank codes containing digits
docs(readme): document formatIban
test(phone): cover Nar Mobile prefixes
```

## Pull request checklist

- [ ] The PR does **one** thing.
- [ ] `npm run lint`, `npm run typecheck` and `npm test` all pass.
- [ ] New/changed code has tests.
- [ ] Exported functions have JSDoc with an `@example`.
- [ ] `src/index.ts` re-exports any new public API.
- [ ] Format-only checks are documented as such.

## Claiming an issue

Comment on the [issue](https://github.com/unico2007/az-utils/issues) you want to
take so we don't duplicate work. New here? Look for the
[`good first issue`](https://github.com/unico2007/az-utils/labels/good%20first%20issue) label.

## Code of Conduct

By participating you agree to the [Code of Conduct](./CODE_OF_CONDUCT.md).
