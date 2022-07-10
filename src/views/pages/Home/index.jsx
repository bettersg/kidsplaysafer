import { useCallback } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import KidsPlaySafer from "../../assets/vectors/kids_play_safer.svg";
import DigitalForLife from "../../assets/images/digitalForLife.png";
import BetterSG from "../../assets/images/bettersg.png";
import ROUTE_NAMES from "../../../constants/routeNames";

const { START, RULES } = ROUTE_NAMES;

const Home = () => {
  const navigate = useNavigate();
  const navigateToGame = useCallback(() => navigate(START), [navigate]);
  const navigateToRules = useCallback(() => navigate(RULES), [navigate]);
  return (
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
      }}
    >
      <Box ml="-40px" mb="-60px" sx={{ display: { xs: "none", md: "block" } }}>
        <img src={KidsPlaySafer} alt="Kids Play Safer Text" width="650" />
      </Box>
      <Box
        ml="-30px"
        mb="-45px"
        sx={{ display: { xs: "none", sm: "block", md: "none" } }}
      >
        <img src={KidsPlaySafer} alt="Kids Play Safer Text" width="460" />
      </Box>
      <Box ml="-20px" mb="-30px" sx={{ display: { xs: "block", sm: "none" } }}>
        <img src={KidsPlaySafer} alt="Kids Play Safer Text" width="325" />
      </Box>
      <Box>
        <Typography variant="h6" color="white">
          Understand how your kids behave online.
        </Typography>
        <Typography variant="h6" color="white">
          Discuss, educate, learn, there is no right or wrong answer.
        </Typography>
      </Box>
      <Box mt="32px">
        <Button
          onClick={navigateToRules}
          variant="outlined"
          sx={{
            mr: "32px",
            mb: "32px",
            fontSize: "24px",
            height: "48px",
            borderRadius: "30px",
          }}
        >
          How to play
        </Button>
        <Button
          onClick={navigateToGame}
          variant="contained"
          sx={{
            mr: "32px",
            mb: "32px",
            fontSize: "24px",
            height: "48px",
            borderRadius: "30px",
          }}
        >
          Start
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
