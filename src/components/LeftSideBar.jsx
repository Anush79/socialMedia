import { useState } from "react";
import { NavLink } from "react-router-dom";

import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

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
        
        <NavLink to="/home/feed"><DynamicFeedIcon/><span className="hideInMobile">Feed</span></NavLink>
      </div>
      <div className="search">

        <NavLink to="/home/search">
        <PersonSearchOutlinedIcon/><span className="hideInMobile">Search</span></NavLink>
      </div>
      <div className="explore">  
       
       <NavLink to="/home/explore"> <ExploreOutlinedIcon/><span className="hideInMobile">Explore</span></NavLink></div>
      <div className="bookMarks">
        
        <NavLink to="/home/bookmarks"><BookmarksOutlinedIcon/><span className="hideInMobile">Bookmarks</span></NavLink>
      </div>
      <div
        className="profile"
        onClick={() => {
          getUserByIdFunction(currentUser._id);          
          getAllUserPostsHandlerFunction(currentUser.username);
        }}
      >
        <NavLink to={`/home/profile/${currentUser.username}/${currentUser._id}`}><AccountBoxOutlinedIcon/><span className="hideInMobile">Profile</span></NavLink>
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
