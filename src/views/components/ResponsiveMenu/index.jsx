import { useState, useCallback } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";
import ROUTE_NAMES from "../../../constants/routeNames";

const { HOME, ABOUT, RESOURCES, CONTACT } = ROUTE_NAMES;

export default function ResponsiveMenu() {
  const navigate = useNavigate();
  const navigateToHome = useCallback(() => navigate(HOME), [navigate, HOME]);
  const navigateToAbout = useCallback(() => navigate(ABOUT), [navigate, ABOUT]);
  const navigateToResources = useCallback(() => navigate(RESOURCES), [navigate, RESOURCES]);
  const navigateToContact = useCallback(() => navigate(CONTACT), [navigate, CONTACT]);
  const [open, setOpen] = useState(false);
  const toggleDrawer = useCallback(() => setOpen((state) => !state), []);
  return (
    <>
      <Box sx={{
        display: { xs: 'none', md: 'flex' },
        padding: '27px 50px'
      }}>
        <Box><Typography sx={{ fontFamily: 'Audiowide' }} variant="h4" color='white'>LOGO</Typography></Box>
        <Box sx={{ flexGrow: 1 }}></Box>
        <Button onClick={navigateToHome}>Home</Button>
        <Button onClick={navigateToAbout}>About</Button>
        <Button disabled>Blog</Button>
        <Button onClick={navigateToResources}>Resources</Button>
        <Button onClick={navigateToContact}>Contact</Button>
        <Button variant='outlined' disabled>Login</Button>
      </Box>
      <Box sx={{
        display: { xs: 'flex', md: 'none' },
        padding: '27px 50px'
      }}>
        <Box><Typography sx={{ fontFamily: 'Audiowide' }} variant="h4" color='white'>LOGO</Typography></Box>
        <Box sx={{ flexGrow: 1 }}></Box>
        <IconButton onClick={toggleDrawer} size="small" sx={{ ml: 2 }}>
          <MenuIcon sx={{ width: 32, height: 32 }} />
        </IconButton>
        <Drawer anchor="right" open={open} onClose={toggleDrawer}>
          <Box sx={{ width: '275px' }} role="presentation" onClick={toggleDrawer}>
            <List>
              <ListItem>
                <ListItemButton onClick={navigateToHome}>
                  <ListItemText sx={{ textAlign: 'right' }} primary="Home" />
                </ListItemButton>
              </ListItem>
              <ListItem><ListItemButton onClick={navigateToAbout}>
                <ListItemText sx={{ textAlign: 'right' }} primary="About" />
              </ListItemButton></ListItem>
              <ListItem><ListItemButton disabled>
                <ListItemText sx={{ textAlign: 'right' }} primary="Blog" />
              </ListItemButton></ListItem>
              <ListItem><ListItemButton onClick={navigateToResources}>
                <ListItemText sx={{ textAlign: 'right' }} primary="Resources" />
              </ListItemButton></ListItem>
              <ListItem><ListItemButton onClick={navigateToContact}>
                <ListItemText sx={{ textAlign: 'right' }} primary="Contact" />
              </ListItemButton></ListItem>
            </List>
            <Divider />
            <List>
              <ListItem><ListItemButton disabled>
                <ListItemText sx={{ textAlign: 'right' }} primary="Login" />
              </ListItemButton></ListItem>
            </List>
          </Box>
        </Drawer>
      </Box>
    </>
  );
}