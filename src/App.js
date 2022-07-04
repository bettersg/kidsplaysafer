import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { cyberTheme, kiddyTheme } from "./theme";

import ROUTE_NAMES from "./constants/routeNames";

import Home from "./views/pages/Home";
import Start from "./views/pages/Start";
import Rules from "./views/pages/Rules";

// Routes rework: TODO AVATAR_SELECTION, START, QUESTIONS, PLAY_AGAIN etc
// should probably not be routes (they're part of a journey, e.g. we never start
// directly with AATAR_SELECTION without going through chosing a name),
// we can replace them with a state, e.g. step, in the GAME route
const { HOME, START, RULES } = ROUTE_NAMES;

const ROUTES = [
  { path: HOME, element: <Home />, exact: true },
  { path: START, element: <Start />, exact: true },
  { path: RULES, element: <Rules />, exact: true },
];

const App = () => {
  const [theme, setTheme] = useState("kiddy");
  return (
    <Router>
      <ThemeProvider theme={theme === "kiddy" ? kiddyTheme : cyberTheme}>
        <CssBaseline />
        <Routes>
          {ROUTES.map((route) => {
            const key = route.path === "" ? "/home" : route.path;
            return <Route {...route} key={key} />;
          })}
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default App;
