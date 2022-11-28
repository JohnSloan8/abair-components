import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';

import { AbButton } from '.';

import { CenteredFlexBox } from '.';

interface AbPopupProps {
  title: string;
  description?: string;
  condition1?: string;
  borderColor?: string;
  onClick: (agree: boolean) => void;
}

function AbPopup({
  title = 'Test Title',
  description = 'this is a test of the popup feature',
  condition1 = 'more conditions incase there needs further explanation',
  borderColor = 'primary.main',
  onClick,
}: AbPopupProps) {
  return (
    <Box
      width={400}
      border={3}
      p={2}
      sx={{
        backgroundColor: 'background.paper',
        borderColor: borderColor,
        borderRadius: 3,
      }}
    >
      <Typography variant={'h6'} py={3} color="text.main" align="center">
        {title}
      </Typography>

      <Typography variant={'body1'} py={3} color="text.main" align="center">
        {description}
      </Typography>

      <Typography variant={'body1'} py={3} color="text.main" align="center">
        {condition1}
      </Typography>

      <CenteredFlexBox pb={2}>
        <Box m={1}>
          <AbButton
            label={'disagree'}
            selected={true}
            color={'warning'}
            onClick={() => {
              onClick(false);
            }}
          />
        </Box>
        <Box m={1}>
          <AbButton
            label={'agree'}
            selected={true}
            color={'primary'}
            onClick={() => {
              onClick(true);
            }}
          />
        </Box>
      </CenteredFlexBox>
    </Box>
  );
}

export { AbPopup, AbPopupProps };
