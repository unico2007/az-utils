---
name: New utility
about: Propose or claim a new Azerbaijan-specific utility
title: "feat: <utility name>"
labels: ["enhancement", "good first issue"]
---

## Utility

Which utility do you want to add? (e.g. VÖEN validator, phone formatter)

## Proposed API

```ts
// example signature(s)
export function isValidVoen(input: string): boolean;
```

## Rules / references

Describe the format, the validation rules, and any official source or example
values. Note whether the check is **format-only** or has a real **checksum**.

## Checklist

- [ ] I checked no open issue/PR already covers this.
- [ ] I will add tests (valid, invalid, edge, non-string).
- [ ] I will re-export it from `src/index.ts`.
