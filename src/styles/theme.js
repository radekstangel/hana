// theme settings

// color palette
export const color = {
  primary: '#009688',
  contrast: '#e91e63',
  primaryHover: '#00897b',  // primary mouse over
  contrastHover: '#d81b60', // contrast mouse over
  primaryDarker: '#00897b', // off-canvas bg
  primaryDark: '#00695c',   // app shell bg
  white: '#f7fcfb',         // content bg ... mix(#fff, primary, 97%)
  black: '#1f2b2a',         // headings ... mix(#222, primary, 92%)
  blackLight: '#3f4b49'     // text ... mix(#444, primary, 92%)
};

// font and text parameters
export const font = {
  family: {
    base: '"Helvetica Neue", Helvetica, Roboto, Arial, sans-serif',
    light: '"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif',
  },
  weight: {
    light: '300',
    normal: '400',
    bold: '700',
  },
  lineHeight: 1.5,
};

// media queries
export const media = {
  small: '@media (min-width: 34.0625em)',  // 545px
  medium: '@media (min-width: 42.8125em)', // 685px
  large: '@media (min-width: 52.3125em)',  // 837px
};

// navigation
export const nav = {
  offcanvasWidth: '14rem',  // 224px
  offcanvasBorder: '1px solid rgba(255, 255, 255, 0.15)',
  topbarHeight: '3.125rem', // 50px
  topbarBorder: '1px solid rgba(255, 255, 255, 0.2)',
  transitionTime: '0.35s',
};

// global radius
export const radius = '3px';
