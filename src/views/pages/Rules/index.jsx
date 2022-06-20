import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ResponsivePanel, {
  RESPONSIVE_PANEL_SPACING,
} from "../../components/ResponsivePanel";
import Layout from "../../components/Layout";
import Button from "@mui/material/Button";
import ROUTE_NAMES from "../../../constants/routeNames";
import BackgroundShapes from "../../assets/images/background_shapes.png";

const { START, HOME } = ROUTE_NAMES;
const Rules = () => {
  const navigate = useNavigate();
  const navigateToGame = useCallback(() => navigate(START), [navigate]);
  const navigateToHome = useCallback(() => navigate(HOME), [navigate]);
  return (
    <Layout>
      <Box sx={{ height: "100%" }}>
        <Box
          sx={{
            height: "100%",
            padding: {
              xs: "0px 20px 20px 20px",
              sm: "0px 100px",
              md: "0px 200px",
            },
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "center",
            backgroundImage: `url(${BackgroundShapes})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right bottom",
            backgroundSize: "75vh",
          }}
        >
          <ResponsivePanel small>
            <Box mb={RESPONSIVE_PANEL_SPACING}>
              <Typography variant="h4">How To Play</Typography>
            </Box>
            <Box mb={RESPONSIVE_PANEL_SPACING}>
              <Box mb={RESPONSIVE_PANEL_SPACING}>
                <Typography align="justify">
                  For each question, let your child answer first, then record
                  your response after.
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
                  Select your response based on the answer you would like your
                  child to provide.
                </Typography>
              </Box>
              <Box mb={RESPONSIVE_PANEL_SPACING}>
                <Typography align="justify">
                  Remember to use this opportunity to connect with your child by
                  having early and frequent discussions about online safety, so
                  that they will instinctively approach you when in doubt.
                </Typography>
              </Box>
              <Typography align="justify"></Typography>
              <Button
                onClick={navigateToHome}
                variant="outlined"
                sx={{
                  marginRight: "30px",
                  fontSize: "24px",
                  height: "48px",
                  borderRadius: "30px",
                }}
              >
                Home
              </Button>
              <Button
                onClick={navigateToGame}
                variant="contained"
                sx={{ fontSize: "24px", height: "48px", borderRadius: "30px" }}
              >
                Start
              </Button>
            </Box>
          </ResponsivePanel>
        </Box>
      </Box>
    </Layout>
  );
};

export default Rules;
