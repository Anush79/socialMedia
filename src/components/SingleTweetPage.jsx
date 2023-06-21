import { usePost } from ".."
import TweetCard from "./TweetCard"
export default function SingleTweet(){
  
  const {allPosts} = usePost()
  console.log(allPosts?.singlePost)
  return <div className="SingleTweet">{
    allPosts?.singlePost &&
    <TweetCard item={allPosts?.singlePost}/>
   }
  </div>
}