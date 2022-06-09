import Box from '@mui/material/Box'
import ResponsiveMenu from '../ResponsiveMenu';
import BackgroundShapes from "../../assets/images/background_shapes.png";

const Layout = ({ children, theme, onThemeChange }) => {
  return (
    <Box sx={{
      height: "100vh",
      width: "100vw",
      background: theme === 'kiddy'
        ? 'linear-gradient(135deg, #A434B2, #325DDE, #4DA9E8)'
        : "linear-gradient(180deg, #46357A 0%, #21012A 100%)",
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        height: "100vh",
        width: "100vw",
        backgroundImage: theme === 'kiddy' ? null : `url(${BackgroundShapes})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right bottom',
        backgroundSize: '75vh',
      }}>
        <ResponsiveMenu theme={theme} onThemeChange={onThemeChange} />
        <Box sx={{ flexGrow: 1 }}>{children}</Box>
      </Box>
    </Box >);
}

export default Layout;
