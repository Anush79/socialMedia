import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';

import { useAuth, usePost, useUser } from "../";
import '../styles/leftSideBar.css';
import Modal from "../utils/Modal";
import TweetForm from "./NewTweetHandler";
import ProfileMenu from './ProfileMenu'

export default function LeftSideBaar() {
  const { logOutFunction, currentUser } = useAuth();
  const {getUserByIdFunction}= useUser()
  const { getAllUserPostsHandlerFunction } = usePost();
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const openUserProfile = (item) => {
    getUserByIdFunction(item?._id);
    getAllUserPostsHandlerFunction(item?.username);
    navigate(`/home/profile/${item?.username}/${item?._id}`); 
  };

  return (
    <div className="leftSideBar">
    <div className="leftUpper">
      <div className="feed clickableIcon">
        
        <NavLink to="/home/feed"><DynamicFeedIcon  /><span className="hideInMobile clickableIcon">Feed</span></NavLink>
      </div>
      <div className="search clickableIcon">

        <NavLink to="/home/search">
        <PersonSearchOutlinedIcon /><span className="hideInMobile clickableIcon">Search</span></NavLink>
      </div>
      <div className="explore clickableIcon">  
       <NavLink to="/home/explore"> <ExploreOutlinedIcon /><span className="hideInMobile clickableIcon">Explore</span></NavLink>
       </div>
      <div className="bookMarks clickableIcon">
        
        <NavLink to="/home/bookmarks"><BookmarksOutlinedIcon /><span className="hideInMobile clickableIcon">Bookmarks</span></NavLink>
      </div>
      <div
        className="profile clickableIcon"
        onClick={() => {
          getUserByIdFunction(currentUser._id);          
          getAllUserPostsHandlerFunction(currentUser.username);
        }}
      >
        <NavLink to={`/home/profile/${currentUser.username}/${currentUser._id}`}><AccountBoxOutlinedIcon /><span className="hideInMobile clickableIcon">Profile</span></NavLink>
      </div>
</div>
      <div className="addTweet">
        <Modal
          status={modalOpen}
          setCloseModal={setModalOpen}
          modalText={"New Post"}
        >
         <TweetForm  setModalOpen={setModalOpen}status={modalOpen}/>
        </Modal>
      </div>
      <div className="suggestedProfile" onClick={()=>{openUserProfile(currentUser)}}>
      <p className="userPP">
          <NavLink to={`/home/profile/${currentUser.username}/${currentUser._id}`}>
            <img src={currentUser?.profileAvatar?.length<1?`https://ui-avatars.com/api/?name=${currentUser.firstName}+${currentUser.lastName}`:currentUser?.profileAvatar} alt="avatar"/>
          </NavLink>
        </p>
        <div className="userNameSuggestion clickableIcon">
          {currentUser.firstName} {currentUser.lastName}
          <p>
            <small>@{currentUser.username}</small>
          </p>
        </div>
        <span
        onClick={(e)=>{e.stopPropagation()}}>

           <ProfileMenu/>
        </span>
     
      </div>

      
    </div>
  );
}
