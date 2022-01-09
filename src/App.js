import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Bangers from "./fonts/Bangers-Regular.ttf";

import ROUTE_NAMES from "./constants/routeNames";

import Home from "./views/pages/Home";
import Start from "./views/pages/Start";
import About from "./views/pages/About";
import Contact from "./views/pages/Contact";
import AvatarSelection from "./views/pages/AvatarSelection";
import MailerForm from "./views/pages/MailerForm";
import Introduction from "./views/pages/Introduction";
const {
  HOME,
  START,
  ABOUT,
  CONTACT,
  AVATAR_SELECTION,
  MAILER_FORM,
  INTRODUCTION,
} = ROUTE_NAMES;

const ROUTES = [
  { path: HOME, element: <Home />, exact: true },
  { path: START, element: <Start />, exact: true },
  { path: ABOUT, element: <About />, exact: true },
  { path: CONTACT, element: <Contact />, exact: true },
  { path: AVATAR_SELECTION, element: <AvatarSelection />, exact: true },
  { path: MAILER_FORM, element: <MailerForm />, exact: true },
  { path: INTRODUCTION, element: <Introduction />, exact: true },
];

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        {ROUTES.map((route) => {
          const key = route.path === "" ? "/home" : route.path;
          return <Route {...route} key={key} />;
        })}
      </Routes>
    </Router>
  );
};

export default App;

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Bangers';
    src: url(${Bangers});
  }

  html, body {
    font-size: 16px;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  *, *:before, *:after {
    font-family: 'Bangers', 'Open Sans', sans-serif;
    box-sizing: inherit;
  }
`;
