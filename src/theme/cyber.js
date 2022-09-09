import { createTheme, responsiveFontSizes } from "@mui/material/styles";

import Nunito_Regular from "../fonts/Nunito-Regular.ttf";
import Audiowide from "../fonts/Audiowide-Regular.ttf";
import Nunito_Bold from "../fonts/Nunito-Black.ttf";
import Nunito_Semi from "../fonts/Nunito-SemiBold.ttf";
const palette = {
  mode: "dark",
};

const typography = {
  fontFamily: "Nunito",
  color: "white",
  h1: {
    fontFamily: "Audiowide",
    fontWeight: 900,
  },
  h2: {
    fontWeight: 900,
    textShadow: "0em 0em 0.1em #cc00ff, 0em 0em 0.4em white",
  },
  h3: {
    fontWeight: 900,
    textShadow: "0em 0em 0.1em #cc00ff, 0em 0em 0.4em white",
  },
  h4: {
    fontWeight: 900,
    textShadow: "0em 0em 0.1em #cc00ff, 0em 0em 0.4em white",
  },
  button: {
    fontWeight: 700,
    fontSize: "16px",
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
        src: local('Nunito_Regular'), local('Nunito-Regular'), url(${Nunito_Regular}) format('truetype');
      }
      @font-face {
        font-family: 'Audiowide';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src: local('Audiowide'), local('Audiowide-Regular'), url(${Audiowide}) format('truetype');
      }
      @font-face {
        font-family: 'Nunito';
        font-style: normal;
        font-display: swap;
        font-weight: 600;
        src: local('Nunito_Semi'), local('Nunito-SemiBold'), url(${Nunito_Semi}) format('truetype');
      }

      @font-face {
        font-family: 'Nunito';
        font-style: normal;
        font-display: swap;
        font-weight: 900;
        src: local('Nunito_Bold'), local('Nunito-Black'), url(${Nunito_Bold}) format('truetype');
      }
    `,
  },
  // TODO More customization needs to be made for the hover, clicked, active, and disabled states to be consistent
  MuiButton: {
    styleOverrides: {
      root: {
        height: "40px",
        padding: "0px 32px",
        borderRadius: "20px",
        color: "white",
        fontWeight: 600,
      },
      contained: {
        boxShadow: "0px 4px 20px 5px rgba(255, 255, 255, 0.25)",
        background: "linear-gradient(180deg, #FB4EC2 0%, #FF8DAD 100%)",
        "&:disabled": {
          background: "rgba(255, 255, 255, 0.12)",
        },
        color: "#1E024A",
      },
      outlined: {
        boxShadow: "0px 4px 20px 5px rgba(255, 255, 255, 0.25)",
        border: "2px solid #FFFFFF",
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        background: "#1E024A",
        border: "8px solid #C2BAFF",
        boxShadow: "0px 12px 0px #432490",
        borderRadius: "35px",
      },
    },
  },
};

const cyberTheme = responsiveFontSizes(
  createTheme({ palette, typography, components })
);
export default cyberTheme;
