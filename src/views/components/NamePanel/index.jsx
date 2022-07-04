import { useState, useCallback } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { RESPONSIVE_PANEL_SPACING } from "../ResponsivePanel";
import PreviousNextButtons from "../PreviousNextButtons";
import Layout from "../Layout";

const maxNameLength = 24;

const NamePanel = ({ title, name, onChange, onPrevious, onNext }) => {
  const [error, setError] = useState("");
  const onNameChange = useCallback(
    (e) => {
      if (e.target.value?.length <= maxNameLength) {
        onChange(e.target.value);
        setError("");
      } else setError("Name should be at most 24 characters");
    },
    [onChange]
  );
  return (
    <Layout variant="avatar">
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: "16px",
        }}
      >
        <Box sx={{ height: "175px" }} />
        <Box mb={RESPONSIVE_PANEL_SPACING}>
          <Typography variant="h5">{title}</Typography>
        </Box>
        <Box mb={RESPONSIVE_PANEL_SPACING} textAlign="center">
          <Typography variant="h1">Enter</Typography>
          <Typography variant="h1">your</Typography>
          <Typography variant="h1">name!</Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box
          mb={RESPONSIVE_PANEL_SPACING}
          width="70%"
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
            onNext();
          }}
        >
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter your name"
            type="text"
            fullWidth
            variant="standard"
            value={name}
            onChange={onNameChange}
            error={!!error}
            helperText={!!error ? error : null}
          />
        </Box>
        <Box height="20px" />
        <PreviousNextButtons
          disabled={!name}
          onPrevious={onPrevious}
          onNext={onNext}
        />
        <Box height="40px" />
      </Box>
    </Layout>
  );
};

export default NamePanel;
