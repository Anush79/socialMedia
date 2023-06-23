import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth, usePost, useUser } from "../../";
import Modal from "../../utils/Modal";

import TweetCard from "../../components/TweetCard";

export default function Profile() {
  const [modalOpen, setModalOpen] = useState(false);
  const { currentUser, token } = useAuth();
  const {
    users: { userWithId },
  } = useUser();
  const { allPosts } = usePost();

  console.log("from profile ", currentUser);
  console.log(modalOpen, "from profile");
  return (
    <div className="ProfileContainer">
      <h2>Profile page</h2>
      <div className="profileHeader">
        <img
          src={currentUser?.backgroundImage}
          alt=""
          width={"100%"}
          height={"300px"}
        />
        <img src={currentUser?.profileAvatar} alt="" width={"100px"} />
        <h3>{currentUser?.firstName}</h3>
        <h4>{currentUser?.bio}</h4>
        <p>
          Following: {currentUser?.following.length} Followers:{" "}
          {currentUser.followers.length}
        </p>
        <h5>
          <NavLink to={currentUser?.website} target="_blank">
            {currentUser?.website}
          </NavLink>
        </h5>
        <div
          className="editProfile"
         
        >
          <Modal
            status={modalOpen}
            setCloseModal={setModalOpen}
            modalText={"Edit Profile"}
          ></Modal>
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
