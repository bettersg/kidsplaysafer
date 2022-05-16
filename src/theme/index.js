import { createTheme } from '@mui/material/styles';

import BalsamiqSans from '../fonts/BalsamiqSans-Regular.ttf';
import Audiowide from '../fonts/Audiowide-Regular.ttf';

const typography = {
  fontFamily: 'Balsamiq Sans, Arial',
  color: 'white',
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
  MuiButton: {
    styleOverrides: {
      root: {
        height: '40px',
        padding: '0px 32px',
        borderRadius: '20px',
        fontFamily: 'Audiowide',
        fontSize: '16px',
        color: 'white',
      },
      contained: {
        boxShadow: '0px 4px 20px 5px rgba(255, 255, 255, 0.25)',
        background: 'linear-gradient(180deg, #FB4EC2 0%, #FF8DAD 100%)',
      },
      outlined: {
        border: '2px solid #FFFFFF',
      }
    },
  },
};

const muiTheme = createTheme({ typography, components });
export default muiTheme;
