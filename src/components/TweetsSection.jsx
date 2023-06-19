import {usePost} from '../'
import TweetCard from './TweetCard'
import WhatsNew from './WriteNewTweet'
export default function TweetsSection(){
  const {allPosts}  = usePost()
  return <div className="tweetsSection">
    <WhatsNew/>
    {
      allPosts.length>0?
      allPosts.map(item=><TweetCard key={item.id} item={item}/>):
      "No post available"

    }
  </div>
}