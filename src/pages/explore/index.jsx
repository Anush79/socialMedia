
import { useAuth, usePost, useUser } from '../../'
import TweetCard from '../../components/TweetCard'
export default function Explore(){
  const {allPosts}= usePost()
  const {users} =useUser()
  const {currentUser} = useAuth()
  
  const exploreData= allPosts?.allPostsInDB.filter(
    (item)=>currentUser.following.every(person=> person.username!==item.username && currentUser.username!==item.username)
  )
console.log(exploreData)

  return <div className="explorePage">
<h2>Explore Page</h2>
<div className="tweetsSection">
   
    {
     exploreData.length > 0 ?
     exploreData.map(item => <TweetCard key={item.id} item={item} />) :
        "No post available"

    }
  </div>
  </div>
}