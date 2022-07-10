import Box from "@mui/material/Box";
import ResponsiveMenu from "../ResponsiveMenu";
import BackgroundShapes from "../../assets/vectors/background.svg";

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        background: "linear-gradient(180deg, #46357A 0%, #21012A 100%)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          width: "100vw",
          backgroundImage: `url(${BackgroundShapes})`,
        }}
      >
        <ResponsiveMenu />
        <Box sx={{ flexGrow: 1 }}>{children}</Box>
      </Box>
    </Box>
  );
};

export default Layout;
