import { useState, useCallback } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import ROUTE_NAMES from "../../../constants/routeNames";

const { HOME, ABOUT, RESOURCES, CONTACT } = ROUTE_NAMES;

const ResponsiveMenu = ({ theme, onThemeChange }) => {
  const navigate = useNavigate();
  const navigateToHome = useCallback(() => navigate(HOME), [navigate]);
  const navigateToAbout = useCallback(() => navigate(ABOUT), [navigate]);
  const navigateToResources = useCallback(
    () => navigate(RESOURCES),
    [navigate]
  );
  const navigateToContact = useCallback(() => navigate(CONTACT), [navigate]);
  const [open, setOpen] = useState(false);
  const toggleDrawer = useCallback(() => setOpen((state) => !state), []);
  const handleChangeTheme = useCallback(
    (_, theme) => onThemeChange(theme),
    [onThemeChange]
  );
  return (
    <>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          padding: "27px 50px",
        }}
      >
        <Box sx={{ cursor: "pointer" }} onClick={navigateToHome}>
          <Typography variant="h4" color="white">
            KPS
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }}></Box>
        <Button onClick={navigateToHome}>Home</Button>
        <Button disabled onClick={navigateToAbout}>
          About
        </Button>
        <Button disabled onClick={navigateToResources}>
          Resources
        </Button>
        <Button disabled onClick={navigateToContact}>
          Contact
        </Button>
        <ToggleButtonGroup
          color="primary"
          value={theme}
          exclusive
          onChange={handleChangeTheme}
        >
          <ToggleButton value="kiddy" size="small">
            Kiddy
          </ToggleButton>
          <ToggleButton value="cyber" size="small">
            Cyber
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          padding: "16px",
        }}
      >
        <Box
          alignSelf="center"
          sx={{ cursor: "pointer" }}
          onClick={navigateToHome}
        >
          <Typography variant="h4" color="white">
            KPS
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }}></Box>
        <IconButton onClick={toggleDrawer} size="small" sx={{ ml: 2 }}>
          <MenuIcon sx={{ width: 32, height: 32 }} />
        </IconButton>
        <Drawer anchor="right" open={open} onClose={toggleDrawer}>
          <Box
            sx={{ width: "275px" }}
            role="presentation"
            onClick={toggleDrawer}
          >
            <List>
              <ListItem>
                <ListItemButton onClick={navigateToHome}>
                  <ListItemText
                    primaryTypographyProps={{ variant: "h4" }}
                    sx={{ textAlign: "right" }}
                    primary="Home"
                  />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton onClick={navigateToAbout}>
                  <ListItemText
                    primaryTypographyProps={{ variant: "h4" }}
                    sx={{ textAlign: "right" }}
                    primary="About"
                  />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton disabled>
                  <ListItemText
                    primaryTypographyProps={{ variant: "h4" }}
                    sx={{ textAlign: "right" }}
                    primary="Blog"
                  />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton onClick={navigateToResources}>
                  <ListItemText
                    primaryTypographyProps={{ variant: "h4" }}
                    sx={{ textAlign: "right" }}
                    primary="Resources"
                  />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton onClick={navigateToContact}>
                  <ListItemText
                    primaryTypographyProps={{ variant: "h4" }}
                    sx={{ textAlign: "right" }}
                    primary="Contact"
                  />
                </ListItemButton>
              </ListItem>
            </List>
            <Divider />
            <Box p="30px" textAlign="right">
              <ToggleButtonGroup
                color="primary"
                value={theme}
                exclusive
                onChange={handleChangeTheme}
              >
                <ToggleButton value="kiddy" size="small">
                  Kiddy
                </ToggleButton>
                <ToggleButton value="cyber" size="small">
                  Cyber
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>
          </Box>
        </Drawer>
      </Box>
    </>
  );
};

export default ResponsiveMenu;
