import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';
import { CenteredFlexBox } from '.';

interface AbSynthesisHistoryItemProps {
  voice: string;
  model: string;
  speed: string;
  pitch: string;
  text: string;
  onClick: () => void;
}

function AbSynthesisHistoryItem({
  voice = 'Sibéal',
  model = 'NEMO',
  speed = '1',
  pitch = '1',
  text = 'cad é sin',
  onClick = () => {
    console.log('clicked');
  },
}: AbSynthesisHistoryItemProps) {
  return (
    <Box
      py={1}
      my={1}
      sx={{
        width: '100%',
        backgroundColor: 'secondary.light',
        borderRadius: '3px',
        '&:hover': { backgroundColor: 'secondary.medium', cursor: 'pointer' },
      }}
      onClick={onClick}
    >
      <CenteredFlexBox>
        <Typography variant="body2" align="center">
          {`voice=${voice} : model=${model} : speed=${speed} : pitch=${pitch}`}
        </Typography>
      </CenteredFlexBox>
      <CenteredFlexBox>
        <Typography mt={1} fontStyle="italic" variant="body1" align="center">
          {`"${text}"`}
        </Typography>
      </CenteredFlexBox>
    </Box>
  );
}

export { AbSynthesisHistoryItem, AbSynthesisHistoryItemProps };
