import * as React from 'react';
// import { AbIconButton } from '.';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

interface AbMenuProps {
  items: string[];
  handleMenuChoice: (item: string) => void;
}

const AbMenu = ({
  items = ['Profile', 'Log Out'],
  handleMenuChoice = item => {
    console.log('item:', item);
  },
}: AbMenuProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChoice = (item: string) => {
    setAnchorEl(null);
    handleMenuChoice(item);
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <AccountCircleIcon
          sx={{
            color: 'white',
          }}
          fontSize="large"
        />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {items.map((item, i) => (
          <MenuItem key={i} onClick={() => handleChoice(item)}>
            {item}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export { AbMenu, AbMenuProps };
