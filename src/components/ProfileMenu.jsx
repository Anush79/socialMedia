import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { AutoAwesome, Logout, ManageAccountsRounded, Settings } from '@mui/icons-material';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(false);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={anchorEl ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={anchorEl ? 'true' : undefined}
        onClick={handleClick}
      >
        <Settings/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={anchorEl}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><AutoAwesome/>Change Theme</MenuItem>
        <MenuItem onClick={handleClose}><ManageAccountsRounded/>Edit Profile</MenuItem>
        <MenuItem onClick={handleClose}><Logout/> Logout</MenuItem>
      </Menu>
    </div>
  );
}
