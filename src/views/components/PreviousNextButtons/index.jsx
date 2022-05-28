import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const spacing = "40px";

const PreviousNextButtons = ({ disabled, onPrevious, onNext }) =>
  <Box>
    {!!onPrevious && <Button
      onClick={onPrevious}
      variant='outlined'
      sx={{ fontSize: '24px', height: '48px', borderRadius: '30px', margin: '10px' }}
    >
      Back
    </Button>
    }
    {!!onNext && <Button
      disabled={disabled}
      onClick={onNext}
      variant='contained'
      sx={{ fontSize: '24px', height: '48px', borderRadius: '30px', margin: '10px' }}
      ml="10px"
    >
      Next
    </Button>
    }
  </Box>;

export default PreviousNextButtons;