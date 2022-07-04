import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ROUTE_NAMES from "../../../constants/routeNames";
import ResponsivePanel, { RESPONSIVE_PANEL_SPACING } from "../ResponsivePanel";
import Layout from "../Layout";
import PreviousNextButtons from "../PreviousNextButtons";

const { HOME } = ROUTE_NAMES;

const AboutPanel = ({ onNext }) => {
  const navigate = useNavigate();
  const navigateToHome = useCallback(() => navigate(HOME), [navigate]);
  return (
    <Layout variant="welcome">
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: "16px",
        }}
      >
        <Box sx={{ flexGrow: 1 }} />
        <Box mb={RESPONSIVE_PANEL_SPACING}>
          <Typography variant="h1">INTRODUCTION</Typography>
        </Box>
        <ResponsivePanel>
          <Box mb={RESPONSIVE_PANEL_SPACING}>
            <Typography variant="h4">About the Game</Typography>
          </Box>
          <Box mb={RESPONSIVE_PANEL_SPACING}>
            <Box mb={RESPONSIVE_PANEL_SPACING}>
              <Typography align="justify">
                The purpose of this quiz is to help you better understand how
                your child would naturally respond when playing online games.
              </Typography>
            </Box>
            <Box mb={RESPONSIVE_PANEL_SPACING}>
              <Typography align="justify">
                Both you (the parent) and your child will each answer the same
                list of questions. There is no right or wrong answer. Instead,
                the goal is to spark a conversation on online safety, bridge any
                knowledge gaps and foster closer family bonds.
              </Typography>
            </Box>
            <Box mb={RESPONSIVE_PANEL_SPACING}>
              <Typography align="justify">
                Use this opportunity to engage with your child. Ask them why
                they picked the particular option before proceeding to the next
                question.
              </Typography>
            </Box>
            <Box mb={RESPONSIVE_PANEL_SPACING}>
              <Typography align="justify">
                Their answers might surprise you.
              </Typography>
            </Box>
          </Box>
        </ResponsivePanel>
        <Box mb={RESPONSIVE_PANEL_SPACING} />
        <PreviousNextButtons onPrevious={navigateToHome} onNext={onNext} />
      </Box>
    </Layout>
  );
};

export default AboutPanel;
