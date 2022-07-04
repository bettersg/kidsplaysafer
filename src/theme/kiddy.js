import { createTheme, responsiveFontSizes } from "@mui/material/styles";

import Bangers from "../fonts/Bangers-Regular.ttf";
import Nunito from "../fonts/Nunito-Regular.ttf";

export const orange = "#fcaf16";
export const white = "#ffffff";

const palette = {
  mode: "dark",
  primary: {
    main: orange,
  },
};

const typography = {
  fontFamily: "Arial",
  color: "white",
  h1: {
    fontFamily: "Bangers",
    color: orange,
    WebkitTextStroke: "0.5px black",
  },
  h2: {
    fontFamily: "Bangers",
    color: orange,
    WebkitTextStroke: "0.5px black",
  },
  h3: {
    fontFamily: "Bangers",
    color: orange,
    WebkitTextStroke: "0.5px black",
  },
  h4: {
    fontFamily: "Bangers",
    color: orange,
    WebkitTextStroke: "0.5px black",
  },
  h5: {
    fontFamily: "Arial",
    color: white,
    fontSize: "18px",
    fontWeight: "700",
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
        height: "40px",
        padding: "0px 32px",
        borderRadius: "15px",
        fontSize: "18pt",
        fontWeight: "700",
        textTransform: "none",
      },
      contained: {
        boxShadow: "none",
        "&:disabled": {
          background: "rgba(255, 255, 255, 0.12)",
        },
      },
      outlined: {
        color: "black",
        background: "white",
        borderColor: "black",
        "&:hover": {
          borderColor: "black",
          backgroundColor: "white",
        },
        "&:disabled": {
          background: "rgba(255, 255, 255, 0.12)",
        },
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        background: "rgb(219, 36, 252)",
      },
    },
  },
  MuiInput: {
    styleOverrides: {
      input: {
        fontSize: "24px",
        fontWeight: "700",
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        width: "100%",
        textAlign: "center",
        fontSize: "24px",
        fontWeight: "700",
      },
      shrink: {
        display: "none",
      },
    },
  },
};

const kiddyTheme = responsiveFontSizes(
  createTheme({ palette, typography, components })
);
export default kiddyTheme;
