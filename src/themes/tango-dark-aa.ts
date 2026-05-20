import { palette } from '../palettes/tango-dark-aa';
import { deriveTheme } from '../lib/types';
import { theme as base } from './tango-dark';

export const theme = deriveTheme(base, {
  name: 'Canonical AA - Tango Dark',
  tokenColors: [
    {
      name: 'Comments',
      scope: ['comment', 'punctuation.definition.comment'],
      settings: { foreground: palette.blackBright },
    },
    {
      name: 'Strings',
      scope: ['string', 'punctuation.definition.string'],
      settings: { foreground: palette.greenBright },
    },
    {
      name: 'Escape sequences',
      scope: 'constant.character.escape',
      settings: { foreground: palette.cyanBright },
    },
    {
      name: 'Constants',
      scope: ['constant', 'constant.numeric', 'constant.language', 'support.constant', 'variable.language'],
      settings: { foreground: palette.cyanBright },
    },
    {
      name: 'Keywords',
      scope: ['keyword', 'storage', 'storage.type', 'storage.modifier'],
      settings: { foreground: palette.magentaBright },
    },
    {
      name: 'Operators',
      scope: 'keyword.operator',
      settings: { foreground: palette.gray7 },
    },
    {
      name: 'Functions',
      scope: ['entity.name.function', 'support.function', 'variable.function', 'meta.function-call.method'],
      settings: { foreground: palette.blueBright },
    },
    {
      name: 'Classes & Types',
      scope: ['entity.name.type', 'entity.name.class', 'entity.other.inherited-class', 'support.class', 'support.type', 'meta.type', 'meta.type-alias'],
      settings: { foreground: palette.yellowBright },
    },
    {
      name: 'Parameters',
      scope: ['variable.parameter', 'meta.function.parameters'],
      settings: { foreground: palette.white },
    },
    {
      name: 'Properties',
      scope: ['variable.other.property', 'variable.other.object.property'],
      settings: { foreground: palette.gray7 },
    },
    {
      name: 'Punctuation',
      scope: 'punctuation',
      settings: { foreground: palette.gray6 },
    },
    {
      name: 'Tags (HTML/JSX)',
      scope: 'entity.name.tag',
      settings: { foreground: palette.redBright },
    },
    {
      name: 'Tag attributes',
      scope: 'entity.other.attribute-name',
      settings: { foreground: palette.yellowBright },
    },
    {
      name: 'CSS: Property Names',
      scope: ['support.type.property-name.css', 'support.type.property-name.less'],
      settings: { foreground: palette.blueBright },
    },
    {
      name: 'Markup: Heading',
      scope: 'markup.heading',
      settings: { foreground: palette.blueBright },
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
      settings: { foreground: palette.greenBright, fontStyle: '' },
    },
  ],
});
