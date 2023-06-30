import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useAuth, usePost, useUser } from "../../";

import '../../styles/profile.css'
import Modal from "../../utils/Modal";
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import TweetCard from "../../components/TweetCard";
import EditProfile from "./EditProfile";

export default function Profile() {
  const { currentUser } = useAuth();
  const {
    users: { userWithId, allUsersInDB },getAllUsersFunction,getUserByIdFunction
  } = useUser();
  const { allPosts } = usePost();
  const { username: paramUsername , _id:paramId} = useParams();
  const [modalOpen, setModalOpen] = useState(false);
  const isLoggedUser =   paramUsername === currentUser.username;
  const foundUserInDb =
    userWithId ??
    allUsersInDB.find((person) => person.username === paramUsername);
useEffect(()=>{
  getAllUsersFunction()
},[])
useEffect(()=>{
  getUserByIdFunction(paramId)
},[allUsersInDB])
  return (
    <div className="ProfileContainer">
      <h2>Profile page</h2>
      <div className="profileHeader">
        <img
          src={foundUserInDb?.backgroundImage}
          alt=""
          width={"100%"}
          height={"300px"}
        />
        <img
          src={
            foundUserInDb?.profileAvatar?.length < 1
              ? `https://ui-avatars.com/api/?name=${foundUserInDb.firstName}+${foundUserInDb.lastName}`
              : foundUserInDb?.profileAvatar
          }
          alt=""
          width={"100px"}
        />
        <h3>
          {foundUserInDb?.firstName} {foundUserInDb?.lastName}
        </h3>
        <h4>{foundUserInDb?.bio}</h4>
        <p>
          Following: {foundUserInDb?.following?.length} Followers:{" "}
          {foundUserInDb?.followers?.length}
        </p>
        <h5>
          <NavLink to={foundUserInDb?.website} target="_blank">
            {foundUserInDb?.website}
          </NavLink>
        </h5>
        {isLoggedUser && (
          <div className="editProfile">
            <Modal
              status={modalOpen}
              setCloseModal={setModalOpen}
              modalText={"Edit Profile"}
            >
              <EditProfile user={foundUserInDb} modalOpen={modalOpen} setModalOpen={setModalOpen}/>
            </Modal>
          </div>
        )}
        <div className="logout">
        <LogoutRoundedIcon/>
        </div>
      </div>
      <div className="profileBody">
        <div className="tweetsSection">
          {allPosts?.allPostOfUser.length > 0
            ? allPosts?.allPostOfUser?.map((item) => (
                <TweetCard key={item.id} item={item} />
              ))
            : "No post available"}
        </div>
      </div>
    </div>
  );
}
