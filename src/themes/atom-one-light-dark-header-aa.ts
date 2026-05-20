import { palette } from '../palettes/atom-one-light-aa';
import { deriveTheme } from '../lib/types';
import { theme as base } from './atom-one-light-aa';

export const theme = deriveTheme(base, {
  name: 'Canonical AA - Atom One Light (Dark Header)',
  colors: {
    'activityBar.background': palette.gray1,
    'titleBar.border': palette.gray1,
    'titleBar.activeBackground': palette.gray1,
    'titleBar.activeForeground': palette.gray5,
    'titleBar.inactiveBackground': palette.gray1,
    'titleBar.inactiveForeground': palette.gray5,
  },
});
