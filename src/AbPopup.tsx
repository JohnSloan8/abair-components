import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';

import { AbButton } from '.';

import { CenteredFlexBox } from '.';

interface PopupButtonProps {
  text: string;
  color: 'warning' | 'primary';
}

interface AbPopupProps {
  title: string;
  description?: string;
  condition1?: string;
  borderColor?: string;
  buttons: PopupButtonProps[];
  onClick: (agree: boolean) => void;
}

function AbPopup({
  title = 'Test Title',
  description = 'this is a test of the popup feature',
  condition1 = 'more conditions incase there needs further explanation',
  borderColor = 'warning.main',
  buttons = [
    { text: 'disagree', color: 'warning' },
    { text: 'agree', color: 'primary' },
  ],
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
        {buttons.map((b: PopupButtonProps, i: number) => (
          <Box m={1}>
            <AbButton
              label={b.text}
              selected={true}
              color={b.color}
              onClick={() => {
                i === 0 ? onClick(false) : onClick(true);
              }}
            />
          </Box>
        ))}
      </CenteredFlexBox>
    </Box>
  );
}

export { AbPopup, AbPopupProps };
