import { NavLink } from "react-router-dom";
import { useState } from "react";

import { useAuth, usePost, useUser } from "../";
import Modal from "../utils/Modal";
import TweetForm from "./NewTweetHandler";

export default function LeftSideBaar() {
  const { logOutFunction, currentUser } = useAuth();
  const {getUserByIdFunction}= useUser()
  const { getAllUserPostsHandlerFunction } = usePost();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="leftSideBar">
      <div className="feed">
        <NavLink to="/home">Feed</NavLink>
      </div>
      <div className="search">
        <NavLink to="/home/search">Search</NavLink>
      </div>
      <div className="explore">   <NavLink to="/home/explore">Explore</NavLink></div>
      <div className="bookMarks">
        <NavLink to="/home/bookmarks">Bookmarks</NavLink>
      </div>
      <div
        className="profile"
        onClick={() => {
          getUserByIdFunction(currentUser._id)
          getAllUserPostsHandlerFunction(currentUser.username);
        }}
      >
        <NavLink to={`/home/profile/${currentUser.username}`}>Profile</NavLink>
      </div>

      <div className="addTweet">
        <Modal
          status={modalOpen}
          setCloseModal={setModalOpen}
          modalText={"New Tweet"}
        >
         <TweetForm  setModalOpen={setModalOpen}status={modalOpen}/>
        </Modal>
      </div>

      <button onClick={logOutFunction}>Logout</button>
    </div>
  );
}
