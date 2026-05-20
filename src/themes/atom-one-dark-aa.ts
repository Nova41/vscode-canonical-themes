import { palette } from '../palettes/atom-one-dark-aa';
import { deriveTheme } from '../lib/types';
import { theme as base } from './atom-one-dark';

export const theme = deriveTheme(base, {
  name: 'Canonical AA - Atom One Dark',
  tokenColors: [
    {
      name: 'Comments',
      scope: ['comment', 'punctuation.definition.comment'],
      settings: { foreground: palette.gray6, fontStyle: 'italic' },
    },
    {
      name: 'Comments: Documentation',
      scope: ['comment.documentation', 'comment.block.documentation'],
      settings: { foreground: palette.gray6 },
    },
    {
      name: 'Operators',
      scope: 'keyword.operator',
      settings: { foreground: palette.cyan },
    },
    {
      name: 'Keywords',
      scope: ['keyword', 'storage', 'storage.type.builtin', 'storage.type.modifier'],
      settings: { foreground: palette.purple },
    },
    {
      name: 'Language Constants',
      scope: ['constant.language', 'support.constant', 'variable.language'],
      settings: { foreground: palette.darkYellow },
    },
    {
      name: 'Variable - Property',
      scope: ['variable.other.property', 'variable.other.object.property'],
      settings: { foreground: palette.red },
    },
    {
      name: 'Functions',
      scope: ['entity.name.function', 'support.function'],
      settings: { foreground: palette.blue },
    },
    {
      name: 'Classes',
      scope: ['entity.name.type', 'entity.other.inherited-class', 'support.class'],
      settings: { foreground: palette.yellow },
    },
    {
      name: 'Numbers, Characters',
      scope: ['constant.numeric', 'constant.character', 'constant'],
      settings: { foreground: palette.darkYellow },
    },
    {
      name: 'Strings',
      scope: 'string',
      settings: { foreground: palette.green },
    },
    {
      name: 'Strings: Symbols',
      scope: 'constant.other.symbol',
      settings: { foreground: palette.red },
    },
    {
      name: 'CSS: Property Names',
      scope: ['meta.property-name', 'support.type.property-name'],
      settings: { foreground: palette.red },
    },
    {
      name: 'Markup: Heading',
      scope: 'markup.heading',
      settings: { foreground: palette.red },
    },
    {
      name: 'Markup: Strong',
      scope: 'markup.bold',
      settings: { fontStyle: 'bold' },
    },
    {
      name: 'Markup: Underline',
      scope: 'markup.underline',
      settings: { fontStyle: 'underline' },
    },
    {
      name: 'Markup Inline',
      scope: 'markup.inline.raw',
      settings: { foreground: palette.darkYellow, fontStyle: '' },
    },
  ],
});
