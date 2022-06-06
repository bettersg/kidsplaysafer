import { useCallback } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import KidsPlaySafer from "../../assets/vectors/kids_play_safer.svg";
import BackgroundShapes from "../../assets/images/background_shapes.png";
import DigitalForLife from "../../assets/images/digitalForLife.png";
import BetterSG from "../../assets/images/bettersg.png";
import ROUTE_NAMES from "../../../constants/routeNames";

const { START } = ROUTE_NAMES;

const Home = () => {
  const navigate = useNavigate();
  const navigateToGame = useCallback(() => navigate(START), [navigate]);
  return (
    <Layout>
      <Box sx={{ height: '100%' }}>
        <Box sx={{
          height: '100%',
          padding: { xs: '0px 20px 20px 20px', sm: '0px 100px', md: '0px 200px' },
          display: 'flex',
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "center",
          backgroundImage: `url(${BackgroundShapes})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right bottom',
          backgroundSize: '75vh',
        }}>
          <Box ml="-40px" mb="-60px" sx={{ display: { xs: 'none', md: 'block' } }}>
            <img
              src={KidsPlaySafer}
              alt="Kids Play Safer Text"
              width='650'
            />
          </Box>
          <Box ml="-30px" mb="-45px" sx={{ display: { xs: 'none', sm: 'block', md: 'none' } }}>
            <img
              src={KidsPlaySafer}
              alt="Kids Play Safer Text"
              width='460'
            />
          </Box>
          <Box ml="-20px" mb="-30px" sx={{ display: { xs: 'block', sm: 'none' } }}>
            <img
              src={KidsPlaySafer}
              alt="Kids Play Safer Text"
              width='325'
            />
          </Box>
          <Box>
            <Typography variant="h6" color="white">Understand how your kids behave online.</Typography>
            <Typography variant="h6" color="white">Discuss, educate, learn, there is no right or wrong answer.</Typography>
          </Box>
          <Box mt="32px">
            <Button onClick={navigateToGame} variant='contained' sx={{ fontSize: '24px', height: '48px', borderRadius: '30px' }}>
              Start
            </Button>
          </Box>
          <Box mt="80px" paddingRight={{ xs: '60px', sm: '0px' }} width={{ xs: '100%', sm: '70%', md: '600px' }}>
            <Grid container spacing={2} alignItems="stretch">
              <Grid item xs={12} sm={4} md={4}>
                <a href="https://www.digitalforlife.gov.sg/" target="_blank" rel="noreferrer">
                  <Paper
                    elevation={0}
                    sx={{
                      padding: "4px",
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      background: 'rgba(39, 2, 69, 0.6)',
                    }}>
                    <img
                      src={DigitalForLife}
                      alt="Digital For Life Logo"
                      width="100%"
                    />
                  </Paper>
                </a>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <a href="https://better.sg/" target="_blank" rel="noreferrer">
                  <Paper
                    elevation={0}
                    sx={{
                      padding: "4px",
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      background: 'rgba(255, 255, 255, 0.8)',
                    }}>
                    <img
                      src={BetterSG}
                      alt="Better.sg Logo"
                      width="100%"
                    />
                  </Paper>
                </a>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}

export default Home;
