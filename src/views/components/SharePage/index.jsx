import { useRef, useCallback } from 'react'
import { useNavigate } from "react-router-dom";
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { RESPONSIVE_PANEL_SPACING } from "../ResponsivePanel";
import ROUTE_NAMES from "../../../constants/routeNames";

import {
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";

const { HOME } = ROUTE_NAMES;

const SharePage = ({ subcribe }) => {
  
  const normal_share =useRef(null);

  const navigate = useNavigate();
  const button1 = useRef(null);
  const button2 = useRef(null);
  const navigateToHome = useCallback(() => navigate(HOME), [navigate]);
  const share_click = () => {
    // e.preventDefault();
    if (navigator.share) {
      navigator
        .share({
          title: "Lets help kids to play safer!",
          url: "https://kidsplaysafer.sg",
        })
        .catch(console.error);
    } else {
      //fallback if the normal_share api is not supported by user's browser
      button1.current.style.display = "inline-flex";
      button2.current.style.display = "inline-flex";
      button1.current.style.zIndex = "2";
      button2.current.style.zIndex = "2";
      normal_share.current.style.display ="none";
    }}

  return (
    <>
      <Box mb={RESPONSIVE_PANEL_SPACING}>
        {subcribe === 1 &&
        <Typography variant="h4">Thank You for subscribing!</Typography>}
        {subcribe === 2 &&
        <Typography variant="h4">Play Again?</Typography>}
      </Box> 

      <Box mb={RESPONSIVE_PANEL_SPACING}>

      <Button
        onClick={navigateToHome}
        variant='outlined'
        sx={{ margin: '10px' }}
      >
        Return to home
      </Button>

      <Button
        onClick={share_click}
        variant='outlined'
        sx={{ margin: '10px' }}
        ref ={normal_share}
      >
        Share
      </Button>

      {/* fallback if the normal_share api is not supported by user's browser */}
      </Box>
      <Box mb={RESPONSIVE_PANEL_SPACING}>
      <WhatsappShareButton ref={button1} url="https://kidsplaysafer.sg" style={{display:"none" , zIndex:"-1", marginRight:"20px"}}>
        <WhatsappIcon size={50} />
      </WhatsappShareButton>
      <EmailShareButton style={{display:"none",zIndex:"-1"}}
       ref={button2}
        url="https://kidsplaysafer.sg"
        subject="Lets help kids to play safer!"
        body=" Enjoy and learn more online safety with your child/children while do this quiz with them!"
      >
        <EmailIcon size={50} round={true} />
      </EmailShareButton>

      </Box>
      </>
  );
}

export default SharePage;