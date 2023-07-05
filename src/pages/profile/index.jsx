import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useAuth, usePost, useUser } from "../../";
import "./profile.css";
import Modal from "../../utils/Modal";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import TweetCard from "../../components/TweetCard";
import EditProfile from "./EditProfile";

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
  const [modalOpen, setModalOpen] = useState(false);
  const isLoggedUser = paramUsername === currentUser.username;
  // const foundUserInDb = isLoggedUser ?  allUsersInDB.find((person) => person.username === paramUsername):userWithId;
  const foundUserInDb = isLoggedUser ? currentUser:userWithId;

  
  const checkFollow = isAlreadyFollowing(foundUserInDb?._id);

  useEffect(() => {
    getAllUsersFunction();
  }, [currentUser]);
  useEffect(() => {
    getUserByIdFunction(paramId);
  }, [allUsersInDB]);
  return (
    <div className="ProfileContainer">
      <h2>Profile page</h2>
      <div className="profileHeader">
        <img
          src={foundUserInDb?.backgroundImage}
          alt="something random background picture"
          width={"100%"}
          height={"300px"}
          className="bgpic"
        />
        <img
          src={
            foundUserInDb?.profileAvatar?.length < 1
              ? `https://ui-avatars.com/api/?name=${foundUserInDb.firstName}+${foundUserInDb.lastName}`
              : foundUserInDb?.profileAvatar
          }
          alt={`${foundUserInDb?.username} profile picture`}
          className="profilePic"
          width={"100px"}
        />
        <div className="nameandfollow">
          <div className="userName">
            <p>
              {foundUserInDb?.firstName} {foundUserInDb?.lastName}
            </p>
            <p className="smallUserName clickableLink"> @{foundUserInDb?.username}</p>
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
              {isLoggedUser && <div
          className="logout"
          title="Logout"
          role="button"
          onClick={(e) => {
            e.stopPropagation();
            logOutFunction();
          }}
        >
          <LogoutRoundedIcon />
        </div>}
            </p>
          )}
        </div>
        <div>
        <h4>{foundUserInDb?.bio}</h4>
       
          <NavLink to={foundUserInDb?.website} target="_blank">
            <small>{foundUserInDb?.website}</small>
          </NavLink>
            <Modal
              status={modalOpen}
              setCloseModal={setModalOpen}
              modalText="Edit Profile"
            >
              <EditProfile
                user={foundUserInDb}
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
              />
            </Modal>
          </div>
   
       
      </div>
      <div className="profileBody">
        <div className="tweetsSection">
          {allPosts?.allPostsInDB?.length > 0
            ? allPosts?.allPostsInDB?.map((item) => (
                 item?.username=== foundUserInDb?.username?
                <TweetCard key={item?._id} item={item} />:null
              ))
            : "No post available"}
        </div>
      </div>
    </div>
  );
}
