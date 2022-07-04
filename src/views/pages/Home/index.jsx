import { useCallback } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import ROUTE_NAMES from "../../../constants/routeNames";
import Layout from "../../components/Layout";

const { START, RULES } = ROUTE_NAMES;

const Home = () => {
  const navigate = useNavigate();
  const navigateToGame = useCallback(() => navigate(START), [navigate]);
  return (
    <Layout>
      <Box
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Typography variant="h1" color="#ba43db">
          Welcome
        </Typography>
        <Box height="24px" />
        <Button
          variant="contained"
          sx={{ backgroundColor: "#dc24fc" }}
          onClick={navigateToGame}
        >
          Start
        </Button>
        <Box height="15%" />
      </Box>
    </Layout>
  );
};

export default Home;
