import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton'
import PreviousNextButtons from "../PreviousNextButtons";

const AvatarPanel = ({ step, avatars, onPrevious, onSelect }) =>
  <Box textAlign="center">
    <Grid container spacing={{ xs: 1, sm: 2, md: 3 }} sx={{ maxWidth: '1000px' }}>
      <Grid item xs={12}>
        <Paper sx={{ padding: '24px' }}>
          <Typography variant="h4">Select your avatar!</Typography>
        </Paper>
      </Grid>
      {avatars.map((avatar, i) =>
        <Grid item xs={6} md={4} key={`${step}-${i}`}>
          <IconButton onClick={() => onSelect(avatar)} sx={{ padding: '0px' }}>
            <Paper sx={{ textAlign: 'center', padding: '24px' }}>
              <img src={avatar} alt={`child-${i}`} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </Paper>
          </IconButton>
        </Grid>
      )}
    </Grid>
    <Box margin="10px" />
    <PreviousNextButtons onPrevious={onPrevious} />
  </Box >;

export default AvatarPanel;