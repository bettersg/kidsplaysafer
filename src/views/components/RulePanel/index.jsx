import * as React from 'react';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import ResponsivePanel, { RESPONSIVE_PANEL_SPACING } from "../ResponsivePanel";
import PreviousNextButtons from "../PreviousNextButtons";

const RulePanel = ({ onPrevious, onNext }) =>
  <ResponsivePanel small>
    <Box mb={RESPONSIVE_PANEL_SPACING}><Typography variant="h4">How To Play</Typography></Box>
    <Box mb={RESPONSIVE_PANEL_SPACING}>
      <Typography align="justify">
        For each question, let your child answer first, then record your response after.
        At the end of the quiz, the results will be compared.
        **Instructions to Parent**
        Select your response based on the answer you would like your child to provide.
        Remember to use this opportunity to connect with your child by having early and frequent discussions about online safety, so that they will instinctively approach you when in doubt.
      </Typography>
    </Box>
    <PreviousNextButtons onPrevious={onPrevious} onNext={onNext} />
  </ResponsivePanel>;

export default RulePanel;