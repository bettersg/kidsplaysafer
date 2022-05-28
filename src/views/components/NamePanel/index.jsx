import * as React from 'react';
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import ResponsivePanel, { RESPONSIVE_PANEL_SPACING } from "../ResponsivePanel";
import PreviousNextButtons from "../PreviousNextButtons";

const spacing = "40px";

const NamePanel = ({ title, name, onChange, onPrevious, onNext }) =>
  <ResponsivePanel small>
    <Box mb={RESPONSIVE_PANEL_SPACING}><Typography variant="h4">{title}</Typography></Box>
    <Box mb={RESPONSIVE_PANEL_SPACING}><Typography variant="h4">Enter your name!</Typography></Box>
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
        onChange={onChange}
      />
    </Box>
    <PreviousNextButtons disabled={!name} onPrevious={onPrevious} onNext={onNext} />
  </ResponsivePanel >;

export default NamePanel;