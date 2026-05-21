# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun run build          # Generate JSON theme files from TypeScript sources into themes/
bun run build:watch    # Rebuild on file change
bun run lint           # Check contrast ratios across all generated themes
```

Build must run before lint (lint reads from `themes/*.json`).

## Architecture

This is a VS Code color theme extension. Themes are authored in TypeScript and compiled to JSON.

**Source structure:**

- `src/palettes/`: Raw hex color values per theme family. Each palette is a flat `as const` object with no semantics, just named colors.
- `src/themes/`: Maps palette colors to VS Code UI keys (`colors`) and TextMate token scopes (`tokenColors`). Each file exports a `ThemeDefinition`.
- `src/lib/types.ts`: Shared types (`ThemeDefinition`, `TokenColor`) and `deriveTheme()` for creating variants.
- `src/build.ts`: Registers themes and writes JSON to `themes/`.
- `src/lint.ts`: Contrast and style linter (token contrast, border contrast, italic detection).

**Key pattern — `deriveTheme(base, overrides)`:** Used when one theme is a variant of another (e.g., Alabaster Dark+ derives from Alabaster Dark, overriding only `tokenColors`). It deep-merges `colors` and replaces `tokenColors` if provided.

**Adding a new theme:**

1. Create palette in `src/palettes/<name>.ts`
2. Create theme in `src/themes/<name>.ts`
3. Register in `src/build.ts` with `await register('./themes/<name>', '<name>-color-theme.json')`
4. Add entry to `package.json` `contributes.themes` array

**Output:** `themes/*.json` — generated files consumed by VS Code. Do not hand-edit.

## Design Decisions

- Each theme offers an original and an WCAG 2.1 AA-compliant variant.
- Each theme maps terminal ANSI colors from its palette.
- Dark theme UI grays are neutral (no color tint) unless the theme's identity requires it (e.g., Atom One Dark has a subtle cool-blue tint).
- No italic `fontStyle` on any token color.
- AA variants must pass 4.5:1 text contrast; non-AA themes warn but don't fail (palette faithfulness). Borders: 1.2 threshold (GitHub Primer). Borders matching their surface (ratio 1.0) are suppressed.

## Workflows

- Use `bun run lint` to get suggested AA-compliant colors (shown only for AA theme errors). Don't compute colors inline.
