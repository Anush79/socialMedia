import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Popover from "@mui/material/Popover";
import {
  AutoAwesome,
  Logout,
  ManageAccountsRounded,
  Settings,
} from "@mui/icons-material";

import { useAuth } from "../context/authContext";
import Modal from "../utils/Modal";
import EditProfile from "../pages/profile/EditProfile";
import Themechanger from "./ThemeChanger";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [themeOpen, setThemOpen] = useState(false);
  const { logOutFunction, currentUser } = useAuth();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(false);
  };

  return (
    <>
      {" "}
      <div>
        <Button
          id="basic-button"
          aria-controls={anchorEl ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={anchorEl ? "true" : undefined}
          onClick={handleClick}
        >
          <Settings />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={anchorEl}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            className="logout"
            title="Logout"
            role="button"
            onClick={() => {
              logOutFunction();
              handleClose();
            }}
          >
            <Logout /> Logout
          </MenuItem>

          <MenuItem
            onClick={() => {
              setModalOpen(true);
              handleClose();
            }}
          >
            <ManageAccountsRounded />
            Edit Profile
          </MenuItem>
          <MenuItem
            onClick={() => {
              setThemOpen(!themeOpen);
              handleClose();
            }}
          >
            <AutoAwesome />
            Change Theme
          </MenuItem>
        </Menu>
      </div>
      {
        <Modal status={modalOpen} setCloseModal={setModalOpen}>
          <EditProfile
            user={currentUser}
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
          />
        </Modal>
      }
      {
        <Popover
          id={"PopOver for theme selector"}
          open={themeOpen}
          anchorEl={themeOpen}
          onClose={() => {
            setThemOpen(!themeOpen);
          }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Themechanger />
        </Popover>
      }
    </>
  );
}
