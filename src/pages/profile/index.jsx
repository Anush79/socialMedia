import { useEffect, useState } from "react";
import { NavLink, useParams, useLocation, useNavigate } from "react-router-dom";
import { useAuth, usePost, useUser } from "../../";
import "./profile.css";
import Modal from "../../utils/Modal";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import LinkIcon from "@mui/icons-material/Link";
import TweetCard from "../../components/TweetCard";
import EditProfile from "./EditProfile";
import { toast } from "react-toastify";

export default function Profile() {
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
  const location = useLocation();
  const navigate = useNavigate()
 
  
  const isLoggedUser = paramUsername === currentUser.username;
  // const foundUserInDb = isLoggedUser ?  allUsersInDB.find((person) => person.username === paramUsername):userWithId;
  const foundUserInDb = isLoggedUser ? currentUser : allUsersInDB.find((person) => person.username === paramUsername);
  const [modalOpen, setModalOpen] = useState(isNewUser(foundUserInDb.createdAt));
  
  const checkFollow = isAlreadyFollowing(foundUserInDb?._id);

  useEffect(() => {
    getAllUsersFunction();
   
  }, [currentUser]);
  useEffect(() => {
    getUserByIdFunction(paramId);
  }, [allUsersInDB]);
  if(foundUserInDb.username === undefined){
    toast("User not found in the DataBase")
    navigate('/home/error')
  }
  else  return (
    <div className="ProfileContainer">
      <h3 className="header">
        {foundUserInDb?.firstName}
        {"'s"} Profile{" "}
      </h3>
      <div className="profileHeader">
        <img
          src={foundUserInDb?.backgroundImage}
          alt="something random background "
          width={"100%"}
          height={"300px"}
          className="bgpic"
        />
        <span className="profilePicContainer">
          <img
            src={
              foundUserInDb?.profileAvatar?.length < 1
                ? `https://ui-avatars.com/api/?name=${foundUserInDb.firstName}+${foundUserInDb.lastName}`
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
            <NavLink to={foundUserInDb?.website} target="_blank">
              <small className="profileWebsite">
                <LinkIcon />
                {foundUserInDb?.website}
              </small>
            </NavLink>
          </span>

          <p className="followCounts">
            <span>
              <b>{foundUserInDb?.followers?.length}</b>{" "}
              <small className="smallUserName">Followers</small>
            </span>
            <span>
              <b>{foundUserInDb?.following?.length}</b>{" "}
              <small className="smallUserName">Followings</small>
            </span>
          </p>

          {isLoggedUser && (
            <Modal
              status={modalOpen}
              setCloseModal={setModalOpen}
              modalText="Edit Profile"
            >
              <EditProfile
                user={currentUser}
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
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
