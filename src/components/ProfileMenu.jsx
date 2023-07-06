import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { AutoAwesome, Edit, EditNoteSharp, Logout, ManageAccountsRounded, Settings, StarBorderOutlined } from '@mui/icons-material';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Settings/>
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
        <MenuItem onClick={handleClose}><AutoAwesome/>Change Theme</MenuItem>
        <MenuItem onClick={handleClose}><ManageAccountsRounded/>Edit Profile</MenuItem>
        <MenuItem onClick={handleClose}><Logout/> Logout</MenuItem>
      </Menu>
    </div>
  );
}
