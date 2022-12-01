import React, { FC } from 'react';

import { IconButton } from '@mui/material';
import type { SvgIconProps } from '@mui/material/SvgIcon';
import SvgIcon from '@mui/material/SvgIcon';

interface AbIconButtonProps {
  color: 'primary' | 'secondary' | 'warning' | 'background';
  handleClick: () => void;
  disabled?: boolean;
  icon?: FC<SvgIconProps>;
}

const AbIconButton = ({
  color="primary",
  handleClick=() => {console.log('clicked')},
  icon,
  disabled = false,
}: AbIconButtonProps) => {

  return (
    <IconButton
      disabled={disabled}
      sx={{
        color: `${color}.main`,
        backgroundColor: 'rgba(0,0,0,0)',
        '&:hover': { backgroundColor: 'rgba(0,0,0,0)', color: `${color}.main` },
        m: 1,
        p: 0,
      }}
      onClick={handleClick}
    >
      {icon !== undefined && <SvgIcon component={icon} sx={{ color: `${color}.main`}} fontSize="large" />}
    </IconButton>
  );
};

export {AbIconButton, AbIconButtonProps};
