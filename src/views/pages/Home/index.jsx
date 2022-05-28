import { useCallback } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import KidsPlaySafer from "../../assets/vectors/kids_play_safer.svg";
import BackgroundShapes from "../../assets/images/background_shapes.png";
import ROUTE_NAMES from "../../../constants/routeNames";

const { START } = ROUTE_NAMES;

const Home = () => {
  const navigate = useNavigate();
  const navigateToGame = useCallback(() => navigate(START), [navigate, START]);
  return (
    <Layout>
      <Box sx={{ height: '100%' }}>
        <Box sx={{
          height: '100%',
          paddingLeft: { xs: '20px', sm: '100px', md: '200px' },
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
            <Typography variant="h6" color="white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
            <Typography variant="h6" color="white">Massa egestas eleifend in nulla condimentum facilisi.</Typography>
          </Box>
          <Box mt="32px">
            <Button onClick={navigateToGame} variant='contained' sx={{ fontSize: '24px', height: '48px', borderRadius: '30px' }}>
              Start
            </Button>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}

export default Home;
