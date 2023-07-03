import { useState } from "react";

import { usePost ,useUser} from "..";
import TweetCard from "./TweetCard";
import UsersCard from "./UsersCard";
import Modal from '../utils/Modal'
import { useParams, useLocation, useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export default function SingleTweet() {
  // const [displayLikeDislike, setDisplayLikeDislike] = useState({display:false, displayWhat: "likes"});
  const {id}= useParams()
  const { allPosts } = usePost();
  const {getUserByUsername}= useUser()
  const foundPost = allPosts.allPostsInDB.find(item=>item._id===id)
const location= useLocation();
const navigate = useNavigate()
function goBack (){
  if (location?.state?.from?.pathname)
  navigate(location?.state?.from?.pathname);
else navigate("/home/feed", { replace: true });
}

  return (
    <div className="tweetsSection">
      <ArrowBackIcon className="clickableIcon" onClick={
        goBack
      }/>
      {foundPost && <TweetCard item={foundPost}onPostDetails = {true} />}
        Liked by : 
      
      <div className="likedislike">

        {allPosts?.singlePost?.likes?.likedBy?.length > 0 ?
        allPosts?.singlePost?.likes?.likedBy.map((item) => {
          const user = getUserByUsername(item.username)
          return<UsersCard key={item._id} item={user} />}): <p>Liked by User data not available</p> }
      </div>
    </div>
  );
}
