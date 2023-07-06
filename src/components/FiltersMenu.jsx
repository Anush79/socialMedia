import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ArrowCircleUpRoundedIcon from "@mui/icons-material/ArrowCircleUpRounded";
import ArrowCircleDownRoundedIcon from "@mui/icons-material/ArrowCircleDownRounded";
import SortRoundedIcon from "@mui/icons-material/SortRounded";

import { usePost } from "../context/postContext";
import { actionTypes } from "../utils/constants";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { postDispatch } = usePost();
  const { SORT_LATEST_POSTS, SORT_OLDEST_POSTS, TRENDING_POSTS } = actionTypes;
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
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <SortRoundedIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            postDispatch({ type: TRENDING_POSTS, payload: "" });
            handleClose();
          }}
        >
          <TrendingUpIcon />
          Trending
        </MenuItem>
        <MenuItem
          onClick={() => {
            postDispatch({ type: SORT_LATEST_POSTS, payload: "" });
            handleClose();
          }}
        >
          <ArrowCircleUpRoundedIcon />
          Latest
        </MenuItem>
        <MenuItem
          onClick={() => {
            postDispatch({ type: SORT_OLDEST_POSTS, payload: "" });
            handleClose();
          }}
        >
          <ArrowCircleDownRoundedIcon />
          Oldest
        </MenuItem>
      </Menu>
    </div>
  );
}
