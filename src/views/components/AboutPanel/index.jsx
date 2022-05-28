import * as React from 'react';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import ResponsivePanel, { RESPONSIVE_PANEL_SPACING } from "../ResponsivePanel";
import PreviousNextButtons from "../PreviousNextButtons";

const AboutPanel = ({ onPrevious, onNext }) =>
  <ResponsivePanel small>
    <Box mb={RESPONSIVE_PANEL_SPACING}><Typography variant="h4">About the Game</Typography></Box>
    <Box mb={RESPONSIVE_PANEL_SPACING}>
      <Typography align="justify">
        The purpose of this quiz is to help you better understand how your child would naturally respond when playing online games.
        Both you (the parent) and your child will each answer the same list of questions. There is no right or wrong answer. Instead, the goal is to spark a conversation on online safety, bridge any knowledge gaps and foster closer family bonds.
        Use this opportunity to engage with your child. Ask them why they picked the particular option before proceeding to the next question.
        Their answers might surprise you.
      </Typography>
    </Box>
    <PreviousNextButtons onPrevious={onPrevious} onNext={onNext} />
  </ResponsivePanel>;

export default AboutPanel;