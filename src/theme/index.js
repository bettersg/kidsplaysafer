import { createTheme, responsiveFontSizes } from '@mui/material/styles';

import BalsamiqSans from '../fonts/BalsamiqSans-Regular.ttf';
import Audiowide from '../fonts/Audiowide-Regular.ttf';

const palette = {
  mode: 'dark',
};

const typography = {
  fontFamily: 'Balsamiq Sans, Arial',
  color: 'white',
  h1: { fontFamily: 'Audiowide' },
  h2: { fontFamily: 'Audiowide' },
  h3: { fontFamily: 'Audiowide' },
  h4: { fontFamily: 'Audiowide' },
  button: { fontFamily: 'Audiowide' },
};

const components = {
  MuiCssBaseline: {
    styleOverrides: `
      @font-face {
        font-family: 'Balsamiq Sans';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src: local('BalsamiqSans'), local('BalsamiqSans-Regular'), url(${BalsamiqSans}) format('truetype');
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
