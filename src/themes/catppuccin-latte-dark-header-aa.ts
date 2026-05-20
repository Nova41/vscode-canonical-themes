import { palette } from '../palettes/catppuccin-latte-aa';
import { palette as dark } from '../palettes/catppuccin-mocha';
import { deriveTheme } from '../lib/types';
import { theme as base } from './catppuccin-latte-aa';

export const theme = deriveTheme(base, {
  name: 'Canonical AA - Catppuccin Latte (Dark Header)',
  colors: {
    'activityBar.background': dark.gray1,
    'titleBar.border': dark.gray1,
    'titleBar.activeBackground': dark.gray1,
    'titleBar.activeForeground': palette.gray4,
    'titleBar.inactiveBackground': dark.gray1,
    'titleBar.inactiveForeground': palette.gray5,
  },
});
