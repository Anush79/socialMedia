import {usePost} from '../'
import TweetCard from './TweetCard'
export default function TweetsSection(){
  const {allPosts}  = usePost()
  return <div className="tweetsSection">
    {
      allPosts.length>0?
      allPosts.map(item=><TweetCard key={item.id} item={item}/>):
      "No post available"
    }
  </div>
}