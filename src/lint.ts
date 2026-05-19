import { resolve } from 'node:path';
import { readdirSync, readFileSync } from 'node:fs';

const MIN_BORDER_CONTRAST = 1.2; // GitHub Primer's standard
const MIN_TEXT_CONTRAST = 4.5; // WCAG 2.1 AA
const MIN_COMMENT_CONTRAST = 3.0; // WCAG 2.1 AA large text

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace('#', '');
  return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
}

function relativeLuminance([r, g, b]: [number, number, number]): number {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function contrastRatio(hex1: string, hex2: string): number {
  const l1 = relativeLuminance(hexToRgb(hex1));
  const l2 = relativeLuminance(hexToRgb(hex2));
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

const borderSurfacePairs: [string, string][] = [
  ['sideBar.border', 'sideBar.background'],
  ['statusBar.border', 'statusBar.background'],
  ['panel.border', 'editor.background'],
  ['titleBar.border', 'titleBar.activeBackground'],
  ['tab.border', 'tab.inactiveBackground'],
  ['editorGroupHeader.border', 'editorGroupHeader.tabsBackground'],
  ['editorGroupHeader.tabsBorder', 'editorGroupHeader.tabsBackground'],
];

const themesDir = resolve(import.meta.dirname, '../themes');
const files = readdirSync(themesDir).filter((f) => f.endsWith('.json'));

let warnings = 0;
let errors = 0;

for (const file of files) {
  const theme = JSON.parse(readFileSync(resolve(themesDir, file), 'utf-8'));
  const colors: Record<string, string> = theme.colors ?? {};
  const isAA = file.includes('-aa-');
  const issues: string[] = [];

  for (const [borderKey, surfaceKey] of borderSurfacePairs) {
    const borderColor = colors[borderKey];
    const surfaceColor = colors[surfaceKey];
    if (!borderColor || !surfaceColor) continue;
    if (borderColor.length > 7 || surfaceColor.length > 7) continue;
    if (borderColor.toLowerCase() === surfaceColor.toLowerCase()) continue;

    const ratio = contrastRatio(borderColor, surfaceColor);
    if (ratio < MIN_BORDER_CONTRAST) {
      issues.push(
        `  ${borderKey} (${borderColor}) vs ${surfaceKey} (${surfaceColor}): ratio ${ratio.toFixed(2)} < ${MIN_BORDER_CONTRAST}`,
      );
    }
  }

  const editorBg = colors['editor.background'];
  if (editorBg && editorBg.length <= 7) {
    const tokenColors: {
      name?: string;
      scope?: string | string[];
      settings?: { foreground?: string };
    }[] = theme.tokenColors ?? [];
    for (const token of tokenColors) {
      const fg = token.settings?.foreground;
      if (!fg || fg.length > 7) continue;
      const scopes = Array.isArray(token.scope) ? token.scope : [token.scope];
      const isComment = scopes.some((s) => s?.startsWith('comment') || s?.startsWith('punctuation.definition.comment'));
      const threshold = isComment ? MIN_COMMENT_CONTRAST : MIN_TEXT_CONTRAST;
      const ratio = contrastRatio(fg, editorBg);
      if (ratio < threshold) {
        const name =
          token.name ?? scopes[0] ?? 'unknown';
        issues.push(
          `  token "${name}" (${fg}) vs editor.background (${editorBg}): ratio ${ratio.toFixed(2)} < ${threshold}`,
        );
      }
    }
  }

  if (issues.length > 0) {
    const icon = isAA ? '✗' : '⚠';
    console.log(`\n${icon} ${file}:`);
    issues.forEach((i) => console.log(i));
    if (isAA) errors += issues.length;
    else warnings += issues.length;
  }
}

if (errors === 0 && warnings === 0) {
  console.log('All themes pass contrast checks.');
} else {
  if (warnings > 0) console.log(`\n${warnings} warning(s).`);
  if (errors > 0) {
    console.log(`${errors} error(s) in AA themes.`);
    process.exit(1);
  }
}
