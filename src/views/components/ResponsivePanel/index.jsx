import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

export const RESPONSIVE_PANEL_SPACING = { xs: '16px', sm: '32px' };

const ResponsivePanel = ({ small, children }) => {
  return (
    <Paper
      sx={{
        width: { xs: '100%', md: !!small ? '600px' : '800px' },
        margin: 'auto',
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Box p={{ xs: '0px 8px', sm: '0px 32px', md: '0px 64px' }} width="100%" textAlign="center">
        <Box mb={RESPONSIVE_PANEL_SPACING} />
        {children}
        <Box mb={RESPONSIVE_PANEL_SPACING} />
      </Box>
    </Paper>
  );
}

export default ResponsivePanel;