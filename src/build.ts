import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import type { ThemeDefinition } from './lib/types';

interface ThemeEntry {
  theme: ThemeDefinition;
  filename: string;
}

const startTime = performance.now();

const themes: ThemeEntry[] = [];

async function register(modulePath: string, filename: string) {
  const mod = await import(modulePath);
  themes.push({ theme: mod.theme, filename });
}

await register('./themes/atom-one-light', 'atom-one-light-color-theme.json');
await register('./themes/atom-one-light-aa', 'atom-one-light-aa-color-theme.json');
await register('./themes/atom-one-light-dark-chrome', 'atom-one-light-dark-header-color-theme.json');
await register(
  './themes/atom-one-light-dark-header-aa',
  'atom-one-light-dark-header-aa-color-theme.json',
);
await register('./themes/atom-one-dark', 'atom-one-dark-color-theme.json');
await register('./themes/atom-one-dark-aa', 'atom-one-dark-aa-color-theme.json');
await register('./themes/dracula-plus', 'dracula-plus-color-theme.json');
await register('./themes/dracula-plus-aa', 'dracula-plus-aa-color-theme.json');
await register('./themes/catppuccin-latte', 'catppuccin-latte-color-theme.json');
await register('./themes/catppuccin-latte-aa', 'catppuccin-latte-aa-color-theme.json');
await register('./themes/catppuccin-latte-dark-header', 'catppuccin-latte-dark-header-color-theme.json');
await register(
  './themes/catppuccin-latte-dark-header-aa',
  'catppuccin-latte-dark-header-aa-color-theme.json',
);
await register('./themes/catppuccin-mocha', 'catppuccin-mocha-color-theme.json');
await register('./themes/catppuccin-mocha-aa', 'catppuccin-mocha-aa-color-theme.json');
await register('./themes/alabaster-dark', 'alabaster-dark-color-theme.json');
await register('./themes/alabaster-dark-plus', 'alabaster-dark-plus-color-theme.json');
await register('./themes/alabaster-dark-plus-aa', 'alabaster-dark-plus-aa-color-theme.json');
await register('./themes/tango-dark', 'tango-dark-color-theme.json');
await register('./themes/tango-dark-aa', 'tango-dark-aa-color-theme.json');
await register('./themes/xcode-default-light', 'xcode-default-light-color-theme.json');
await register('./themes/xcode-default-light-aa', 'xcode-default-light-aa-color-theme.json');

const outDir = resolve(import.meta.dirname, '../themes');
mkdirSync(outDir, { recursive: true });

for (const { theme, filename } of themes) {
  const { uiTheme: _, ...output } = theme;
  const path = resolve(outDir, filename);
  writeFileSync(path, JSON.stringify(output, null, 2) + '\n');
  console.log(`  ${filename}`);
}

const totalTime = (performance.now() - startTime).toPrecision(2);
console.log(`\nBuilt ${themes.length} themes in ${totalTime}ms.`);
