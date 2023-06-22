import { useState } from "react";

import { usePost } from "..";
import TweetCard from "./TweetCard";
import UsersCard from "./UsersCard";
export default function SingleTweet() {
  // const [displayLikeDislike, setDisplayLikeDislike] = useState({display:false, displayWhat: "likes"});

  const { allPosts } = usePost();
  
  return (
    <div className="Tweet">
      {allPosts?.singlePost && <TweetCard item={allPosts?.singlePost} />}
      <button
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        Liked by
      </button>
      <button>Disliked by</button>
      <div className="likedislike">
        {allPosts?.singlePost?.likes?.likedBy.map((item) => <UsersCard key={item._id} item={item}/>)}
      </div>
    </div>
  );
}
