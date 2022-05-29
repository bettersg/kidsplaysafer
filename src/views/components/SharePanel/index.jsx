import { useCallback } from 'react'
import { useNavigate } from "react-router-dom";
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ResponsivePanel, { RESPONSIVE_PANEL_SPACING } from "../ResponsivePanel";
import ROUTE_NAMES from "../../../constants/routeNames";

const { HOME } = ROUTE_NAMES;

const SharePanel = () => {
  const navigate = useNavigate();
  const navigateToHome = useCallback(() => navigate(HOME), [navigate, HOME]);
  return (
    <ResponsivePanel small>
      <Box mb={RESPONSIVE_PANEL_SPACING}>
        <Typography variant="h4">Thanks for playing! Well Done!</Typography>
      </Box>
      <Box mb={RESPONSIVE_PANEL_SPACING}>
        <Typography>Sign up here if you want to receive alerts and be part of the community to build this tool.</Typography>
      </Box>
      <Box mb={RESPONSIVE_PANEL_SPACING}>
        <Typography variant="h4">COMING SOON</Typography>
      </Box>
      <Button
        onClick={navigateToHome}
        variant='outlined'
        sx={{ margin: '10px' }}
      >
        Return to home
      </Button>
    </ResponsivePanel>
  );
}

export default SharePanel;