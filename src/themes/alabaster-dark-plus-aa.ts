import { palette } from '../palettes/alabaster-dark-aa';
import { deriveTheme } from '../lib/types';
import { theme as base } from './alabaster-dark-plus';

export const theme = deriveTheme(base, {
  name: 'Canonical - Alabaster Dark+ (WCAG 2.1 AA)',
  tokenColors: [
    {
      name: 'Comments',
      scope: ['comment', 'punctuation.definition.comment'],
      settings: { foreground: palette.comment },
    },
    {
      name: 'Strings',
      scope: ['string', 'punctuation.definition.string'],
      settings: { foreground: palette.string },
    },
    {
      name: 'Escape sequences',
      scope: 'constant.character.escape',
      settings: { foreground: palette.cyan },
    },
    {
      name: 'Constants',
      scope: [
        'constant',
        'constant.numeric',
        'constant.language',
        'support.constant',
        'variable.language',
      ],
      settings: { foreground: palette.constant },
    },
    {
      name: 'Keywords',
      scope: ['keyword', 'storage', 'storage.type', 'storage.modifier'],
      settings: { foreground: palette.red },
    },
    {
      name: 'Operators',
      scope: 'keyword.operator',
      settings: { foreground: palette.punctuation },
    },
    {
      name: 'Functions',
      scope: [
        'entity.name.function',
        'support.function',
        'variable.function',
        'meta.function-call.method',
      ],
      settings: { foreground: palette.definition },
    },
    {
      name: 'Classes & Types',
      scope: [
        'entity.name.type',
        'entity.name.class',
        'entity.other.inherited-class',
        'support.class',
        'support.type',
        'meta.type',
        'meta.type-alias',
      ],
      settings: { foreground: palette.yellow },
    },
    {
      name: 'Parameters',
      scope: ['variable.parameter', 'meta.function.parameters'],
      settings: { foreground: palette.yellowBright },
    },
    {
      name: 'Properties',
      scope: ['variable.other.property', 'variable.other.object.property', 'meta.property.object'],
      settings: { foreground: palette.gray7 },
    },
    {
      name: 'Decorators',
      scope: ['meta.decorator', 'punctuation.decorator', 'meta.annotation'],
      settings: { foreground: palette.magenta },
    },
    {
      name: 'Punctuation',
      scope: 'punctuation',
      settings: { foreground: palette.punctuation },
    },
    {
      name: 'Tags (HTML/JSX)',
      scope: 'entity.name.tag',
      settings: { foreground: palette.red },
    },
    {
      name: 'Tag attributes',
      scope: 'entity.other.attribute-name',
      settings: { foreground: palette.yellowBright },
    },
    {
      name: 'CSS: Property Names',
      scope: ['support.type.property-name.css', 'support.type.property-name.less'],
      settings: { foreground: palette.definition },
    },
    {
      name: 'Markup: Heading',
      scope: 'markup.heading',
      settings: { foreground: palette.definition },
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
      settings: { foreground: palette.string, fontStyle: '' },
    },
  ],
});
