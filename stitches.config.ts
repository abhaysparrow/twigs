import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';

export const resetStyles = {
  'html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video': {
    margin: '0',
    padding: '0',
    border: '0',
    fontSize: '100%',
    verticalAlign: 'baseline',
  },
  'article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section': {
    display: 'block',
  },
  '*[hidden]': {
    display: 'none',
  },
  body: {
    lineHeight: '1',
  },
  'ol, ul': {
    listStyle: 'none',
  },
  'blockquote, q': {
    quotes: 'none',
  },
  'blockquote:before, blockquote:after, q:before, q:after': {
    content: '',
    // eslint-disable-next-line no-dupe-keys
    // content: 'none',
  },
  table: {
    borderSpacing: '0',
  },
};

export const defaultTheme = {
  colors: {
    text: '#3F3F3F',
    primary: '#E5857A',
    secondary: '#9DA558',
    link: '#878E4C',
    grey50: '#FAF9F9',
    grey100: '#F0EDEC',
    grey200: '#E6DFDE',
    grey300: '#DAD1D0',
    grey400: '#CDC1BF',
    grey500: '#BDB0AE',
    grey600: '#A99D9B',
    grey700: '#918785',
    grey800: '#726A69',
    grey900: '#433E3E',
    red50: '#FFF8F7',
    red100: '#FEE9E6',
    red200: '#FDD8D4',
    red300: '#FCC6C0',
    red400: '#FBB2A9',
    red500: '#F9998E',
    red600: '#E5857A',
    red700: '#C57369',
    red800: '#9B5A53',
    red900: '#5B3531',
    orange50: '#FEF9F0',
    orange100: '#FDEBD1',
    orange200: '#FBDCAE',
    orange300: '#F9CC87',
    orange400: '#E8BD7C',
    orange500: '#D4AD71',
    orange600: '#BD9A65',
    orange700: '#A28457',
    orange800: '#806844',
    orange900: '#4B3D28',
    yellow50: '#F9FDD4',
    yellow100: '#EAF683',
    yellow200: '#DDE97C',
    yellow300: '#D0DA75',
    yellow400: '#C1CB6C',
    yellow500: '#B0B963',
    yellow600: '#9DA558',
    yellow700: '#878E4C',
    yellow800: '#6B703C',
    yellow900: '#3E4223',
    lime50: '#F0FEE7',
    lime100: '#CDFBAE',
    lime200: '#AFF382',
    lime300: '#A4E47A',
    lime400: '#98D471',
    lime500: '#8BC268',
    lime600: '#7CAD5C',
    lime700: '#6B944F',
    lime800: '#54753F',
    lime900: '#314525',
    green50: '#ECFEEE',
    green100: '#C1FCC7',
    green200: '#87F992',
    green300: '#7DEA88',
    green400: '#74D97F',
    green500: '#6AC774',
    green600: '#5FB167',
    green700: '#519859',
    green800: '#407846',
    green900: '#264629',
    teal50: '#EAFEF6',
    teal100: '#B8FCE1',
    teal200: '#83F6C9',
    teal300: '#7BE7BC',
    teal400: '#73D6AF',
    teal500: '#69C4A0',
    teal600: '#5DAF8F',
    teal700: '#50967A',
    teal800: '#3F7761',
    teal900: '#254539',
    cyan50: '#EDFCFE',
    cyan100: '#C5F6FC',
    cyan200: '#94EFFA',
    cyan300: '#7FE2ED',
    cyan400: '#76D2DC',
    cyan500: '#6CC0C9',
    cyan600: '#60ABB4',
    cyan700: '#52939A',
    cyan800: '#41747A',
    cyan900: '#264447',
    blue50: '#F6FAFF',
    blue100: '#E4EEFE',
    blue200: '#D1E2FD',
    blue300: '#BBD5FC',
    blue400: '#A3C6FA',
    blue500: '#88B5F9',
    blue600: '#78A1E0',
    blue700: '#678AC1',
    blue800: '#516D98',
    blue900: '#304059',
    indigo50: '#F9F9FF',
    indigo100: '#EDECFE',
    indigo200: '#E1DDFD',
    indigo300: '#D3CEFD',
    indigo400: '#C3BDFC',
    indigo500: '#B2AAFB',
    indigo600: '#9E93FA',
    indigo700: '#867BE6',
    indigo800: '#6A61B6',
    indigo900: '#3E396B',
    violet50: '#FCF8FF',
    violet100: '#F6E9FE',
    violet200: '#EFD9FD',
    violet300: '#E7C7FC',
    violet400: '#DFB3FB',
    violet500: '#D59CFA',
    violet600: '#C883F5',
    violet700: '#AB70D2',
    violet800: '#8759A6',
    violet900: '#4F3461',
    fuschia50: '#FFF7FE',
    fuschia100: '#FEE7FB',
    fuschia200: '#FDD4F9',
    fuschia300: '#FCC0F6',
    fuschia400: '#FBA8F2',
    fuschia500: '#F98CEE',
    fuschia600: '#E379D8',
    fuschia700: '#C368B9',
    fuschia800: '#9A5292',
    fuschia900: '#5A3056',
    pink50: '#FFF8FA',
    pink100: '#FEE8F1',
    pink200: '#FDD7E6',
    pink300: '#FCC3DA',
    pink400: '#FBAECC',
    pink500: '#FA94BC',
    pink600: '#EA7DA8',
    pink700: '#C96B90',
    pink800: '#9F5572',
    pink900: '#5D3243',
    neutral50: '#F9F9F9',
    neutral100: '#EDEDED',
    neutral200: '#E1E1E1',
    neutral300: '#D3D3D3',
    neutral400: '#C4C4C4',
    neutral500: '#B3B3B3',
    neutral600: '#A0A0A0',
    neutral700: '#898989',
    neutral800: '#6C6C6C',
    neutral900: '#3F3F3F',
    black50: '#0000000A',
    black100: '#00000014',
    black200: '#0000001A',
    black300: '#00000026',
    black400: '#00000033',
    black500: '#0000004D',
    black600: '#00000080',
    black700: '#000000B2',
    black800: '#000000CC',
    black900: '#000000',
    white50: '#FFFFFF0D',
    white100: '#FFFFFF14',
    white200: '#FFFFFF1A',
    white300: '#FFFFFF26',
    white400: '#FFFFFF33',
    white500: '#FFFFFF4D',
    white600: '#FFFFFF80',
    white700: '#FFFFFFB2',
    white800: '#FFFFFFCC',
    white900: '#FFFFFF',
  },
  space: {
    1: '0.125rem',
    2: '0.25rem',
    3: '0.5rem',
    4: '0.75rem',
    5: '1rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.5rem',
    10: '2.75rem',
    11: '3rem',
    12: '3.5rem',
    13: '4rem',
    14: '4.5rem',
    15: '5rem',
  },
  fontSizes: {
    xxs: '0.579rem',
    xs: '0.694rem',
    sm: '0.833rem',
    md: '1rem',
    lg: '1.2rem',
    xl: '1.44rem',
    '2xl': '1.728rem',
    '3xl': '2.074rem',
    '4xl': '2.488rem',
    '5xl': '2.986rem',
  },
  fonts: {
    body: 'sytem-ui',
    heading: 'sans-serif',
  },
  fontWeights: {
    1: '100',
    2: '200',
    3: '300',
    4: '400',
    5: '500',
    6: '600',
    7: '700',
    8: '800',
    9: '900',
  },
  lineHeights: {
    xxs: '0.75rem',
    xs: '1rem',
    sm: '1.25rem',
    md: '1.5rem',
    lg: '1.75rem',
    xl: '2rem',
    '2xl': '2.5rem',
    '3xl': '3rem',
    '4xl': '4rem',
  },
  letterSpacings: {},
  sizes: {
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    7: '28px',
    8: '32px',
    9: '36px',
    10: '40px',
    11: '44px',
    12: '48px',
    13: '52px',
    14: '56px',
    15: '60px',
    16: '64px',
    17: '68px',
    18: '72px',
    19: '76px',
    20: '80px',
    21: '84px',
    22: '88px',
    23: '92px',
    24: '96px',
    25: '100px',
    26: '104px',
    27: '108px',
    28: '112px',
    29: '116px',
    30: '120px',
    31: '124px',
    32: '128px',
    33: '132px',
    34: '136px',
  },
  borderWidths: {
    xs: '1px',
    sm: '2px',
    md: '3px',
  },
  borderStyles: {},
  radii: {
    xs: '3px',
    sm: '5px',
    md: '8px',
    lg: '10px',
    xl: '15px',
    '2xl': '20px',
    '3xl': '30px',
    round: '50%',
  },
  shadows: {
    sm: 'box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.04)',
  },
  zIndices: {},
  transitions: {},
};

export const {
  styled,
  theme,
  createTheme,
  globalCss,
  keyframes,
  config,
  reset,
  css,
} = createStitches({
  prefix: 'twigs',
  theme: defaultTheme,
  utils: {
    p: (value: Stitches.PropertyValue<'padding'>) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: Stitches.PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
  },
});

export const globalStyles = globalCss({
  ...resetStyles,
  '*': { margin: 0, padding: 0, fontFamily: '$body' },
  '*, :before, :after': { boxSizing: 'border-box' },
});
