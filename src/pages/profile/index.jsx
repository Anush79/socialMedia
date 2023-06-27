import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useAuth, usePost, useUser } from "../../";
import Modal from "../../utils/Modal";

import TweetCard from "../../components/TweetCard";
import EditProfile from "./EditProfile";


export default function Profile() {

  const [modalOpen, setModalOpen] = useState(false);

  const {
    users: { userWithId, allUsersInDB }
  } = useUser();
  const { allPosts } = usePost();
  const { username: paramUsername } = useParams()

  const foundUserInDb = allUsersInDB.find(person => person.username === paramUsername) ?? userWithId
  console.log(foundUserInDb)
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
        <img src={foundUserInDb?.profileAvatar} alt="" width={"100px"} />
        <h3>{foundUserInDb?.firstName} {foundUserInDb?.lastName}</h3>
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
        <div className="editProfile">
          <Modal
            status={modalOpen}
            setCloseModal={setModalOpen}
            modalText={"Edit Profile"}
          >
            <EditProfile user={foundUserInDb} />
          </Modal>
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
