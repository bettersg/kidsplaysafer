import Box from "@mui/material/Box";
import LogoTop from "../../assets/icons/logoTop.svg";
import Top from "../../assets/icons/top.svg";
import Bottom from "../../assets/icons/bottom.svg";
import Banner from "../../assets/icons/banner.svg";

const VARIANTS = {
  WELCOME: "welcome",
  AVATAR: "avatar",
  DARK_BLUE: "dark_blue",
  QUESTION: "question",
};

const Layout = ({ children, variant }) => {
  return (
    <>
      {(!variant ||
        variant === VARIANTS.WELCOME ||
        variant === VARIANTS.AVATAR ||
        variant === VARIANTS.QUESTION) && <WelcomeBackground />}
      {variant === VARIANTS.DARK_BLUE && <DarkBlueBackground />}
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {(!variant || variant === VARIANTS.WELCOME) && (
          <>
            <WelcomeHeader />
            <WelcomeFooter />
          </>
        )}
        {variant === VARIANTS.AVATAR && <AvatarHeader />}
        {variant === VARIANTS.QUESTION && (
          <>
            <QuestionHeader />
            <QuestionFooter />
          </>
        )}
        <Box
          sx={{
            height: "100%",
            width: "100%",
            zIndex: "2",
            textAlign: "center",
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
};

const WelcomeHeader = () => (
  <img
    src={LogoTop}
    width="100%"
    style={{
      position: "absolute",
      top: "0px",
    }}
  />
);

const WelcomeFooter = () => (
  <img
    src={Bottom}
    width="100%"
    style={{
      position: "absolute",
      bottom: "0px",
    }}
  />
);

const WelcomeBackground = () => (
  <Box
    sx={{
      position: "fixed",
      height: "100vh",
      width: "100vw",
      background: "linear-gradient(135deg, #A434B2, #325DDE, #4DA9E8)",
    }}
  />
);

const AvatarHeader = () => (
  <>
    <img
      src={Banner}
      width="100%"
      style={{
        position: "absolute",
        top: "0px",
      }}
    />
  </>
);

const QuestionHeader = () => (
  <>
    <img
      src={Top}
      width="100%"
      style={{
        position: "absolute",
        top: "0px",
      }}
    />
  </>
);

const QuestionFooter = () => (
  <>
    <img
      src={Bottom}
      width="100%"
      style={{
        position: "absolute",
        bottom: "0px",
      }}
    />
  </>
);

const DarkBlueBackground = () => (
  <Box
    sx={{
      position: "fixed",
      height: "100vh",
      width: "100vw",
      background: "#0c0f4b",
    }}
  />
);

export default Layout;
