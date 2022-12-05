import Box from '@mui/material/Box';
import React from 'react';

interface AbInteractionContainerProps {
  buttons: React.ReactNode;
  textbox: React.ReactNode;
  visualisation?: React.ReactNode;
  voiceRecording?: boolean;
  color: 'warning.light' | 'secondary.light';
}

const AbInteractionContainer = ({
  buttons,
  textbox,
  visualisation,
  voiceRecording,
  color,
}: AbInteractionContainerProps) => {
  return (
    <Box
      px={{ sm: 4, xs: 1 }}
      pt={2}
      sx={{
        width: '100%',
        backgroundColor: color,
        borderRadius: { sm: 3, xs: 0 },
        boxShadow: { sm: 6, xs: 3 },
        position: 'relative',
      }}
    >
      <Box>{textbox}</Box>
      {color === 'warning.light' && (
        <Box>{voiceRecording && visualisation}</Box>
      )}
      <Box sx={{ width: '100%', height: 50 }}>{buttons}</Box>
    </Box>
  );
};

export { AbInteractionContainer, AbInteractionContainerProps };
