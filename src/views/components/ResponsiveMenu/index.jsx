import { useCallback } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useNavigate } from "react-router-dom";
import ROUTE_NAMES from "../../../constants/routeNames";

const { HOME } = ROUTE_NAMES;

const ResponsiveMenu = () => {
  const navigate = useNavigate();
  const handleClickLogo = useCallback(() => navigate(HOME), [navigate]);
  return (
    <>
      <DesktopMenu onClickLogo={handleClickLogo} />
      <MobileMenu onClickLogo={handleClickLogo} />
    </>
  );
};

const DesktopMenu = ({ onClickLogo }) => (
  <Box
    sx={{
      display: { xs: "none", md: "flex" },
      padding: "27px 50px",
    }}
  >
    <Logo onClickLogo={onClickLogo} />
    <Box sx={{ flexGrow: 1 }} />
  </Box>
);

const MobileMenu = ({ onClickLogo }) => (
  <Box
    sx={{
      display: { xs: "flex", md: "none" },
      padding: "16px",
    }}
  >
    <Logo onClickLogo={onClickLogo} />
    <Box sx={{ flexGrow: 1 }} />
  </Box>
);

const Logo = ({ onClickLogo }) => (
  <Box alignSelf="center" sx={{ cursor: "pointer" }} onClick={onClickLogo}>
    <Typography variant="h4" color="white">
      KPS
    </Typography>
  </Box>
);

export default ResponsiveMenu;
