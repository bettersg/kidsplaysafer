import { createTheme, responsiveFontSizes } from '@mui/material/styles';

import Nunito from '../fonts/Nunito-Regular.ttf';
import Audiowide from '../fonts/Audiowide-Regular.ttf';

const palette = {
  mode: 'dark',
};

const typography = {
  fontFamily: 'Nunito',
  color: 'white',
  h1: {
    fontFamily: 'Audiowide',
    color: 'white',
    textShadow: '0em 0em 0.1em #cc00ff, 0em 0em 0.4em white'
  },
  h2: {
    fontFamily: 'Audiowide',
    color: 'white',
    textShadow: '0em 0em 0.1em #cc00ff, 0em 0em 0.4em white'
  },
  h3: {
    fontFamily: 'Audiowide',
    color: 'white',
    textShadow: '0em 0em 0.1em #cc00ff, 0em 0em 0.4em white'
  },
  h4: {
    fontFamily: 'Audiowide',
    color: 'white',
    textShadow: '0em 0em 0.1em #cc00ff, 0em 0em 0.4em white'
  },
  button: { fontFamily: 'Audiowide' },
};

const components = {
  MuiCssBaseline: {
    styleOverrides: `
      @font-face {
        font-family: 'Nunito';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src: local('Nunito'), local('Nunito-Regular'), url(${Nunito}) format('truetype');
      }
      @font-face {
        font-family: 'Audiowide';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src: local('Audiowide'), local('Audiowide-Regular'), url(${Audiowide}) format('truetype');
      }
    `,
  },
  // TODO More customization needs to be made for the hover, clicked, active, and disabled states to be consistent
  MuiButton: {
    styleOverrides: {
      root: {
        height: '40px',
        padding: '0px 32px',
        borderRadius: '20px',
        fontSize: '16px',
        color: 'white',
      },
      contained: {
        boxShadow: '0px 4px 20px 5px rgba(255, 255, 255, 0.25)',
        background: 'linear-gradient(180deg, #FB4EC2 0%, #FF8DAD 100%)',
        '&:disabled': {
          background: 'rgba(255, 255, 255, 0.12)',
        },
      },
      outlined: {
        border: '2px solid #FFFFFF',
      }
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        background: 'rgba(39, 2, 69, 0.8)',
      }
    }
  }
};

const muiTheme = responsiveFontSizes(createTheme({ palette, typography, components }));
export default muiTheme;
