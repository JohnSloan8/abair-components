import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';

interface AbMenuProps {
  items: string[];
  handleClick: (item: string) => void;
}

const AbMenu = ({
  items = ['Profile', 'Log Out'],
  handleClick = (item: string) => console.log(item),
}: AbMenuProps) => {
  return (
    <Paper sx={{ width: 140, maxWidth: '100%' }}>
      <MenuList dense>
        {items.map((item, i) => (
          <MenuItem key={i}>
            <ListItemText
              onClick={() => {
                handleClick(item);
              }}
            >
              {item}
            </ListItemText>
          </MenuItem>
        ))}
      </MenuList>
    </Paper>
  );
};

export { AbMenu, AbMenuProps };
