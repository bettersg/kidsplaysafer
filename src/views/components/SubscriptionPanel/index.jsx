import { useState, useCallback, useMemo, useEffect } from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import TextField from "@mui/material/TextField";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import throttle from "lodash.throttle";
import ResponsivePanel, { RESPONSIVE_PANEL_SPACING } from "../ResponsivePanel";

const throttleTime = 2000;
const mailchimpUrl =
  "https://better.us10.list-manage.com/subscribe/post?u=5c87c359df2b6af39788321f4&amp;id=f06bc771c8";
/* eslint-disable no-control-regex */
const emailPattern =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
/* eslint-enable no-control-regex */
const isEmailValid = (email) => emailPattern.test(email);

const SubscriptionPanel = ({ onNext, onSubscribe }) => {
  const handleSubscribe = () => {
    onSubscribe();
    onNext();
  };
  return (
    <ResponsivePanel small>
      <Box mb={RESPONSIVE_PANEL_SPACING}>
        <Typography variant="h4">Thanks for playing!</Typography>
        <Typography variant="h4">Well Done!</Typography>
      </Box>
      <Box mb={RESPONSIVE_PANEL_SPACING}>
        <Typography>
          Sign up here if you want to receive alerts and be part of the
          community to build this tool.
        </Typography>
      </Box>
      <Box>
        <MailchimpSubscribe
          url={mailchimpUrl}
          render={({ subscribe, status, message }) => (
            <SubscriptionForm
              subscribe={subscribe}
              status={status}
              message={message}
              handleSubscribe={handleSubscribe}
            />
          )}
        />
      </Box>
      <Button onClick={onNext} variant="outlined" sx={{ margin: "10px" }}>
        SKIP
      </Button>
    </ResponsivePanel>
  );
};

const SubscriptionForm = ({ subscribe, status, message, handleSubscribe }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [throttled, setThrottled] = useState(false);
  const [unthrottleTimeout, setUnthrottleTimeout] = useState(null);
  useEffect(() => {
    if (status === "success") handleSubscribe();
    return () => {
      if (unthrottleTimeout != null) clearTimeout(unthrottleTimeout);
    };
  }, [status, unthrottleTimeout, handleSubscribe]);
  const throttledSubscribe = useMemo(
    () =>
      throttle((formData) => console.log(subscribe(formData)), throttleTime, {
        trailing: false,
      }),
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
        setUnthrottleTimeout(
          setTimeout(() => setThrottled(false), throttleTime)
        );
      }
    },
    [throttledSubscribe]
  );
  return (
    <Box component="form" onSubmit={submitHandler}>
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
      <LoadingButton
        type="submit"
        variant="contained"
        loading={status === "sending"}
        disabled={!isEmailValid(email) || throttled}
        sx={{ width: "196px", margin: "10px" }}
      >
        {status === "success"
          ? throttled
            ? "Subscribed!"
            : "Resubscribe"
          : "Subscribe"}
      </LoadingButton>
      {status === "error" && (
        <Typography sx={{ color: "red" }}>{message}</Typography>
      )}
    </Box>
  );
};

export default SubscriptionPanel;
