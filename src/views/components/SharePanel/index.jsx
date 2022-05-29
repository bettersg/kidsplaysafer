import * as React from 'react';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import ResponsivePanel, { RESPONSIVE_PANEL_SPACING } from "../ResponsivePanel";
import PreviousNextButtons from "../PreviousNextButtons";

const SharePanel = ({ onPrevious }) =>
  <ResponsivePanel small>
    <Box mb={RESPONSIVE_PANEL_SPACING}>
      <Typography variant="h4">Thanks for playing! Well Done!</Typography>
    </Box>
    <Box mb={RESPONSIVE_PANEL_SPACING}>
      <Typography>Sign up here if you want to receive alerts and be part of the community to build this tool.</Typography>
    </Box>
    <PreviousNextButtons onPrevious={onPrevious} />
  </ResponsivePanel>;

export default SharePanel;