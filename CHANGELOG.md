# Change Log

All notable changes to the "canonical-themes" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [0.1.1] - 2026-05-21

### Fixed

- Inline code foreground (`textPreformat.foreground`) now matches `markup.inline.raw` token color in Atom One Dark, Atom One Light, and Dracula Plus
- Button background uses upstream accent color instead of vivid syntax blue in Atom One Dark and Atom One Light

### Added

- `editor.selectionBackground` and `terminal.selectionBackground` to Atom One Dark
- `statusBar.debuggingBackground` to Atom One Dark
- `src/lib/color-utils.ts` with `blend()` for solid alpha compositing
- Preview screenshots in README
- Xcode Default Light to README theme table and credits

### Changed

- README: corrected claims about tint-free chrome and bold tokens

## [0.1.0] - 2026-05-21

### Added

- Xcode Default Light theme with AA variant

### Changed

- Add mono syntax tokens, use mono3 for comments, remove italic

### Fixed

- Enforce 4.5:1 contrast for all AA theme tokens

## [0.0.2] - 2026-05-19

### Fixed

- Use neutral gray for list selection background in light themes
- Remove npm scope from package name for vsce

### Changed

- Rename AA variants with "Canonical AA" prefix

## [0.0.1] - 2026-05-19

- Initial release
