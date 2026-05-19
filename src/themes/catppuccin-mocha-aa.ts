import { palette } from '../palettes/catppuccin-mocha-aa';
import { deriveTheme } from '../lib/types';
import { theme as base } from './catppuccin-mocha';

export const theme = deriveTheme(base, {
  name: 'Canonical - Catppuccin Mocha (WCAG 2.1 AA)',
  tokenColors: [
    {
      name: 'Basic text & variable names',
      scope: ['text', 'source', 'variable.other.readwrite', 'punctuation.definition.variable'],
      settings: { foreground: palette.gray7 },
    },
    {
      name: 'Punctuation',
      scope: 'punctuation',
      settings: { foreground: palette.overlay2 },
    },
    {
      name: 'Comments',
      scope: ['comment', 'punctuation.definition.comment'],
      settings: { foreground: palette.gray6 },
    },
    {
      name: 'Strings',
      scope: ['string', 'punctuation.definition.string'],
      settings: { foreground: palette.green },
    },
    {
      name: 'Escape sequences',
      scope: 'constant.character.escape',
      settings: { foreground: palette.pink },
    },
    {
      name: 'Booleans, constants, numbers',
      scope: [
        'constant.numeric',
        'variable.other.constant',
        'entity.name.constant',
        'constant.language.boolean',
        'constant.language.false',
        'constant.language.true',
        'keyword.other.unit.user-defined',
        'keyword.other.unit.suffix.floating-point',
      ],
      settings: { foreground: palette.peach },
    },
    {
      name: 'Keywords',
      scope: [
        'keyword',
        'keyword.operator.word',
        'keyword.operator.new',
        'variable.language.super',
        'support.type.primitive',
        'storage.type',
        'storage.modifier',
        'punctuation.definition.keyword',
      ],
      settings: { foreground: palette.mauve },
    },
    {
      name: 'Operators',
      scope: [
        'keyword.operator',
        'punctuation.accessor',
        'punctuation.definition.generic',
        'punctuation.definition.tag',
        'punctuation.separator.key-value',
      ],
      settings: { foreground: palette.teal },
    },
    {
      name: 'Functions',
      scope: [
        'entity.name.function',
        'meta.function-call.method',
        'support.function',
        'support.function.misc',
        'variable.function',
      ],
      settings: { foreground: palette.blue },
    },
    {
      name: 'Classes',
      scope: [
        'entity.name.class',
        'entity.other.inherited-class',
        'support.class',
        'meta.function-call.constructor',
        'entity.name.struct',
      ],
      settings: { foreground: palette.yellow },
    },
    {
      name: 'Types',
      scope: ['meta.type', 'meta.type-alias', 'support.type', 'entity.name.type'],
      settings: { foreground: palette.yellow },
    },
    {
      name: 'Enum members',
      scope: ['meta.enum variable.other.readwrite', 'variable.other.enummember'],
      settings: { foreground: palette.teal },
    },
    {
      name: 'Parameters',
      scope: ['variable.parameter', 'meta.function.parameters'],
      settings: { foreground: palette.maroon },
    },
    {
      name: 'Built-ins',
      scope: ['constant.language', 'support.function.builtin'],
      settings: { foreground: palette.red },
    },
    {
      name: 'This/Self',
      scope: ['variable.language.this', 'variable.language.this punctuation.definition.variable'],
      settings: { foreground: palette.red },
    },
    {
      name: 'Decorators',
      scope: [
        'meta.annotation variable.function',
        'meta.annotation variable.annotation.function',
        'meta.annotation punctuation.definition.annotation',
        'meta.decorator',
        'punctuation.decorator',
      ],
      settings: { foreground: palette.peach },
    },
    {
      name: 'Object properties',
      scope: ['variable.object.property', 'meta.property.object'],
      settings: { foreground: palette.gray7 },
    },
    {
      name: 'String interpolation',
      scope: ['string.template variable', 'string variable'],
      settings: { foreground: palette.gray7 },
    },
    {
      name: 'CSS: Property Names',
      scope: ['support.type.property-name.css', 'support.type.property-name.less'],
      settings: { foreground: palette.blue },
    },
    {
      name: 'Markup: Heading',
      scope: 'markup.heading',
      settings: { foreground: palette.red },
    },
    {
      name: 'Markup: Strong',
      scope: 'markup.bold',
      settings: { foreground: palette.peach, fontStyle: 'bold' },
    },
    {
      name: 'Markup: Underline',
      scope: 'markup.underline',
      settings: { fontStyle: 'underline' },
    },
    {
      name: 'Markup Inline',
      scope: 'markup.inline.raw',
      settings: { foreground: palette.rosewater, fontStyle: '' },
    },
  ],
});
