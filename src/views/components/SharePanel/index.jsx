import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { RESPONSIVE_PANEL_SPACING } from "../ResponsivePanel";
import ROUTE_NAMES from "../../../constants/routeNames";

import {
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";

const { HOME } = ROUTE_NAMES;

const SharePanel = ({ isSubscribed }) => {
  const navigate = useNavigate();
  const navigateToHome = useCallback(() => navigate(HOME), [navigate]);
  const handleShare = useCallback(() => {
    navigator
      .share({
        title: "Lets help kids to play safer!",
        url: "https://kidsplaysafer.sg",
      })
      .catch(console.error);
  }, []);
  return (
    <>
      <Box mb={RESPONSIVE_PANEL_SPACING}>
        {isSubscribed ? (
          <Typography variant="h4">Thank You for subscribing!</Typography>
        ) : (
          <Typography variant="h4">Play Again?</Typography>
        )}
      </Box>
      {!!navigator.share ? (
        <Box textAlign="center">
          <Button
            onClick={navigateToHome}
            variant="outlined"
            sx={{ margin: "10px" }}
          >
            Return to home
          </Button>
          <Box mb={RESPONSIVE_PANEL_SPACING} />
          <Button
            onClick={handleShare}
            variant="outlined"
            sx={{ margin: "10px" }}
          >
            Share
          </Button>
        </Box>
      ) : (
        <Box textAlign="center">
          <Button
            onClick={navigateToHome}
            variant="outlined"
            sx={{ margin: "10px" }}
          >
            Return to home
          </Button>
          <Box mb={RESPONSIVE_PANEL_SPACING} />
          <Typography variant="h6">
            Share this game with your friends!
          </Typography>
          <Box mb={RESPONSIVE_PANEL_SPACING} />
          <WhatsappShareButton
            url="https://kidsplaysafer.sg"
            style={{ marginRight: "20px" }}
          >
            <WhatsappIcon size={50} />
          </WhatsappShareButton>
          <EmailShareButton
            url="https://kidsplaysafer.sg"
            subject="Lets help kids to play safer!"
            body=" Enjoy and learn more online safety with your child/children while do this quiz with them!"
          >
            <EmailIcon size={50} round={true} />
          </EmailShareButton>
        </Box>
      )}
    </>
  );
};

export default SharePanel;
