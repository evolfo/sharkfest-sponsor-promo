export default {
  initialColorMode: 'light',
  useCustomProperties: false,
  fonts: {
    body: 'Helvetica',
    heading: 'Muli',
  },
  fontWeights: {
    body: 300,
    heading: 400,
    bold: 700,
  },
  lineHeights: {
    body: '110%',
    heading: 1.125,
    tagline: '100px',
  },
  letterSpacing: {
    body: '2px',
    text: '5px',
  },
  space: {
    headerPadding: '0rem 1rem 0rem 1rem',
    headerLogoTopPadding: '2rem',
    headerBottomMarginFix: '.5rem !important',
  },
  colors: {
    text: '#121212',
    background: '#FFFfff',
    primary: '#000010',
    secondary: '#E7E7E9',
    secondaryDarker: '#212935',
    accent: '#DE3C4B',
    secondaryBackground:
      'linear-gradient(to bottom, rgb(0, 36, 72), rgb(1, 56, 111))',
    modes: {
      dark: {
        text: '#000010',
        background: '#FFFfff',
        primary: '#000010',
        secondary: '#E7E7E9',
        secondaryDarker: '#212935',
        accent: '#DE3C4B',
      },
    },
  },
  breakpoints: ['42em', '56em', '64em'],
}
