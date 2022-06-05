import { useState, useCallback, useMemo } from 'react'
import { useNavigate } from "react-router-dom";
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import MailchimpSubscribe from "react-mailchimp-subscribe"
import throttle from "lodash.throttle";
import ResponsivePanel, { RESPONSIVE_PANEL_SPACING } from "../ResponsivePanel";
import ROUTE_NAMES from "../../../constants/routeNames";

const { HOME } = ROUTE_NAMES;

const throttleTime = 2000;
const mailchimpUrl = "https://better.us17.list-manage.com/subscribe/post?u=a0240e5eff33764063f2fe143&amp;id=4821260ae2";

const isEmailValid = (email) => !!(email.indexOf("@") > -1);

const SharePanel = () => {
  return (
    <ResponsivePanel small>
      <Box mb={RESPONSIVE_PANEL_SPACING}>
        <Typography variant="h4">Thanks for playing! Well Done!</Typography>
      </Box>
      <Box mb={RESPONSIVE_PANEL_SPACING}>
        <Typography>Sign up here if you want to receive alerts and be part of the community to build this tool.</Typography>
      </Box>
      <Box>
        <MailchimpSubscribe
          url={mailchimpUrl}
          render={({ subscribe, status, message }) =>
            <SubscriptionForm subscribe={subscribe} status={status} message={message} />
          }
        />
      </Box>
    </ResponsivePanel>
  );
}

const SubscriptionForm = ({ subscribe, status, message }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [throttled, setThrottled] = useState(false);
  const navigate = useNavigate();
  const navigateToHome = useCallback(() => navigate(HOME), [navigate]);
  const throttledSubscribe = useMemo(
    () => throttle(
      subscribe,
      throttleTime,
      { trailing: false }
    ),
    [subscribe]
  );
  const submitHandler = useCallback(
    (e) => {
      e.preventDefault();
      if (isEmailValid(e.target.email.value)) {
        throttledSubscribe({
          EMAIL: e.target.email.value,
          FULLNAME: e.target.name.value,
        });
        setThrottled(true);
        setTimeout(() => setThrottled(false), throttleTime);
      }
    }, [throttledSubscribe]);
  return (
    <Box component="form" onSubmit={submitHandler}>
      <Box mb={RESPONSIVE_PANEL_SPACING}>
        <Typography variant="h4" sx={{ color: status === "success" ? '#FF8DAD' : 'white' }}>
          {status === "success"
            ? "You are now subscribed!"
            : "Subscribe to our newletter!"
          }
        </Typography>
      </Box>
      <TextField
        autoFocus
        required
        margin="dense"
        id="email"
        label="Email"
        type="email"
        fullWidth
        variant="standard"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        margin="dense"
        id="fullname"
        label="Full Name"
        type="text"
        fullWidth
        variant="standard"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Box mb={RESPONSIVE_PANEL_SPACING} />
      <Button
        onClick={navigateToHome}
        variant='outlined'
        sx={{ margin: '10px' }}
      >
        Return to home
      </Button>
      <LoadingButton
        type="submit"
        variant="contained"
        loading={status === "sending"}
        disabled={!isEmailValid(email) || throttled}
        sx={{ width: '196px', margin: '10px' }}
      >
        {status === "success"
          ? throttled
            ? 'Subscribed!'
            : 'Resubscribe'
          : 'Subscribe'}
      </LoadingButton>
      {status === "error" && <Typography sx={{ color: 'red' }}>{message}</Typography>}
    </Box >
  );
};

export default SharePanel;