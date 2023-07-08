
import { useAuth, usePost } from '../../'
import TweetCard from '../../components/TweetCard'
export default function Explore(){
  const {allPosts}= usePost()

  const {currentUser} = useAuth()
  
  // const exploreData= allPosts?.allPostsInDB.filter(
  //   (item)=>currentUser.following.every(person=> person.username!==item.username && currentUser.username!==item.username)
  // )


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
     allPosts?.allPostsInDB.length > 0 ?
     allPosts?.allPostsInDB.map(item => <TweetCard key={item.id} item={item} />) :
        "No post available"

    }
  </div>
  </div>
}