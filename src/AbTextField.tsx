import TextField from '@mui/material/TextField';
import React from 'react';

interface AbTextFieldProps {
  label: string;
  rows: number;
  disabled: boolean;
  autoFocus: boolean;
  value: string;
  onChange: (text: string) => void;
}

const AbTextField = ({
  label = 'type here',
  rows = 2,
  disabled = false,
  autoFocus = false,
  value,
  onChange,
}: AbTextFieldProps) => {
  return (
    <TextField
      onChange={e => onChange(e.target.value)}
      label={label}
      multiline
      rows={rows}
      value={value}
      autoFocus={autoFocus}
      disabled={disabled}
      fullWidth
      sx={{
        backgroundColor: 'white',
      }}
    />
  );
};

export { AbTextField, AbTextFieldProps };
