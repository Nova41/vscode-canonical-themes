import { resolve } from 'node:path';
import { readdirSync, readFileSync } from 'node:fs';

const MIN_BORDER_CONTRAST = 1.2; // GitHub Primer's standard
const MIN_TEXT_CONTRAST = 4.5; // WCAG 2.1 AA

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

function suggestContrastCalibratedColor(fg: string, bg: string): string {
  const [r, g, b] = hexToRgb(fg);
  const bgLum = relativeLuminance(hexToRgb(bg));
  const fgLum = relativeLuminance([r, g, b]);
  const lighten = fgLum > bgLum;
  for (let step = 1; step <= 255; step++) {
    const factor = lighten ? 1 + step / 255 : 1 - step / 255;
    const nr = Math.min(255, Math.max(0, Math.round(r * factor)));
    const ng = Math.min(255, Math.max(0, Math.round(g * factor)));
    const nb = Math.min(255, Math.max(0, Math.round(b * factor)));
    const hex = '#' + [nr, ng, nb].map((v) => v.toString(16).padStart(2, '0').toUpperCase()).join('');
    if (contrastRatio(hex, bg) >= MIN_TEXT_CONTRAST) return hex;
  }
  return fg;
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
  const styleErrors: string[] = [];

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
      settings?: { foreground?: string; fontStyle?: string };
    }[] = theme.tokenColors ?? [];
    for (const token of tokenColors) {
      const scopes = Array.isArray(token.scope) ? token.scope : [token.scope];
      const name = token.name ?? scopes[0] ?? 'unknown';

      if (token.settings?.fontStyle?.includes('italic')) {
        styleErrors.push(`  token "${name}": italic fontStyle is not allowed`);
      }

      const fg = token.settings?.foreground;
      if (!fg || fg.length > 7) continue;
      const ratio = contrastRatio(fg, editorBg);
      if (ratio < MIN_TEXT_CONTRAST) {
        const suggestion = isAA ? ` → suggest ${suggestContrastCalibratedColor(fg, editorBg)}` : '';
        issues.push(
          `  token "${name}" (${fg}) vs editor.background (${editorBg}): ratio ${ratio.toFixed(2)} < ${MIN_TEXT_CONTRAST}${suggestion}`,
        );
      }
    }
  }

  const allIssues = [...styleErrors, ...issues];
  if (allIssues.length > 0) {
    const hasErrors = styleErrors.length > 0 || (isAA && issues.length > 0);
    const icon = hasErrors ? '✗' : '⚠';
    console.log(`\n${icon} ${file}:`);
    allIssues.forEach((i) => console.log(i));
    errors += styleErrors.length;
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
