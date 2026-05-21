import { palette } from '../palettes/dracula-plus-aa';
import { deriveTheme } from '../lib/types';
import { theme as base } from './dracula-plus';

export const theme = deriveTheme(base, {
  name: 'Canonical AA - Dracula Plus',
  tokenColors: [
    {
      name: 'Comments',
      scope: ['comment', 'punctuation.definition.comment'],
      settings: { foreground: palette.gray6 },
    },
    {
      name: 'Comments: Documentation',
      scope: ['comment.documentation', 'comment.block.documentation'],
      settings: { foreground: palette.gray6 },
    },
    {
      name: 'Operators',
      scope: 'keyword.operator',
      settings: { foreground: palette.pink },
    },
    {
      name: 'Keywords',
      scope: ['keyword', 'storage', 'storage.type.builtin', 'storage.type.modifier'],
      settings: { foreground: palette.pink },
    },
    {
      name: 'Language Constants',
      scope: ['constant.language', 'support.constant', 'variable.language'],
      settings: { foreground: palette.purple },
    },
    {
      name: 'Variable - Property',
      scope: ['variable.other.property', 'variable.other.object.property'],
      settings: { foreground: palette.white },
    },
    {
      name: 'Functions',
      scope: ['entity.name.function', 'support.function'],
      settings: { foreground: palette.green },
    },
    {
      name: 'Classes',
      scope: ['entity.name.type', 'entity.other.inherited-class', 'support.class'],
      settings: { foreground: palette.cyan },
    },
    {
      name: 'Numbers, Characters',
      scope: ['constant.numeric', 'constant.character', 'constant'],
      settings: { foreground: palette.purple },
    },
    {
      name: 'Strings',
      scope: 'string',
      settings: { foreground: palette.yellow },
    },
    {
      name: 'Strings: Symbols',
      scope: 'constant.other.symbol',
      settings: { foreground: palette.orange },
    },
    {
      name: 'CSS: Property Names',
      scope: ['meta.property-name', 'support.type.property-name'],
      settings: { foreground: palette.cyan },
    },
    {
      name: 'Markup: Heading',
      scope: 'markup.heading',
      settings: { foreground: palette.purple },
    },
    {
      name: 'Markup: Strong',
      scope: 'markup.bold',
      settings: { foreground: palette.orange, fontStyle: 'bold' },
    },
    {
      name: 'Markup: Underline',
      scope: 'markup.underline',
      settings: { fontStyle: 'underline' },
    },
    {
      name: 'Markup Inline',
      scope: 'markup.inline.raw',
      settings: { foreground: palette.orange, fontStyle: '' },
    },
  ],
});
