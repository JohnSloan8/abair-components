import Box from '@mui/material/Box';
import React from 'react';

interface AbInteractionContainerProps {
  buttons?: React.ReactNode;
  textbox?: React.ReactNode;
  visualisation?: React.ReactNode;
  variation: 'synthesis' | 'recognition';
}

const AbInteractionContainer = ({
  buttons,
  textbox,
  visualisation,
  variation,
}: AbInteractionContainerProps) => {
  return (
    <Box
      px={{ sm: 4, xs: 1 }}
      pt={2}
      sx={{
        width: '100%',
        backgroundColor:
          variation === 'recognition' ? 'warning.light' : 'secondary.light',
        borderRadius: { sm: 3, xs: 0 },
        boxShadow: { sm: 6, xs: 3 },
        position: 'relative',
      }}
    >
      {variation === 'recognition' && visualisation}
      {textbox}
      <Box sx={{ width: '100%', height: 50 }}>{buttons}</Box>
    </Box>
  );
};

export { AbInteractionContainer, AbInteractionContainerProps };
