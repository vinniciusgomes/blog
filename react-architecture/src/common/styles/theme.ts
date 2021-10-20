export const spacings = {
  space01: '0.4rem',
  space02: '0.8rem',
  space03: '1.2rem',
  space04: '1.6rem',
  space05: '2.4rem',
  space06: '3.2rem',
  space07: '4rem',
  space08: '4.8rem',
  space09: '5.6rem',
  space10: '6.4rem',
  space11: '7.2rem',
  space12: '8rem',
  space13: '8.8rem',
  space14: '9.6rem',
} as const;

export const primaryColors = {
  white: '#FFFFFF',
  black: '#000000',
} as const;

export const secondaryColors = {
  yellow: '#FFCC33',
  green: '#63BA68',
} as const;

export const font = {
  light: 300,
  normal: 400,
  semiBold: 600,
  bold: 700,
  sizes: {
    xSmall: '1.2rem',
    small: '1.4rem',
    normal: '1.6rem',
    large: '1.8rem',
    heading06: '2rem',
    heading05: '2.4rem',
    heading04: '2.8rem',
    heading03: '3.2rem',
    heading02: '3.6rem',
    heading01: '4.2rem',
  },
  lineHeight: {
    xSmall: '1.8rem',
    small: '2.1rem',
    normal: '2.4rem',
    large: '2.7rem',
    heading06: '2.8rem',
    heading05: '2.9rem',
    heading04: '3.4rem',
    heading03: '3.8rem',
    heading02: '4.3rem',
    heading01: '5rem',
  },
  family: {
    Inter: "'Inter',sans-serif",
  },
} as const;

export const ZIndex = {
  base: 10,
  dropdown: 15,
  menu: 20,
  overlay: 30,
  modal: 40,
} as const;

export const breakpoints = {
  small: '576px',
  medium: '768px',
  large: '992px',
  xlarge: '1200px',
  xxlarge: '1400px',
} as const;
