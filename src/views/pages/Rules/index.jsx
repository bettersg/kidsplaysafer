import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ResponsivePanel, { RESPONSIVE_PANEL_SPACING } from "../../components/ResponsivePanel";
import Layout from "../../components/Layout";
import Button from '@mui/material/Button'
import ROUTE_NAMES from "../../../constants/routeNames";
import { useNavigate } from "react-router-dom";
import { useCallback } from 'react'

const { START,HOME } = ROUTE_NAMES;
const Rules = () => {
const navigate = useNavigate();
const navigateToGame = useCallback(() => navigate(START), [navigate]);
const navigateToHome = useCallback(() => navigate(HOME), [navigate]);
   return( <Layout>
  <ResponsivePanel small>
    <Box mb={RESPONSIVE_PANEL_SPACING}>
      <Typography variant="h4">How To Play</Typography>
    </Box>
    <Box mb={RESPONSIVE_PANEL_SPACING}>
      <Box mb={RESPONSIVE_PANEL_SPACING}>
        <Typography align="justify">
          For each question, let your child answer first, then record your
          response after.
        </Typography>
      </Box>
      <Box mb={RESPONSIVE_PANEL_SPACING}>
        <Typography align="justify">
          At the end of the quiz, the results will be compared.
        </Typography>
      </Box>
    </Box>
    <Box pb={RESPONSIVE_PANEL_SPACING} />
    <Box mb={RESPONSIVE_PANEL_SPACING}>
      <Typography variant="h4">Instructions to Parent</Typography>
    </Box>
    <Box mb={RESPONSIVE_PANEL_SPACING}>
      <Box mb={RESPONSIVE_PANEL_SPACING}>
        <Typography align="justify">
          Select your response based on the answer you would like your child to
          provide.
        </Typography>
      </Box>
      <Box mb={RESPONSIVE_PANEL_SPACING}>
        <Typography align="justify">
          Remember to use this opportunity to connect with your child by having
          early and frequent discussions about online safety, so that they will
          instinctively approach you when in doubt.
        </Typography>
      </Box>
      
      <Typography align="justify"></Typography>
      <Button onClick={navigateToHome} variant='outlined' sx={{ marginRight:'30px',fontSize: '24px', height: '48px', borderRadius: '30px' }}>
              Home
            </Button>
      <Button onClick={navigateToGame} variant='contained' sx={{ fontSize: '24px', height: '48px', borderRadius: '30px' }}>
              Start
            </Button>
    </Box>

  </ResponsivePanel>
  
  </Layout>)
};

export default Rules;
