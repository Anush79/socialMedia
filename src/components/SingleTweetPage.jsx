import { useState } from "react";

import { usePost } from "..";
import TweetCard from "./TweetCard";
import UsersCard from "./UsersCard";
import Modal from '../utils/Modal'
import { useParams } from "react-router-dom";

export default function SingleTweet() {
  // const [displayLikeDislike, setDisplayLikeDislike] = useState({display:false, displayWhat: "likes"});
  const {id}= useParams()
  const { allPosts } = usePost();
  
  const foundPost = allPosts.allPostsInDB.find(item=>item._id===id)
  return (
    <div className="tweetsSection">
      {foundPost && <TweetCard item={foundPost}onPostDetails = {true} />}
      <button
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        Liked by
      </button>
      <button>Disliked by</button>
      <div className="likedislike">

        {allPosts?.singlePost?.likes?.likedBy.map((item) => <UsersCard key={item._id} item={item} />)}
      </div>
    </div>
  );
}
