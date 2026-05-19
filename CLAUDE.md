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
- `src/lint.ts`: Contrast linter for border vs surface pairs.

**Key pattern — `deriveTheme(base, overrides)`:** Used when one theme is a variant of another (e.g., Alabaster Dark+ derives from Alabaster Dark, overriding only `tokenColors`). It deep-merges `colors` and replaces `tokenColors` if provided.

**Adding a new theme:**

1. Create palette in `src/palettes/<name>.ts`
2. Create theme in `src/themes/<name>.ts`
3. Register in `src/build.ts` with `await register('./themes/<name>', '<name>-color-theme.json')`
4. Add entry to `package.json` `contributes.themes` array

**Output:** `themes/*.json` — generated files consumed by VS Code. Do not hand-edit.

## Design Decisions

- Dark theme UI grays are neutral (no color tint) unless the theme's identity requires it (e.g., Atom One Dark has a subtle cool-blue tint).
- No italic `fontStyle` on any token color.
- Each theme maps terminal ANSI colors from its palette.
- The lint threshold (1.2 contrast ratio) is calibrated to GitHub Primer's border standard. Borders that intentionally match their surface (ratio 1.0) are suppressed.
