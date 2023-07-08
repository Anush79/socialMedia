import { useEffect } from 'react';
import { usePost, useAuth } from '../'
import TweetCard from './TweetCard'
import WhatsNew from './WriteNewTweet'
export default function TweetsSection() {
  const { allPosts } = usePost();
  const {currentUser} =useAuth()
  const feedPosts = allPosts?.allPostsInDB?.filter(
    (item)=>currentUser.following.some(person=> person.username===item.username || currentUser.username === item.username)
  )
  useEffect(()=>{
    window.scroll({ top: 0, behavior: "smooth" });
  },[])
  return <div className="tweetsSection">
    <WhatsNew />
    {
      feedPosts?.length > 0 ?
      feedPosts?.map(item => <TweetCard key={item.id} item={item} />) :
        <div> No post available,start following someone or write your own tweet </div>

    }
  </div>
}