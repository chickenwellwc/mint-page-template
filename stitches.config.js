import { createStitches } from '@stitches/react'

export const { styled, getCssText, globalCss } = createStitches({
  media: {
    sm: '(max-width: 768px)',
    md: '(max-width: 1024px)',
    lg: '(max-width: 1440px)',
  },
  theme: {
    colors: {
      black: '#000000',
      black5: '#e3e3e3',
      black10: '#cccccc',
      black50: '#999999',
      black70: '#666666',
      white: '#ffffff',
      red: '#ff0000',
      primary: '$black',
      primary5: '$black5',
      primary10: '$black10',
      primary50: '$black50',
      primary70: '$black70',
      background: '$white',
    },

    space: {
      margin: '2rem',
      dmargin: '4rem',
      tmargin: '4rem',
    },
    fonts: {
      display:
        '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
      body: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    },
    fontSizes: {
      mast: '18rem',
      body: '1.6rem',
      heading: '1.6rem',
      caption: '1.6rem',
      small: '1.4rem',
    },
    lineHeights: {
      body: 1.6,
      display: 1.2,
    },
  },
})

export const globalStyles = globalCss({
  '@font-face': [],
  '*': {
    margin: 0,
    padding: 0,
    font: 'inherit',
    appearance: 'none',
    boxSizing: 'border-box',
    background: 'none',
    border: 'none',
    outline: 'none',
    color: 'inherit',
    textDecoration: 'none',
  },
  html: {
    fontSize: '10px',
    background: '$background',
  },
  body: {
    fontFamily: '$body',
    fontSize: '$body',
    lineHeight: '$body',
    color: '$primary',
    padding: '0',
    margin: '0',
  },
  em: {
    fontStyle: 'italic',
  },
  strong: {
    fontWeight: '600',
  },
})
