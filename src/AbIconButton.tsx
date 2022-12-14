import React, { FC } from 'react';

import { IconButton } from '@mui/material';
import type { SvgIconProps } from '@mui/material/SvgIcon';
import SvgIcon from '@mui/material/SvgIcon';

interface AbIconButtonProps {
  color?: 'primary' | 'secondary' | 'warning' | 'info';
  selected?: boolean;
  onClick: () => void;
  disabled?: boolean;
  icon?: FC<SvgIconProps>;
  fontSize?: "small" | "medium" | "large"
}

const AbIconButton = ({
  color="primary",
  selected=true,
  onClick=() => {console.log('clicked')},
  icon,
  disabled = false,
  fontSize = "large"
}: AbIconButtonProps) => {

  return (
    <IconButton
      disabled={disabled}
      sx={{
        color: selected ? `${color}.main` : `${color}.light`, '&:hover': { backgroundColor: 'rgba(0,0,0,0)', color: `${color}.dark` },
        backgroundColor: 'rgba(0,0,0,0)',
        m: 1,
        p: 0,
      }}
      onClick={onClick}
    >
      {icon !== undefined && <SvgIcon component={icon} fontSize={fontSize} />}
    </IconButton>
  );
};

export {AbIconButton, AbIconButtonProps};
