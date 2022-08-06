import { useCallback } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
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
      <Box mb="8px" sx={{ display: { xs: "none", md: "block" } }}>
        <Typography variant="h1">KIDS</Typography>
        <Typography variant="h1">PLAYSAFER</Typography>
      </Box>
      <Box mb="12px" sx={{ display: { xs: "none", sm: "block", md: "none" } }}>
        <Typography variant="h1">KIDS</Typography>
        <Typography variant="h1">PLAYSAFER</Typography>
      </Box>
      <Box mb="24px" sx={{ display: { xs: "block", sm: "none" } }}>
        <Typography variant="h1" sx={{ fontSize: "2.9rem" }}>
          KIDS
        </Typography>
        <Typography variant="h1" sx={{ fontSize: "2.9rem" }}>
          PLAYSAFER
        </Typography>
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
            fontWeight: 900,
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
            fontWeight:900,
          }}
        >
          Start
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
