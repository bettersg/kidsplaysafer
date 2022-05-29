import { createTheme, responsiveFontSizes } from '@mui/material/styles';

import Bangers from '../fonts/Bangers-Regular.ttf';
import Nunito from '../fonts/Nunito-Regular.ttf';

const orange = 'rgb(252, 174, 22)';

const palette = {
  primary: {
    main: 'rgb(252, 174, 22)',
  },
};

const typography = {
  fontFamily: 'Nunito, Arial',
  color: 'white',
  h1: {
    fontFamily: 'Bangers',
    color: orange,
    WebkitTextStroke: '0.5px white'
  },
  h2: {
    fontFamily: 'Bangers',
    color: orange,
    WebkitTextStroke: '0.5px white'
  },
  h3: {
    fontFamily: 'Bangers',
    color: orange,
    WebkitTextStroke: '0.5px white'
  },
  h4: {
    fontFamily: 'Bangers',
    color: orange,
    WebkitTextStroke: '0.5px black'
  },
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
      font-family: 'Bangers';
      font-style: normal;
      font-display: swap;
      font-weight: 400;
      src: local('Bangers'), local('Bangers-Regular'), url(${Bangers}) format('truetype');
    }
    `,
  },
  // TODO More customization needs to be made for the hover, clicked, active, and disabled states to be consistent
  MuiButton: {
    styleOverrides: {
      root: {
        height: '40px',
        padding: '0px 32px',
        borderRadius: '15px',
        fontSize: '16px',
        color: 'black',
        // '&:hover': {
        //   background: orange,
        // },
      },
      contained: {
        // background: orange,
        boxShadow: 'none',
        '&:disabled': {
          background: 'rgba(255, 255, 255, 0.12)',
        },
      },
      outlined: {
        border: 'none',
        background: 'white',
        '&:disabled': {
          background: 'rgba(255, 255, 255, 0.12)',
        },
      }
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        background: 'rgb(219, 36, 252)',
      }
    }
  }
};

const muiTheme = responsiveFontSizes(createTheme({ palette, typography, components }));
export default muiTheme;
