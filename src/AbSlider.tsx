import React, { FC } from 'react';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import type { SvgIconProps } from '@mui/material/SvgIcon';
import SvgIcon from '@mui/material/SvgIcon';

interface AbSliderProps {
  onChange: (event: Event) => void;
  icon?: FC<SvgIconProps>;
  iconSize?: 'medium'|'large',
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  color?: string;
}

const AbSlider = ({
  min=0,
  max=100,
  value,
  step=1,
  onChange,
  icon,
  iconSize='medium',
  color="secondary.main",
}: AbSliderProps) => {
  return (
    <Stack
      spacing={2}
      py={{ sm: 2, xs: 0.5 }}
      sx={{ width: '100%' }}
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      {icon !== undefined && <SvgIcon component={icon} sx={{ color: color }} fontSize={iconSize} />}
      <Slider
        aria-label="Speed"
        valueLabelDisplay="auto"
        value={value}
        min={min}
        step={step}
        max={max}
        sx={{ color: color }}
        onChange={onChange}
      />
    </Stack>
  );
};

export { AbSlider, AbSliderProps };