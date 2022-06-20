import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ResponsivePanel, {
  RESPONSIVE_PANEL_SPACING,
} from "../../components/ResponsivePanel";
import Button from "@mui/material/Button";
import ROUTE_NAMES from "../../../constants/routeNames";

const { START, HOME } = ROUTE_NAMES;
const Rules = () => {
  const navigate = useNavigate();
  const navigateToGame = useCallback(() => navigate(START), [navigate]);
  const navigateToHome = useCallback(() => navigate(HOME), [navigate]);
  return (
    <Box
      sx={{
        padding: { xs: "0px 8px", sm: "0px 16px", md: "0px 24px" },
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
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
              Select your response based on the answer you would like your child
              to provide.
            </Typography>
          </Box>
          <Box mb={RESPONSIVE_PANEL_SPACING}>
            <Typography align="justify">
              Remember to use this opportunity to connect with your child by
              having early and frequent discussions about online safety, so that
              they will instinctively approach you when in doubt.
            </Typography>
          </Box>
          <Button
            onClick={navigateToHome}
            variant="outlined"
            sx={{ margin: "10px" }}
          >
            Home
          </Button>
          <Button
            onClick={navigateToGame}
            variant="contained"
            sx={{ margin: "10px" }}
          >
            Start
          </Button>
        </Box>
      </ResponsivePanel>
    </Box>
  );
};

export default Rules;
