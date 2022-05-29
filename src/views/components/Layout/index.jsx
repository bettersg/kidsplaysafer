import Box from '@mui/material/Box'
import ResponsiveMenu from '../ResponsiveMenu';
import ROUTE_NAMES from "../../../constants/routeNames";

const { HOME, ABOUT, RESOURCES, CONTACT } = ROUTE_NAMES;

const Layout = ({ children }) => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      height: "100vh",
      width: "100vw",
      background: "linear-gradient(180deg, #46357A 0%, #21012A 100%)",
    }}>
      <ResponsiveMenu />
      <Box sx={{ flexGrow: 1 }}>{children}</Box>
    </Box >);
}

export default Layout;
