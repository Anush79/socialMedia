import LinkIcon from "@mui/icons-material/Link";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Modal from '@mui/material/Modal';
import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { useAuth, usePost, useUser } from "../../";
import TweetCard from "../../components/TweetCard";
import UsersCard from "../../components/UsersCard";
// import Modal from "../../utils/Modal";
import EditProfile from "./EditProfile";
import "./profile.css";

export default function Profile() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [editModalOpen , setEditModalOpen] = useState(false)
  const [toggleFollowList, setToggleFollowList] = useState("followers");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { currentUser, logOutFunction } = useAuth();
  const {
    users: { userWithId, allUsersInDB },
    getAllUsersFunction,
    getUserByIdFunction,
    isAlreadyFollowing,
    unFollowUserFunction,
    followUserFunction,
  } = useUser();
  const { allPosts } = usePost();
  const { username: paramUsername, _id: paramId } = useParams();
  const navigate = useNavigate();

  const isLoggedUser = paramUsername === currentUser?.username;
  const foundUserInDb = isLoggedUser
    ? currentUser
    : allUsersInDB.find((person) => person?.username === paramUsername) ||
      userWithId;
  const [modalOpen, setModalOpen] = useState(
    isNewUser(foundUserInDb?.createdAt)
  );

  const checkFollow = isAlreadyFollowing(foundUserInDb?._id);

  useEffect(() => {
    getAllUsersFunction();
  }, [currentUser]);
  useEffect(() => {
    getUserByIdFunction(paramId);
  }, [allUsersInDB]);
  if (foundUserInDb?.username === undefined) {
    toast("User not found in the DataBase");
    navigate("/home/error");
  } else
    return (
      <div className="ProfileContainer">
        <h3 className="header">
          {foundUserInDb?.firstName}
          {"'s"} Profile{" "}
        </h3>
        <div className="profileHeader">
          <div className="backImageContainer">
            <img
              src={foundUserInDb?.backgroundImage}
              alt={foundUserInDb?.firstName + "'s background "}
              width={"100%"}
              height={"300px"}
              className="bgpic"
            />
          </div>

          <span className="profilePicContainer">
            <img
              src={
                foundUserInDb?.profileAvatar?.length < 1
                  ? `https://ui-avatars.com/api/?name=${foundUserInDb?.firstName}+${foundUserInDb?.lastName}`
                  : foundUserInDb?.profileAvatar
              }
              alt={`${foundUserInDb?.username} profile picture`}
              className="profilePic"
            />
          </span>
          <div className="nameandfollow">
            <div className="userName">
              <h3>
                {foundUserInDb?.firstName} {foundUserInDb?.lastName}
              </h3>
              <p className="smallUserName clickableIcons">
                {" "}
                @{foundUserInDb?.username}
              </p>
            </div>

            {!isLoggedUser && (
              <p>
                {checkFollow ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      unFollowUserFunction(foundUserInDb?._id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      followUserFunction(foundUserInDb?._id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </p>
            )}
            {isLoggedUser && (
              <div
                className="logout"
                title="Logout"
                role="button"
                onClick={(e) => {
                  e.stopPropagation();
                  logOutFunction();
                }}
              >
                <LogoutRoundedIcon />
              </div>
            )}
          </div>
          <div>
            <p>{foundUserInDb?.bio}</p>
            <span>
            {foundUserInDb?.website ?  <NavLink to={foundUserInDb?.website} target="_blank">
                <small className="profileWebsite">
                  <LinkIcon />
                  {foundUserInDb?.website }
                </small>
              </NavLink> : "No website available"}
            </span>

            <p className="followCounts">
              <span>
                <b>{foundUserInDb?.followers?.length}</b>{" "}
                <small
                  className="smallUserName clickableIcon"
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={(e) => {
                    setToggleFollowList(() => "followers");
                    handleClick(e);
                  }}
                >
                  Followers
                </small>
                {toggleFollowList === "followers" && (
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <div className="suggestions">
                      {foundUserInDb?.followers?.length > 0
                        ? foundUserInDb?.followers?.map((item) => {
                            return (
                              <MenuItem onClick={handleClose}>
                                <UsersCard key={item._id} item={item} />
                              </MenuItem>
                            );
                          })
                        : "No followers "}
                    </div>
                  </Menu>
                )}
              </span>
              <span>
                <b>{foundUserInDb?.following?.length}</b>{" "}
                <small
                  className="smallUserName clickableIcon"
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={(e) => {
                    setToggleFollowList(() => "followings");
                    handleClick(e);
                  }}
                >
                  Followings
                </small>
                {toggleFollowList === "followings" && (
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <div className="suggestions">
                      {foundUserInDb?.following?.length > 0
                        ? foundUserInDb?.following?.map((item) => {
                            return (
                              <MenuItem onClick={handleClose}>
                                <UsersCard key={item._id} item={item} />
                              </MenuItem>
                            );
                          })
                        : "Not following anyone"}
                    </div>
                  </Menu>
                )}
              </span>
            </p>

            {isLoggedUser && (
              <Modal
              open={editModalOpen}
        onClose={setEditModalOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
               
              >
                <EditProfile
                  user={currentUser}
                  modalOpen={editModalOpen}
                  setModalOpen={setEditModalOpen}
                />
              </Modal>
            )}
          </div>
        </div>
        <div className="profileBody">
          <h3>Posts</h3>
          <div className="tweetsSection">
            {allPosts?.allPostsInDB?.length > 0
              ? allPosts?.allPostsInDB?.map((item) =>
                  item?.username === foundUserInDb?.username ? (
                    <TweetCard key={item?._id} item={item} />
                  ) : null
                )
              : "No post available"}
          </div>
        </div>
        
      </div>
    );
}

function isNewUser(date) {
  const currentDate = new Date();
  const targetDate = new Date(date);
  const diffMilliseconds = currentDate.getTime() - targetDate.getTime();
  const diffMinutes = diffMilliseconds / (1000 * 30);

  return diffMinutes < 1;
}
