import Button from '@mui/material/Button';
import React from 'react';

interface AbButtonProps {
  /** primary: green, secondary: blue, warning: red */
  color: 'primary' | 'secondary' | 'warning';
  size?: 'medium' | 'large';
  borderRadius?: 0 | 2;
  disabled?: boolean;
  label: string;
  fullWidth?: boolean;
  selected?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

/** Abair Buttons */
const AbButton = ({
  onClick,
  label,
  fullWidth = false,
  selected = true,
  disabled = false,
  size = 'medium',
  color = 'primary',
  borderRadius = 2,
}: AbButtonProps) => {
  return (
    <Button
      variant={selected ? 'contained' : 'outlined'}
      disabled={disabled}
      onClick={onClick}
      color={color}
      size={size}
      sx={{ borderRadius: borderRadius }}
      fullWidth={fullWidth}
    >
      {label}
    </Button>
  );
};

export { AbButton, AbButtonProps };
