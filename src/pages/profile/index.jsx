import { useState } from "react";
import { NavLink , useParams} from "react-router-dom";
import { useAuth, usePost, useUser } from "../../";
import Modal from "../../utils/Modal";

import TweetCard from "../../components/TweetCard";
import EditProfile from "./EditProfile";


export default function Profile() {

  const [modalOpen, setModalOpen] = useState(false);
  const { currentUser, token } = useAuth();
  const {
    users: { userWithId },
  } = useUser();
  const { allPosts } = usePost();
  const {username:paramUsername}=useParams()
  console.log(paramUsername)
  return (
    <div className="ProfileContainer">
      <h2>Profile page</h2>
      <div className="profileHeader">
        <img
          src={userWithId?.backgroundImage}
          alt=""
          width={"100%"}
          height={"300px"}
        />
        <img src={userWithId?.profileAvatar} alt="" width={"100px"} />
        <h3>{userWithId?.firstName} {userWithId?.lastName}</h3>
        <h4>{userWithId?.bio}</h4>
        <p>
          Following: {userWithId?.following.length} Followers:{" "}
          {userWithId.followers.length}
        </p>
        <h5>
          <NavLink to={userWithId?.website} target="_blank">
            {userWithId?.website}
          </NavLink>
        </h5>
        <div className="editProfile">
          <Modal
            status={modalOpen}
            setCloseModal={setModalOpen}
            modalText={"Edit Profile"}
          >
            <EditProfile user={userWithId}/>
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
