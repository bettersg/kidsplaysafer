import * as React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import PreviousNextButtons from "../PreviousNextButtons";
import ResponsivePanel, { RESPONSIVE_PANEL_SPACING } from "../ResponsivePanel";

const AvatarPanel = ({ step, avatars, onPrevious, onSelect }) => {
  return (
    <Box textAlign="center">
      <ResponsivePanel>
        <Grid
          container
          spacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ maxWidth: "1000px" }}
        >
          <Grid item xs={12}>
            <Typography variant="h4">Select your avatar!</Typography>
            <Box mb={RESPONSIVE_PANEL_SPACING} />
          </Grid>
          {avatars.map((avatar, i) => (
            <Grid item xs={6} md={4} key={`${step}-${i}`}>
              <IconButton
                onClick={() => onSelect(avatar)}
                sx={{ padding: "0px" }}
              >
                <Box sx={{ textAlign: "center", padding: "12px" }}>
                  <img
                    src={avatar}
                    alt={`child-${i}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </IconButton>
            </Grid>
          ))}
        </Grid>
        <Box mb={RESPONSIVE_PANEL_SPACING} />
        <PreviousNextButtons onPrevious={onPrevious} />
      </ResponsivePanel>
    </Box>
  );
};

export default AvatarPanel;
