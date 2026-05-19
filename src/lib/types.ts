export type Palette = Record<string, string>;

export interface TokenColor {
  name?: string;
  scope: string | string[];
  settings: {
    foreground?: string;
    fontStyle?: string;
  };
}

export interface ThemeDefinition {
  name: string;
  uiTheme: 'vs' | 'vs-dark' | 'hc-black' | 'hc-light';
  colors: Record<string, string>;
  tokenColors: TokenColor[];
}

export function deriveTheme(
  base: ThemeDefinition,
  overrides: Partial<ThemeDefinition> & { name: string },
): Readonly<ThemeDefinition> {
  return {
    ...base,
    ...overrides,
    colors: { ...base.colors, ...overrides.colors },
    tokenColors: overrides.tokenColors ?? base.tokenColors,
  } as const;
}
