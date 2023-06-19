import {NavLink} from 'react-router-dom'
import { useAuth } from '../'

export default function LeftSideBaar() {
  const { logOutFunction } = useAuth()
  return <div className="leftSideBar">

    <div className="feed"><NavLink to='/home'>Feed</NavLink></div>
    <div className="search"><NavLink to='/home/search'>Search</NavLink></div>
    <div className="explore">Explore</div>
    <div className="bookMarks">Bookmarks</div>
    <div className="profile"><NavLink to="/home/profile">Profile</NavLink></div>

    <div className="addTweet">AddTweet</div>

    <button onClick={logOutFunction}>Logout</button>
  </div>
}