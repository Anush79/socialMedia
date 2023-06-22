import { usePost } from '../'
import TweetCard from './TweetCard'
import WhatsNew from './WriteNewTweet'
export default function TweetsSection() {
  const { allPosts } = usePost()
  return <div className="tweetsSection">
    <WhatsNew />
    {
      allPosts?.allPostsInDB.length > 0 ?
        allPosts?.allPostsInDB?.map(item => <TweetCard key={item.id} item={item} />) :
        "No post available"

    }
  </div>
}