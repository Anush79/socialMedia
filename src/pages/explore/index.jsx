
import { useAuth, usePost, useUser } from '../../'
import TweetCard from '../../components/TweetCard'
export default function Explore(){
  const {allPosts}= usePost()
  const {users} =useUser()
  const {currentUser} = useAuth()
  
  const exploreData= allPosts?.allPostsInDB.filter(
    (item)=>currentUser.following.every(person=> person.username!==item.username && currentUser.username!==item.username)
  )


  return <div className="explorePage">
<h2 className="header">
        <img src={
              currentUser?.profileAvatar?.length < 1
                ? `https://ui-avatars.com/api/?name=${currentUser.firstName}+${currentUser.lastName}`
                : currentUser?.profileAvatar
            } alt="" width="35px"/>
        Explore</h2>
<div className="tweetsSection">
   
    {
     exploreData.length > 0 ?
     exploreData.map(item => <TweetCard key={item.id} item={item} />) :
        "No post available"

    }
  </div>
  </div>
}