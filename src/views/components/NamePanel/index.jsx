import { useState, useCallback } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import ResponsivePanel, { RESPONSIVE_PANEL_SPACING } from "../ResponsivePanel";
import PreviousNextButtons from "../PreviousNextButtons";

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
    <ResponsivePanel small>
      <Box mb={RESPONSIVE_PANEL_SPACING}>
        <Typography variant="h4">{title}</Typography>
      </Box>
      <Box mb={RESPONSIVE_PANEL_SPACING}>
        <Typography variant="h4">Enter your name!</Typography>
      </Box>
      <Box
        mb={RESPONSIVE_PANEL_SPACING}
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
          label="Name"
          type="text"
          fullWidth
          variant="standard"
          value={name}
          onChange={onNameChange}
          error={!!error}
          helperText={!!error ? error : null}
        />
      </Box>
      <PreviousNextButtons
        disabled={!name}
        onPrevious={onPrevious}
        onNext={onNext}
      />
    </ResponsivePanel>
  );
};

export default NamePanel;
