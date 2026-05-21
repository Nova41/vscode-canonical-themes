import { palette } from '../palettes/xcode-default-light-aa';
import { deriveTheme } from '../lib/types';
import { theme as base } from './xcode-default-light';

export const theme = deriveTheme(base, {
  name: 'Canonical AA - Xcode Default Light',
  colors: {
    'tab.border': palette.uiBorder,
    'editorGroupHeader.border': palette.uiBorder,
    'editorGroupHeader.tabsBorder': palette.uiBorder,
    'panel.border': palette.uiBorder,
    'sideBar.border': palette.uiBorder,
    'statusBar.border': palette.uiBorder,
    'titleBar.border': palette.uiBorder,
  },
  tokenColors: [
    {
      name: 'Plain text',
      scope: ['text', 'source', 'variable.other.readwrite', 'punctuation.definition.variable'],
      settings: { foreground: palette.plainText },
    },
    {
      name: 'Comments',
      scope: ['comment', 'punctuation.definition.comment'],
      settings: { foreground: palette.comments },
    },
    {
      name: 'Documentation',
      scope: ['comment.documentation', 'comment.block.documentation'],
      settings: { foreground: palette.documentationMarkUp },
    },
    {
      name: 'Documentation keywords',
      scope: ['comment.documentation keyword', 'comment.block.documentation storage.type'],
      settings: { foreground: palette.documentationMarkupKeywords },
    },
    {
      name: 'Strings',
      scope: ['string', 'punctuation.definition.string'],
      settings: { foreground: palette.strings },
    },
    {
      name: 'Characters and numbers',
      scope: ['constant.numeric', 'constant.character'],
      settings: { foreground: palette.characters },
    },
    {
      name: 'Regex literals',
      scope: ['string.regexp'],
      settings: { foreground: palette.regexLiterals },
    },
    {
      name: 'Keywords',
      scope: [
        'keyword',
        'keyword.operator.word',
        'keyword.operator.new',
        'storage.type',
        'storage.modifier',
        'punctuation.definition.keyword',
        'variable.language.super',
        'support.type.primitive',
      ],
      settings: { foreground: palette.keywords },
    },
    {
      name: 'Preprocessor statements',
      scope: [
        'meta.preprocessor',
        'keyword.control.directive',
        'punctuation.definition.directive',
        'entity.name.function.preprocessor',
      ],
      settings: { foreground: palette.preprocessorStatements },
    },
    {
      name: 'URLs',
      scope: ['markup.underline.link', 'string.other.link'],
      settings: { foreground: palette.urls },
    },
    {
      name: 'Attributes',
      scope: [
        'entity.other.attribute-name',
        'meta.decorator',
        'punctuation.decorator',
      ],
      settings: { foreground: palette.attributes },
    },
    {
      name: 'Type declarations',
      scope: [
        'entity.name.type',
        'entity.name.class',
        'entity.other.inherited-class',
        'support.class',
        'entity.name.struct',
      ],
      settings: { foreground: palette.typeDeclarations },
    },
    {
      name: 'Function and method declarations',
      scope: [
        'entity.name.function',
        'meta.function-call.method',
        'support.function',
        'variable.function',
      ],
      settings: { foreground: palette.otherDeclarations },
    },
    {
      name: 'Project class names',
      scope: ['support.type'],
      settings: { foreground: palette.projectClassNames },
    },
    {
      name: 'Project properties and globals',
      scope: [
        'variable.other.property',
        'variable.other.object.property',
        'meta.property.object',
      ],
      settings: { foreground: palette.projectFunctionAndMethodNames },
    },
    {
      name: 'Constants',
      scope: [
        'variable.other.constant',
        'entity.name.constant',
        'constant.language.boolean',
        'constant.language',
      ],
      settings: { foreground: palette.projectConstants },
    },
    {
      name: 'Other class names',
      scope: ['meta.function-call.constructor'],
      settings: { foreground: palette.otherClassNames },
    },
    {
      name: 'Other functions and methods',
      scope: ['support.function.builtin'],
      settings: { foreground: palette.otherFunctionAndMethodNames },
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
      settings: { foreground: palette.plainText },
    },
    {
      name: 'Parameters',
      scope: ['variable.parameter', 'meta.function.parameters'],
      settings: { foreground: palette.projectFunctionAndMethodNames },
    },
    {
      name: 'Markup: Heading',
      scope: 'markup.heading',
      settings: { foreground: palette.headings },
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
      settings: { foreground: palette.preprocessorStatements, fontStyle: '' },
    },
  ],
});
