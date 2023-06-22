import {NavLink} from 'react-router-dom'
import { useAuth ,useUser, usePost} from '../'

export default function LeftSideBaar() {
  const { logOutFunction, currentUser, token } = useAuth()
  const {getAllUserPostsHandlerFunction}= usePost()
  // const {getBookMarksFunction}= useUser()
  return <div className="leftSideBar">

    <div className="feed"><NavLink to='/home'>Feed</NavLink></div>
    <div className="search"><NavLink to='/home/search'>Search</NavLink></div>
    <div className="explore">Explore</div>
    <div className="bookMarks" ><NavLink to="/home/bookmarks">Bookmarks</NavLink></div>
    <div className="profile" onClick={()=>{getAllUserPostsHandlerFunction(currentUser.username)}}><NavLink to="/home/profile">Profile</NavLink></div>

    <div className="addTweet">AddTweet</div>

    <button onClick={logOutFunction}>Logout</button>
  </div>
}